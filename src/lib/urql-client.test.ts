import { describe, test, expect, vi, beforeEach } from 'vitest';
import { Client } from 'urql';

// urqlクライアントの設定をテストするため、モジュールをモック
vi.mock('urql', () => ({
  Client: vi.fn(),
  fetchExchange: vi.fn(() => 'fetchExchange'),
  errorExchange: vi.fn(() => 'errorExchange'),
}));

vi.mock('@urql/exchange-graphcache', () => ({
  cacheExchange: vi.fn(() => 'cacheExchange'),
}));

describe('urqlクライアント設定', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // windowオブジェクトをリセット
    Object.defineProperty(global, 'window', {
      value: undefined,
      writable: true,
    });
  });

  test('サーバーサイドでは完全URLを使用する', async () => {
    // Arrange
    // windowが存在しない状態（サーバーサイド）
    Object.defineProperty(global, 'window', {
      value: undefined,
      writable: true,
    });

    // Act
    // urql-clientモジュールを動的にインポートして設定を確認
    await import('./urql-client');

    // Assert
    expect(Client).toHaveBeenCalledWith(
      expect.objectContaining({
        url: 'http://localhost:3000/api/graphql',
      })
    );
  });

  test('クライアントサイドでは相対URLを使用する', async () => {
    // Arrange
    // windowオブジェクトを定義（クライアントサイド）
    Object.defineProperty(global, 'window', {
      value: {},
      writable: true,
    });

    // モジュールキャッシュをクリア
    vi.resetModules();

    // Act
    await import('./urql-client');

    // Assert
    expect(Client).toHaveBeenCalledWith(
      expect.objectContaining({
        url: '/api/graphql',
      })
    );
  });

  test('正しいexchangesが設定されている', async () => {
    // Act
    await import('./urql-client');

    // Assert
    expect(Client).toHaveBeenCalledWith(
      expect.objectContaining({
        exchanges: ['errorExchange', 'cacheExchange', 'fetchExchange'],
      })
    );
  });

  test('SSRサポートとキャッシュファーストポリシーが設定されている', async () => {
    // Act
    await import('./urql-client');

    // Assert
    expect(Client).toHaveBeenCalledWith(
      expect.objectContaining({
        suspense: false,
        requestPolicy: 'cache-first',
      })
    );
  });

  test('フェッチオプションが正しく設定されている', async () => {
    // Act
    await import('./urql-client');

    // Assert
    const clientCall = (Client as any).mock.calls[0][0];
    const fetchOptions = clientCall.fetchOptions();
    
    expect(fetchOptions).toEqual({
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
});

describe('urqlキャッシュ設定', () => {
  test('cacheExchangeが正しい設定で呼び出される', async () => {
    // Arrange
    const { cacheExchange } = await import('@urql/exchange-graphcache');

    // Act
    await import('./urql-client');

    // Assert
    expect(cacheExchange).toHaveBeenCalledWith(
      expect.objectContaining({
        updates: expect.objectContaining({
          Mutation: expect.objectContaining({
            createUser: expect.any(Function),
            createClient: expect.any(Function),
            createTrainer: expect.any(Function),
            createSession: expect.any(Function),
          }),
        }),
        keys: expect.objectContaining({
          User: expect.any(Function),
          Client: expect.any(Function),
          Trainer: expect.any(Function),
          PTSession: expect.any(Function),
        }),
      })
    );
  });

  test('キー生成関数が正しく動作する', async () => {
    // Arrange
    const { cacheExchange } = await import('@urql/exchange-graphcache');
    await import('./urql-client');
    
    const cacheConfig = (cacheExchange as any).mock.calls[0][0];

    // Act & Assert
    expect(cacheConfig.keys.User({ id: 'user-123' })).toBe('user-123');
    expect(cacheConfig.keys.Client({ id: 'client-456' })).toBe('client-456');
    expect(cacheConfig.keys.Trainer({ id: 'trainer-789' })).toBe('trainer-789');
    expect(cacheConfig.keys.PTSession({ id: 'session-101' })).toBe('session-101');
  });

  test('Mutationキャッシュ更新関数が存在する', async () => {
    // Arrange
    const { cacheExchange } = await import('@urql/exchange-graphcache');
    await import('./urql-client');
    
    const cacheConfig = (cacheExchange as any).mock.calls[0][0];
    const mockCache = {
      invalidate: vi.fn(),
    };

    // Act
    cacheConfig.updates.Mutation.createUser(null, null, mockCache, null);
    cacheConfig.updates.Mutation.createClient(null, null, mockCache, null);
    cacheConfig.updates.Mutation.createTrainer(null, null, mockCache, null);
    cacheConfig.updates.Mutation.createSession(null, null, mockCache, null);

    // Assert
    expect(mockCache.invalidate).toHaveBeenCalledWith('Query', 'users');
    expect(mockCache.invalidate).toHaveBeenCalledWith('Query', 'clients');
    expect(mockCache.invalidate).toHaveBeenCalledWith('Query', 'trainers');
    expect(mockCache.invalidate).toHaveBeenCalledWith('Query', 'sessions');
    expect(mockCache.invalidate).toHaveBeenCalledTimes(4);
  });
});

describe('errorExchange設定', () => {
  test('エラーハンドリング関数が設定されている', async () => {
    // Arrange
    const { errorExchange } = await import('urql');
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    // Act
    await import('./urql-client');
    
    const errorConfig = (errorExchange as any).mock.calls[0][0];
    const testError = new Error('Test GraphQL Error');
    errorConfig.onError(testError);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith('GraphQL Error:', testError);
    
    // Cleanup
    consoleSpy.mockRestore();
  });
});

import { Client, fetchExchange, errorExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

const isServerSide = typeof window === 'undefined';

export const urqlClient = new Client({
  url: isServerSide 
    ? 'http://localhost:3000/api/graphql'
    : '/api/graphql',
  exchanges: [
    // エラーハンドリング（ログ出力、再試行など）
    errorExchange({
      onError: (error) => {
        console.error('GraphQL Error:', error);
      },
    }),
    // キャッシュ設定の最適化
    cacheExchange({
      // キャッシュの更新戦略を設定
      updates: {
        Mutation: {
          createUser: (result, args, cache, info) => {
            // ユーザー作成後にusersクエリのキャッシュを無効化
            cache.invalidate('Query', 'users');
          },
          createClient: (result, args, cache, info) => {
            // クライアント作成後にclientsクエリのキャッシュを無効化
            cache.invalidate('Query', 'clients');
          },
          createTrainer: (result, args, cache, info) => {
            // トレーナー作成後にtrainersクエリのキャッシュを無効化
            cache.invalidate('Query', 'trainers');
          },
          createSession: (result, args, cache, info) => {
            // セッション作成後にsessionsクエリのキャッシュを無効化
            cache.invalidate('Query', 'sessions');
          },
        },
      },
      // キーの生成戦略をカスタマイズ
      keys: {
        User: (data) => data.id as string,
        Client: (data) => data.id as string,
        Trainer: (data) => data.id as string,
        PTSession: (data) => data.id as string,
      },
    }),
    fetchExchange,
  ],
  // SSRサポートのための設定
  suspense: false,
  // キャッシュファーストで高速化、必要に応じてネットワークから取得
  requestPolicy: 'cache-first',
  // フェッチオプション（タイムアウト設定など）
  fetchOptions: () => ({
    headers: {
      'Content-Type': 'application/json',
    },
  }),
});

export default urqlClient;

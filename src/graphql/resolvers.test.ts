import { describe, test, expect, vi, beforeEach } from 'vitest';
import { GraphQLResolveInfo, FieldNode, SelectionSetNode } from 'graphql';
import { resolvers, Context } from './resolvers';

// Prismaクライアントのモック
const mockPrismaClient = {
  user: {
    findMany: vi.fn(),
    create: vi.fn(),
  },
  client: {
    findMany: vi.fn(),
    create: vi.fn(),
  },
  trainer: {
    findMany: vi.fn(),
    create: vi.fn(),
  },
  pTSession: {
    findMany: vi.fn(),
    create: vi.fn(),
  },
};

const mockContext: Context = {
  prisma: mockPrismaClient as any,
};

describe('GraphQLリゾルバ', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Query', () => {
    test('hello - 固定文字列を返す', () => {
      // Act
      const result = resolvers.Query.hello();

      // Assert
      expect(result).toBe('Hello from GraphQL!');
    });

    test('users - 全ユーザーを取得する', async () => {
      // Arrange
      const mockUsers = [
        { id: '1', email: 'test@example.com', name: 'Test User', role: 'CLIENT' },
      ];
      mockPrismaClient.user.findMany.mockResolvedValue(mockUsers);

      // Act
      const result = await resolvers.Query.users(null, {}, mockContext);

      // Assert
      expect(mockPrismaClient.user.findMany).toHaveBeenCalledWith({
        include: {
          credentials: true,
        },
      });
      expect(result).toEqual(mockUsers);
    });

    test('clients - 動的includeでクライアントを取得する', async () => {
      // Arrange
      const mockClients = [
        {
          id: '1',
          userId: '1',
          user: { id: '1', email: 'client@example.com', name: 'Client User' },
        },
      ];
      mockPrismaClient.client.findMany.mockResolvedValue(mockClients);

      const mockInfo: Partial<GraphQLResolveInfo> = {
        fieldNodes: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'clients' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'user' } },
              ] as FieldNode[],
            } as SelectionSetNode,
          } as FieldNode,
        ],
      };

      // Act
      const result = await resolvers.Query.clients(
        null,
        {},
        mockContext,
        mockInfo as GraphQLResolveInfo
      );

      // Assert
      expect(mockPrismaClient.client.findMany).toHaveBeenCalledWith({
        include: { user: true },
      });
      expect(result).toEqual(mockClients);
    });

    test('clients - リレーションフィールドが要求されない場合はincludeなし', async () => {
      // Arrange
      const mockClients = [{ id: '1', userId: '1' }];
      mockPrismaClient.client.findMany.mockResolvedValue(mockClients);

      const mockInfo: Partial<GraphQLResolveInfo> = {
        fieldNodes: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'clients' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ] as FieldNode[],
            } as SelectionSetNode,
          } as FieldNode,
        ],
      };

      // Act
      const result = await resolvers.Query.clients(
        null,
        {},
        mockContext,
        mockInfo as GraphQLResolveInfo
      );

      // Assert
      expect(mockPrismaClient.client.findMany).toHaveBeenCalledWith({
        include: undefined,
      });
      expect(result).toEqual(mockClients);
    });

    test('trainers - 動的includeでトレーナーを取得する', async () => {
      // Arrange
      const mockTrainers = [
        {
          id: '1',
          userId: '1',
          user: { id: '1', email: 'trainer@example.com', name: 'Trainer User' },
          profile: { id: '1', firstName: 'John', lastName: 'Doe' },
        },
      ];
      mockPrismaClient.trainer.findMany.mockResolvedValue(mockTrainers);

      const mockInfo: Partial<GraphQLResolveInfo> = {
        fieldNodes: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'trainers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'user' } },
                { kind: 'Field', name: { kind: 'Name', value: 'profile' } },
              ] as FieldNode[],
            } as SelectionSetNode,
          } as FieldNode,
        ],
      };

      // Act
      const result = await resolvers.Query.trainers(
        null,
        {},
        mockContext,
        mockInfo as GraphQLResolveInfo
      );

      // Assert
      expect(mockPrismaClient.trainer.findMany).toHaveBeenCalledWith({
        include: { user: true, profile: true },
      });
      expect(result).toEqual(mockTrainers);
    });
  });

  describe('Mutation', () => {
    test('createUser - 新しいユーザーを作成する', async () => {
      // Arrange
      const input = {
        email: 'newuser@example.com',
        name: 'New User',
        role: 'CLIENT',
      };
      const mockCreatedUser = {
        id: '1',
        ...input,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaClient.user.create.mockResolvedValue(mockCreatedUser);

      // Act
      const result = await resolvers.Mutation.createUser(
        null,
        { input },
        mockContext
      );

      // Assert
      expect(mockPrismaClient.user.create).toHaveBeenCalledWith({
        data: input,
        include: {
          credentials: true,
        },
      });
      expect(result).toEqual(mockCreatedUser);
    });

    test('createClient - 新しいクライアントを作成する', async () => {
      // Arrange
      const input = { userId: '1' };
      const mockCreatedClient = {
        id: '1',
        userId: '1',
        user: { id: '1', email: 'client@example.com', name: 'Client User' },
        profile: null,
        sessions: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaClient.client.create.mockResolvedValue(mockCreatedClient);

      // Act
      const result = await resolvers.Mutation.createClient(
        null,
        { input },
        mockContext
      );

      // Assert
      expect(mockPrismaClient.client.create).toHaveBeenCalledWith({
        data: input,
        include: {
          user: true,
          profile: true,
          sessions: true,
        },
      });
      expect(result).toEqual(mockCreatedClient);
    });

    test('createSession - 新しいセッションを作成する', async () => {
      // Arrange
      const input = {
        clientId: '1',
        trainerId: '1',
        scheduledAt: '2024-01-01T10:00:00Z',
        duration: 60,
        notes: 'Test session',
      };
      const mockCreatedSession = {
        id: '1',
        ...input,
        scheduledAt: new Date(input.scheduledAt),
        status: 'SCHEDULED',
        client: { id: '1', user: { name: 'Client User' } },
        trainer: { id: '1', user: { name: 'Trainer User' } },
        items: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaClient.pTSession.create.mockResolvedValue(mockCreatedSession);

      // Act
      const result = await resolvers.Mutation.createSession(
        null,
        { input },
        mockContext
      );

      // Assert
      expect(mockPrismaClient.pTSession.create).toHaveBeenCalledWith({
        data: {
          clientId: input.clientId,
          trainerId: input.trainerId,
          scheduledAt: new Date(input.scheduledAt),
          duration: input.duration,
          status: 'SCHEDULED',
          notes: input.notes,
        },
        include: {
          client: {
            include: {
              user: true,
            },
          },
          trainer: {
            include: {
              user: true,
            },
          },
          items: true,
        },
      });
      expect(result).toEqual(mockCreatedSession);
    });
  });

  describe('リレーションリゾルバ', () => {
    test('Client.user - 親オブジェクトからuserを返す', () => {
      // Arrange
      const parent = {
        id: '1',
        userId: '1',
        user: { id: '1', email: 'client@example.com', name: 'Client User' },
      };

      // Act
      const result = resolvers.Client.user(parent);

      // Assert
      expect(result).toEqual(parent.user);
    });

    test('Client.profile - 親オブジェクトからprofileを返す', () => {
      // Arrange
      const parent = {
        id: '1',
        userId: '1',
        profile: { id: '1', firstName: 'John', lastName: 'Doe' },
      };

      // Act
      const result = resolvers.Client.profile(parent);

      // Assert
      expect(result).toEqual(parent.profile);
    });

    test('PTSession.client - 親オブジェクトからclientを返す', () => {
      // Arrange
      const parent = {
        id: '1',
        client: { id: '1', user: { name: 'Client User' } },
        trainer: { id: '1', user: { name: 'Trainer User' } },
      };

      // Act
      const result = resolvers.PTSession.client(parent);

      // Assert
      expect(result).toEqual(parent.client);
    });
  });
});

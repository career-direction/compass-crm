import { PrismaClient } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { getIncludeFields } from './utils';

export interface Context {
  prisma: PrismaClient;
}

export const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL!',
    
    users: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.user.findMany({
        include: {
          credentials: true,
        },
      });
    },

    clients: async (_parent: any, _args: any, context: Context, info: GraphQLResolveInfo) => {
      // 動的にincludeフィールドを決定してオーバーフェッチを防ぐ
      const relationMap = {
        user: true,
        profile: true,
        sessions: {
          include: {
            client: { include: { user: true } },
            trainer: { include: { user: true } },
            items: true,
          },
        },
      };
      
      const include = getIncludeFields(info, relationMap);
      
      return await context.prisma.client.findMany({
        include: Object.keys(include).length > 0 ? include : undefined,
      });
    },

    trainers: async (_parent: any, _args: any, context: Context, info: GraphQLResolveInfo) => {
      // 動的にincludeフィールドを決定してオーバーフェッチを防ぐ
      const relationMap = {
        user: true,
        profile: true,
        sessions: {
          include: {
            client: { include: { user: true } },
            trainer: { include: { user: true } },
            items: true,
          },
        },
      };
      
      const include = getIncludeFields(info, relationMap);
      
      return await context.prisma.trainer.findMany({
        include: Object.keys(include).length > 0 ? include : undefined,
      });
    },

    sessions: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.pTSession.findMany({
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
    },
  },

  Mutation: {
    createUser: async (_parent: any, args: { input: any }, context: Context) => {
      const { email, name, role } = args.input;
      return await context.prisma.user.create({
        data: {
          email,
          name,
          role,
        },
        include: {
          credentials: true,
        },
      });
    },

    createClient: async (_parent: any, args: { input: any }, context: Context) => {
      const { userId } = args.input;
      return await context.prisma.client.create({
        data: {
          userId,
        },
        include: {
          user: true,
          profile: true,
          sessions: true,
        },
      });
    },

    createTrainer: async (_parent: any, args: { input: any }, context: Context) => {
      const { userId } = args.input;
      return await context.prisma.trainer.create({
        data: {
          userId,
        },
        include: {
          user: true,
          profile: true,
          sessions: true,
        },
      });
    },

    createSession: async (_parent: any, args: { input: any }, context: Context) => {
      const { clientId, trainerId, scheduledAt, duration, notes } = args.input;
      return await context.prisma.pTSession.create({
        data: {
          clientId,
          trainerId,
          scheduledAt: new Date(scheduledAt),
          duration,
          status: 'SCHEDULED',
          notes,
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
    },
  },

  // リレーションリゾルバ
  User: {
    // Userの関連データは既にincludeで取得済みなので、追加のリゾルバは不要
  },

  Client: {
    user: (parent: any) => parent.user,
    profile: (parent: any) => parent.profile,
    sessions: (parent: any) => parent.sessions,
  },

  Trainer: {
    user: (parent: any) => parent.user,
    profile: (parent: any) => parent.profile,
    sessions: (parent: any) => parent.sessions,
  },

  PTSession: {
    client: (parent: any) => parent.client,
    trainer: (parent: any) => parent.trainer,
    items: (parent: any) => parent.items,
  },
};

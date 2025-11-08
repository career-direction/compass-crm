import type { GraphQLResolveInfo } from 'graphql';
import type { Context } from '../types';

export const clientResolvers = {
  Query: {
    clients: async (_parent: any, args: any, context: Context, _info: GraphQLResolveInfo) => {
      // ページネーション強制（大量データ取得防止）
      const limit = Math.min(args.limit || 50, 100); // 最大100件
      const offset = args.offset || 0;

      // 動的にincludeフィールドを決定してオーバーフェッチを防ぐ
      const relationMap = {
        user: true,
        profile: true,
        ptSessions: {
          include: {
            client: { include: { user: true } },
            trainer: { include: { user: true } },
            items: true,
          },
        },
      };

      // クエリタイムアウト設定
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Query timeout: Operation took too long')), 30000);
      });

      const queryPromise = context.prisma.client.findMany({
        take: limit,
        skip: offset,
        include: relationMap,
      });

      return Promise.race([queryPromise, timeoutPromise]);
    },
  },

  Mutation: {
    createClient: async (_parent: any, args: { input: any }, context: Context) => {
      const { userId } = args.input;
      return await context.prisma.client.create({
        data: {
          user_id: userId,
        },
        include: {
          user: true,
          profile: true,
          ptSessions: true,
        },
      });
    },
  },

  Client: {
    // BigIntをIntに変換
    id: (parent: any) => Number(parent.id),
    user: (parent: any) => parent.user,
    profile: (parent: any) => parent.profile,
    sessions: (parent: any) => parent.ptSessions,
  },

  ClientProfile: {
    // BigIntをIntに変換
    id: (parent: any) => Number(parent.id),
    // Prismaのフィールド名をGraphQLのフィールド名にマッピング
    allowSnsPost: (parent: any) => parent.allow_sns_post,
    exerciseHistory: (parent: any) => parent.exercise_history,
  },
};

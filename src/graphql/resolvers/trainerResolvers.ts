import type { GraphQLResolveInfo } from 'graphql';
import type { Context } from '../types';

export const trainerResolvers = {
  Query: {
    trainers: async (_parent: any, _args: any, context: Context, info: GraphQLResolveInfo) => {
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
      
      return await context.prisma.trainer.findMany({
        include: relationMap,
      });
    },
  },

  Mutation: {
    createTrainer: async (_parent: any, args: { input: any }, context: Context) => {
      const { userId } = args.input;
      return await context.prisma.trainer.create({
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

  Trainer: {
    // BigIntをIntに変換
    id: (parent: any) => Number(parent.id),
    user: (parent: any) => parent.user,
    profile: (parent: any) => parent.profile,
    sessions: (parent: any) => parent.ptSessions,
  },

  TrainerProfile: {
    // BigIntをIntに変換
    id: (parent: any) => Number(parent.id),
    // Prismaのフィールド名をGraphQLのフィールド名にマッピング
    motivationStatement: (parent: any) => parent.motivation_statement,
    signatureMuscle: (parent: any) => parent.signature_muscle,
  },
};

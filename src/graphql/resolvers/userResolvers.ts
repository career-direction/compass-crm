import type { Context } from '../types';

export const userResolvers = {
  Query: {
    hello: () => 'Hello from GraphQL!',
    
    users: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.user.findMany({
        include: {
          credentials: true,
        },
      });
    },
  },

  Mutation: {
    createUser: async (_parent: any, args: { input: any }, context: Context) => {
      const { 
        kind, 
        first_name, 
        last_name, 
        first_name_kana, 
        last_name_kana, 
        birth_date, 
        gender, 
        email, 
        password 
      } = args.input;
      
      // パスワードのハッシュ化（実際の実装では適切なハッシュ関数を使用）
      const password_digest = `hashed_${password}`;
      
      return await context.prisma.user.create({
        data: {
          kind,
          first_name,
          last_name,
          first_name_kana,
          last_name_kana,
          birth_date: new Date(birth_date),
          gender,
          credentials: {
            create: {
              email,
              password_digest,
            }
          }
        },
        include: {
          credentials: true,
        },
      });
    },
  },

  User: {
    // BigIntをIntに変換
    id: (parent: any) => Number(parent.id),
    // Prismaのフィールド名をGraphQLのフィールド名にマッピング
    created_at: (parent: any) => parent.created_at.toISOString(),
    updated_at: (parent: any) => parent.updated_at.toISOString(),
    birth_date: (parent: any) => parent.birth_date.toISOString().split('T')[0], // YYYY-MM-DD形式
  },

  UserCredentials: {
    // BigIntをIntに変換
    id: (parent: any) => Number(parent.id),
    // Prismaのフィールド名をGraphQLのフィールド名にマッピング
    created_at: (parent: any) => parent.created_at.toISOString(),
    updated_at: (parent: any) => parent.updated_at.toISOString(),
  },
};

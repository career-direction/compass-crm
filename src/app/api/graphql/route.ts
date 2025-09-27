import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { PrismaClient } from '@prisma/client';
import { typeDefs } from '../../../graphql/schema';
import { resolvers } from '../../../graphql/resolvers';

// サーバーレス環境でのPrismaクライアント最適化
// グローバルインスタンスを使用してコールドスタート時間を短縮
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient({
  // コネクションプール設定でパフォーマンス向上
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // ログレベルを本番環境では最小限に
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const { handleRequest } = createYoga({
  schema,
  context: () => ({
    prisma,
  }),
  // GraphQL Playgroundを有効化
  graphiql: {
    title: 'Compass CRM GraphQL API',
  },
  // CORS設定
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true,
  },
  // ログ設定
  logging: {
    debug: (...args) => args.forEach(arg => console.debug(arg)),
    info: (...args) => args.forEach(arg => console.info(arg)),
    warn: (...args) => args.forEach(arg => console.warn(arg)),
    error: (...args) => args.forEach(arg => console.error(arg)),
  },
});

export {
  handleRequest as GET,
  handleRequest as POST,
};

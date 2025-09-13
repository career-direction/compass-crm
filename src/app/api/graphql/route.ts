import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { PrismaClient } from '@prisma/client';
import { typeDefs } from '../../../graphql/schema';
import { resolvers } from '../../../graphql/resolvers';

const prisma = new PrismaClient();

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

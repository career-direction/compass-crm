import { createYoga } from 'graphql-yoga'
import { readFileSync } from 'fs'
import { join } from 'path'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from '@/graphql/resolvers'
import { prisma } from '@/lib/prisma'

// スキーマファイルを読み込む
const typeDefs = readFileSync(
  join(process.cwd(), 'src/graphql/schema/schema.graphql'),
  'utf-8'
)

// GraphQLスキーマ作成
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// GraphQL Yogaインスタンス作成
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
})

// Next.js Route Handlerとしてエクスポート
export { handleRequest as GET, handleRequest as POST }

import { PrismaClient } from '../generated/prisma';

// サーバーレス環境でのPrismaクライアント最適化
// グローバルインスタンスを使用してコールドスタート時間を短縮
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient({
  // コネクションプール設定でパフォーマンス向上
  ...(process.env.DATABASE_URL && {
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  }),
  // ログレベルを本番環境では最小限に
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export { prisma };

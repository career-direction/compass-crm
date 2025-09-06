import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

// 環境変数を読み込み
dotenv.config({ path: '.env.local' });

const config: CodegenConfig = {
  // SupabaseのGraphQLエンドポイントとヘッダーを指定
  schema: {
    [`${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`]: {
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      },
    },
  },
  // APIから取得したスキーマを元に、型定義を生成
  documents: ['src/**/*.tsx', 'src/**/*.ts'], // クエリが書かれているファイルを指定
  generates: {
    './src/gql/': { // 生成先のディレクトリ
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;

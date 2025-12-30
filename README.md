# compass-crs

## 開発手順
1. root で `supabase start` を実行
   - Docker Desktop が立ち上がっている必要あり。
   - 開発終了したら `supabase stop` を忘れずに。
2. `npm run dev` を実行

## ディレクトリ構成

```plaintext
src/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # 認証関連API
│   │   │   ├── login/
│   │   │   ├── logout/
│   │   │   ├── me/
│   │   │   └── register/
│   │   └── graphql/              # GraphQL エンドポイント
│   ├── (dashboard)/              # ダッシュボード（認証必須ページ）
│   │   ├── clients/              # クライアント管理
│   │   ├── sessions/             # セッション管理
│   │   │   └── [id]/             # セッション詳細
│   │   ├── settings/             # 設定
│   │   ├── trainers/             # トレーナー管理
│   │   └── trainingMaterial/     # 研修教材管理
│   ├── login/                    # ログインページ
│   └── register/                 # ユーザー登録ページ
│
├── features/                     # 機能別モジュール
│   ├── auth/                     # 認証機能
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── types/
│   │   └── utils/
│   ├── client/                   # クライアント機能
│   │   └── views/
│   ├── session/                  # セッション機能
│   │   ├── components/
│   │   └── views/
│   ├── settings/                 # 設定機能
│   │   └── views/
│   ├── trainer/                  # トレーナー機能
│   │   ├── components/
│   │   ├── types/
│   │   └── views/
│   └── trainingMaterial/         # 研修教材機能
│       ├── components/
│       ├── types/
│       └── views/
│
├── components/                   # 共通コンポーネント
│   ├── layout/                   # レイアウトコンポーネント
│   ├── providers/                # Context Providers
│   └── ui/                       # UIコンポーネント
│
├── lib/                          # ライブラリ設定・ユーティリティ
│   ├── drizzle/                  # Drizzle ORM 設定
│   └── urql/                     # urql（GraphQLクライアント）設定
│
├── db/                           # データベース関連
│   └── migrations/               # マイグレーションファイル
│
└── graphql/                      # GraphQL関連
    ├── generated/                # 自動生成コード
    │   ├── client/               # クライアント用（gqlタグ等）
    │   │   └── gql/
    │   └── server/               # サーバー用（リゾルバ型等）
    ├── resolvers/                # GraphQL リゾルバ
    └── schema/                   # GraphQL スキーマ定義
```

### `src/features`


### `src/components`

`src/features/*` のディレクトリを超えて利用される UI components を配置するディレクトリ。
例えば、アプリケーション全体で共通で利用されるボタンコンポーネントなどがそれに該当します。
`src/features/*` のディレクトリを超えて利用されない場合、一つの feature 内で収まる場合は、`src/components` には、配置されない。

### `src/db`

### `src/lib`

### `src/graphql`
graphql 関連のファイルがここに配置される。

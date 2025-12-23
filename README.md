# Compass CRM

Compass CRMは、キャリア支援向けの顧客管理システムです。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **UI**: React 19, Mantine, Tailwind CSS v4
- **API**: GraphQL (graphql-yoga)
- **データベース**: PostgreSQL, Drizzle ORM
- **認証**: Supabase Auth
- **テスト**: Vitest
- **コード品質**: Biome (Formatter/Linter)

## 開発環境のセットアップ

### 必要な環境

- Node.js 22.15.1
- Supabase CLI 2.67.1

### mise を使用する場合（推奨）

[mise](https://mise.jdx.dev/) は、プロジェクトごとに開発環境を管理するツールです。

1. miseのインストール

```bash
# macOS (Homebrew)
brew install mise

# または公式インストールスクリプト
curl https://mise.run | sh
```

2. miseの有効化（初回のみ）

```bash
# bash
echo 'eval "$(mise activate bash)"' >> ~/.bashrc

# zsh
echo 'eval "$(mise activate zsh)"' >> ~/.zshrc

# 設定を反映
source ~/.bashrc  # または source ~/.zshrc
```

3. 依存関係のインストール

```bash
# miseが自動的に.mise.tomlを読み込み、Node.js 22.15.1とSupabase CLIをインストール
mise install

# npmパッケージのインストール
npm install
```

### 他のツールを使用する場合

#### nvm を使用

```bash
nvm install
nvm use
npm install
```

#### Volta を使用

Voltaは`package.json`の設定を自動的に読み込みます。

```bash
npm install
```

## 環境変数の設定

1. `.env`ファイルをプロジェクトルートに作成
2. 必要な環境変数を設定（詳細はチームに確認してください）

## 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアプリケーションが起動します。

## 主なコマンド

```bash
# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プロダクションサーバーの起動
npm run start

# コードフォーマット
npm run format

# リント
npm run lint

# テスト
npm run test

# GraphQL Code Generation
npm run codegen

# データベースマイグレーション
npm run drizzle:migrate

# Supabaseローカル環境の起動
npm run supabase:start

# Supabaseローカル環境の停止
npm run supabase:stop

# Supabaseステータス確認
npm run supabase:status

# Supabaseデータベースのリセット
npm run supabase:reset
```

## プロジェクト構成

```
src/
├── app/          # Next.js App Router
├── components/   # 共通UIコンポーネント
├── features/     # 機能別のコンポーネント・ロジック
├── graphql/      # GraphQL スキーマ・リゾルバー
├── generated/    # 自動生成されたGraphQL型定義
├── db/           # データベーススキーマ・マイグレーション
└── lib/          # ユーティリティ関数
```
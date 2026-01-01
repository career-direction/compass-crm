# Database-First GraphQL Schema生成

このプロジェクトは **Database-Firstアプローチ** を採用しています。

## アーキテクチャ

```
Drizzle DBスキーマ (src/db/schema.ts)  ← Single Source of Truth
       ↓
  npm run schema:generate-from-db
       ↓
GraphQL Schema (schema.graphql)
       ↓
  npm run codegen
       ↓
TypeScript型生成
```

## 使い方

### 1. DBスキーマを変更

```typescript
// src/db/schema.ts
export const users = pgTable("users", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  firstName: varchar("first_name").notNull(),
  // 新しいカラムを追加
  email: varchar("email").notNull(),
});
```

### 2. GraphQLスキーマを自動生成

```bash
npm run schema:generate-from-db
```

これにより、`src/lib/graphql/schema/schema.graphql` が自動生成されます。

### 3. カスタムフィールドを追加（必要に応じて）

```graphql
# src/lib/graphql/schema/custom-fields.graphql
extend type User {
  fullName: String!  # 計算フィールド
}

extend type Query {
  userByEmail(email: String!): User  # カスタムQuery
}
```

再度 `npm run schema:generate-from-db` を実行すると、カスタムフィールドがマージされます。

### 4. 型を生成

```bash
npm run codegen
```

## カスタムフィールドファイル

`src/lib/graphql/schema/custom-fields.graphql` で以下を定義できます：

- **逆方向リレーション**: `Client.sessions: [PTSession!]!`
- **計算フィールド**: `User.fullName: String!`
- **カスタムQuery**: `userByEmail(email: String!): User`
- **カスタムMutation**: `updateUserStatus(...)`

## 注意事項

1. **`schema.graphql`は自動生成されるため、手動編集は推奨されません**
2. **カスタマイズは`custom-fields.graphql`で行う**
3. **DBスキーマを変更したら、必ず`npm run schema:generate-from-db`を実行**

## トラブルシューティング

### Query名が重複するエラー

カスタムフィールドファイルで定義したQuery名は、自動生成をスキップします。
既存のQueryを上書きしたい場合は、カスタムフィールドファイルで定義してください。

### 型名が正しくない

`scripts/generate-graphql-schema-from-db.ts`の`toGraphQLTypeName`関数を修正してください。


# GraphQL設定ガイド

## 概要

このプロジェクトでは、GraphQLサーバーとクライアントが以下のように設定されています：

- **サーバー**: Apollo Server Micro (Node.js 12対応)
- **クライアント**: urql (軽量GraphQLクライアント)
- **データベース**: Prisma経由でSupabase PostgreSQL

## ファイル構成

```
src/
├── graphql/
│   ├── schema.ts          # GraphQLスキーマ定義
│   ├── resolvers.ts       # GraphQLリゾルバ
│   └── queries.ts         # クエリ・ミューテーション定義
├── lib/
│   └── urql-client.ts     # urqlクライアント設定
├── components/
│   ├── providers/
│   │   └── UrqlProvider.tsx # urqlプロバイダー
│   └── examples/
│       └── GraphQLExample.tsx # 使用例コンポーネント
└── app/
    └── api/
        └── graphql/
            └── route.ts   # GraphQLエンドポイント
```

## 使用方法

### 1. GraphQLサーバーへのアクセス

開発サーバー起動後、以下のURLでGraphQLエンドポイントにアクセスできます：

- **GraphQL Endpoint**: `http://localhost:3000/api/graphql`
- **GraphQL Playground**: `http://localhost:3000/api/graphql` (ブラウザでアクセス)

### 2. クライアントでのクエリ実行

```tsx
import { useQuery } from 'urql';
import { GET_USERS } from '../graphql/queries';

function UserList() {
  const [result] = useQuery({ query: GET_USERS });
  const { data, fetching, error } = result;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.users?.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

### 3. ミューテーションの実行

```tsx
import { useMutation } from 'urql';
import { CREATE_USER } from '../graphql/queries';

function CreateUserForm() {
  const [result, createUser] = useMutation(CREATE_USER);

  const handleSubmit = async (formData) => {
    const result = await createUser({
      input: {
        email: formData.email,
        name: formData.name,
        role: 'CLIENT',
      },
    });

    if (result.data) {
      console.log('User created:', result.data.createUser);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* フォーム要素 */}
    </form>
  );
}
```

## 利用可能なクエリとミューテーション

### クエリ
- `users`: 全ユーザー取得
- `clients`: 全クライアント取得
- `trainers`: 全トレーナー取得
- `sessions`: 全セッション取得

### ミューテーション
- `createUser`: ユーザー作成
- `createClient`: クライアント作成
- `createTrainer`: トレーナー作成
- `createSession`: セッション作成

## 注意事項

1. **Node.js バージョン**: 現在Node.js 12を使用しているため、Apollo Server Microを採用しています
2. **Prismaエラー**: Node.js 12の制約により、Prismaの一部機能で警告が出る場合があります
3. **型安全性**: GraphQLスキーマとPrismaスキーマの整合性を保つよう注意してください

## 今後の拡張

1. **GraphQL Code Generator**: 型安全なクエリ生成
2. **DataLoader**: N+1問題の更なる最適化
3. **Subscriptions**: リアルタイム機能の追加
4. **認証・認可**: GraphQLレベルでの権限制御

## トラブルシューティング

### GraphQLサーバーが起動しない場合
1. Prismaクライアントが正しく生成されているか確認
2. データベース接続設定を確認
3. Node.jsバージョンの互換性を確認

### クエリが失敗する場合
1. GraphQLスキーマとPrismaスキーマの整合性を確認
2. ブラウザの開発者ツールでネットワークエラーを確認
3. GraphQL Playgroundでクエリをテスト

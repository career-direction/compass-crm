# srcディレクトリ
アプリ内の文言は全て日本語にして。

## appディレクトリ

`Next.js`の`App Router`を実現するためのディレクトリです。
`app/*/`配下には、`page.tsx`または`layout.tsx`のみが配置されます。これらのファイルはすべてすべてサーバーコンポーネントとして実装されます。
また、`page.tsx`は、テスト容易性のために、Container / Presentation パターンに従って実装されます。

## featuresディレクトリ
<!-- TODO: featuresディレクトリのディレクトリ構成をかく -->

## TypeScript

### 型

- 型定義は`interface`ではなく`type`を使用して定義して。
- optionalを持つ`type`はできるだけ使用せずに、代数的データ型が適切な場合は代数的データ型を利用して型定義して。
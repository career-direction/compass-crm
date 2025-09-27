import { GraphQLResolveInfo } from 'graphql';

/**
 * GraphQLクエリから必要なフィールドを動的に抽出するユーティリティ
 * オーバーフェッチを防ぎ、パフォーマンスを向上させる
 */
export function getSelectFields(info: GraphQLResolveInfo, path?: string): Record<string, boolean> {
  const selections = path 
    ? getNestedSelections(info, path)
    : info.fieldNodes[0]?.selectionSet?.selections;

  if (!selections) return {};

  const fields: Record<string, boolean> = {};
  
  for (const selection of selections) {
    if (selection.kind === 'Field' && selection.name.value) {
      fields[selection.name.value] = true;
    }
  }
  
  return fields;
}

/**
 * ネストしたフィールドの選択を取得
 */
function getNestedSelections(info: GraphQLResolveInfo, path: string) {
  const pathParts = path.split('.');
  let current = info.fieldNodes[0]?.selectionSet?.selections;
  
  for (const part of pathParts) {
    const field = current?.find(
      (selection) => selection.kind === 'Field' && selection.name.value === part
    );
    if (field && field.kind === 'Field') {
      current = field.selectionSet?.selections;
    } else {
      return undefined;
    }
  }
  
  return current;
}

/**
 * Prismaのinclude句を動的に生成
 * リレーションフィールドが要求された場合のみincludeする
 */
export function getIncludeFields(info: GraphQLResolveInfo, relationMap: Record<string, any>): Record<string, any> {
  const selections = info.fieldNodes[0]?.selectionSet?.selections;
  if (!selections) return {};

  const include: Record<string, any> = {};
  
  for (const selection of selections) {
    if (selection.kind === 'Field' && selection.name.value) {
      const fieldName = selection.name.value;
      if (relationMap[fieldName]) {
        include[fieldName] = relationMap[fieldName];
      }
    }
  }
  
  return include;
}

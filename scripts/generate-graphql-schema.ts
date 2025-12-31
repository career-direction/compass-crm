#!/usr/bin/env npx tsx
/**
 * Drizzle ORMスキーマからGraphQLスキーマを自動生成するスクリプト
 *
 * 使用方法:
 *   npx tsx scripts/generate-graphql-schema.ts
 *
 * このスクリプトは、src/db/schema.ts を読み取り、
 * src/lib/graphql/schema/generated.graphql を生成します。
 *
 * 注意:
 * - 生成されたスキーマは基本的な型のみを含みます
 * - Query/Mutation/カスタムフィールドは手動で追加する必要があります
 * - 本ファイルは参考実装です。必要に応じてカスタマイズしてください
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

// Drizzleの型をGraphQL型にマッピング
const typeMapping: Record<string, string> = {
	bigserial: "Int!",
	bigint: "Int!",
	integer: "Int!",
	varchar: "String!",
	text: "String!",
	boolean: "Boolean!",
	date: "String!",
	timestamp: "String!",
	uuid: "String!",
};

// Nullableバージョンのマッピング
const nullableTypeMapping: Record<string, string> = {
	bigserial: "Int",
	bigint: "Int",
	integer: "Int",
	varchar: "String",
	text: "String",
	boolean: "Boolean",
	date: "String",
	timestamp: "String",
	uuid: "String",
};

interface ColumnInfo {
	name: string;
	type: string;
	isNotNull: boolean;
	isArray: boolean;
	isPrimary: boolean;
}

interface TableInfo {
	name: string;
	graphqlName: string;
	columns: ColumnInfo[];
}

/**
 * テーブル名をGraphQL型名に変換
 * users -> User, clientProfiles -> ClientProfile
 */
function toGraphQLTypeName(tableName: string): string {
	// 複数形を単数形に変換
	let singular = tableName;
	if (tableName.endsWith("ies")) {
		singular = `${tableName.slice(0, -3)}y`;
	} else if (tableName.endsWith("ses")) {
		singular = tableName.slice(0, -2);
	} else if (tableName.endsWith("s")) {
		singular = tableName.slice(0, -1);
	}

	// キャメルケースをパスカルケースに変換
	return singular.charAt(0).toUpperCase() + singular.slice(1);
}

/**
 * snake_caseをcamelCaseに変換
 */
function toCamelCase(str: string): string {
	return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * スキーマファイルをパースしてテーブル情報を抽出
 */
function parseSchemaFile(schemaContent: string): TableInfo[] {
	const tables: TableInfo[] = [];

	// pgTable定義を抽出（複数行対応）
	const tableRegex =
		/export const (\w+) = pgTable\("(\w+)",\s*\{([\s\S]*?)\}\);/g;

	for (const match of schemaContent.matchAll(tableRegex)) {
		const [, variableName, , columnsBlock] = match;
		const columns: ColumnInfo[] = [];

		// カラム定義を抽出（複数行にまたがる場合も対応）
		// 各カラムは "colName: type(" で始まる
		const columnStarts: number[] = [];
		const colStartRegex = /^\s*(\w+):\s*\w+\(/gm;

		for (const colStartMatch of columnsBlock.matchAll(colStartRegex)) {
			columnStarts.push(colStartMatch.index ?? 0);
		}

		for (let i = 0; i < columnStarts.length; i++) {
			const start = columnStarts[i];
			const end = columnStarts[i + 1] ?? columnsBlock.length;
			const colDef = columnsBlock.slice(start, end);

			// カラム名と型を抽出
			const colMatch = colDef.match(/^\s*(\w+):\s*(\w+)\(/);

			if (colMatch) {
				const [, colName, colType] = colMatch;

				// 修飾子を確認（複数行にまたがっても対応）
				const isNotNull =
					colDef.includes(".notNull()") || colDef.includes(".primaryKey()");
				const isArray = colDef.includes(".array()");
				const isPrimary = colDef.includes(".primaryKey()");

				columns.push({
					name: colName, // すでにcamelCaseで定義されている
					type: colType,
					isNotNull,
					isArray,
					isPrimary,
				});
			}
		}

		tables.push({
			name: variableName,
			graphqlName: toGraphQLTypeName(variableName),
			columns,
		});
	}

	return tables;
}

/**
 * カラム情報からGraphQL型を生成
 */
function getGraphQLType(column: ColumnInfo): string {
	const baseType = column.isNotNull
		? typeMapping[column.type] || "String!"
		: nullableTypeMapping[column.type] || "String";

	if (column.isArray) {
		// 配列の場合
		const innerType = baseType.replace("!", "");
		return column.isNotNull ? `[${innerType}!]!` : `[${innerType}!]`;
	}

	return baseType;
}

/**
 * テーブル情報からGraphQL型定義を生成
 */
function generateGraphQLType(table: TableInfo): string {
	const fields = table.columns
		.map((col) => {
			const graphqlType = getGraphQLType(col);
			return `\t${col.name}: ${graphqlType}`;
		})
		.join("\n");

	return `type ${table.graphqlName} {\n${fields}\n}`;
}

/**
 * メイン処理
 */
async function main() {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const projectRoot = path.resolve(__dirname, "..");
	const schemaPath = path.join(projectRoot, "src/db/schema.ts");
	const outputPath = path.join(
		projectRoot,
		"src/lib/graphql/schema/generated.graphql",
	);

	console.log("📖 Drizzleスキーマを読み込み中...");
	const schemaContent = fs.readFileSync(schemaPath, "utf-8");

	console.log("🔍 テーブル定義をパース中...");
	const tables = parseSchemaFile(schemaContent);

	console.log(`📋 ${tables.length}個のテーブルを検出しました`);
	for (const table of tables) {
		console.log(`   - ${table.name} -> ${table.graphqlName}`);
	}

	const header = `# ============================================
# 自動生成されたGraphQLスキーマ
# 生成元: src/db/schema.ts (Drizzle ORM)
#
# このファイルは scripts/generate-graphql-schema.ts によって生成されました
# 手動で編集しないでください
# ============================================

`;

	const types = tables.map(generateGraphQLType).join("\n\n");

	const output = header + types;

	console.log("📝 GraphQLスキーマを書き出し中...");
	fs.writeFileSync(outputPath, output);

	console.log(`✅ 完了: ${outputPath}`);
	console.log("");
	console.log("📌 次のステップ:");
	console.log("   1. 生成されたスキーマを確認してください");
	console.log(
		"   2. 必要に応じて schema.graphql にマージしてQuery/Mutationを追加してください",
	);
	console.log("   3. npm run codegen を実行して型を生成してください");
}

main().catch(console.error);


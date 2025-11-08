/**
 * ユーザー作成テスト用クエリとデータ
 * 実際のPrismaスキーマに対応したGraphQLクエリ
 */

// ユーザー作成ミューテーション（更新版）
export const CREATE_USER_MUTATION = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      key
      kind
      first_name
      last_name
      first_name_kana
      last_name_kana
      birth_date
      gender
      active_flag
      credentials {
        id
        email
        reset_at
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

// 全ユーザー取得クエリ（更新版）
export const GET_ALL_USERS_UPDATED = `
  query GetAllUsers {
    users {
      id
      key
      kind
      first_name
      last_name
      first_name_kana
      last_name_kana
      birth_date
      gender
      active_flag
      credentials {
        id
        email
        reset_at
      }
      created_at
      updated_at
    }
  }
`;

// テスト用ユーザーデータ
export const TEST_USER_DATA = {
	// 管理者ユーザー
	admin: {
		input: {
			kind: 0,
			first_name: "管理者",
			last_name: "太郎",
			first_name_kana: "カンリシャ",
			last_name_kana: "タロウ",
			birth_date: "1980-01-01",
			gender: 1,
			email: "admin@compass-test.com",
			password: "admin123",
		},
	},

	// トレーナーユーザー
	trainer: {
		input: {
			kind: 1,
			first_name: "トレーナー",
			last_name: "花子",
			first_name_kana: "トレーナー",
			last_name_kana: "ハナコ",
			birth_date: "1985-05-15",
			gender: 0,
			email: "trainer@compass-test.com",
			password: "trainer123",
		},
	},

	// クライアントユーザー
	client: {
		input: {
			kind: 2,
			first_name: "クライアント",
			last_name: "次郎",
			first_name_kana: "クライアント",
			last_name_kana: "ジロウ",
			birth_date: "1990-12-25",
			gender: 1,
			email: "client@compass-test.com",
			password: "client123",
		},
	},
};

// curlコマンド用のテストケース
export const CURL_TEST_COMMANDS = {
	// ユーザー一覧取得
	getAllUsers: `curl -X POST http://localhost:3000/api/graphql \\
  -H "Content-Type: application/json" \\
  -d '{"query":"${GET_ALL_USERS_UPDATED.replace(/\s+/g, " ").trim()}"}'`,

	// 管理者ユーザー作成
	createAdmin: `curl -X POST http://localhost:3000/api/graphql \\
  -H "Content-Type: application/json" \\
  -d '{"query":"${CREATE_USER_MUTATION.replace(/\s+/g, " ").trim()}","variables":${JSON.stringify(TEST_USER_DATA.admin)}}'`,

	// トレーナーユーザー作成
	createTrainer: `curl -X POST http://localhost:3000/api/graphql \\
  -H "Content-Type: application/json" \\
  -d '{"query":"${CREATE_USER_MUTATION.replace(/\s+/g, " ").trim()}","variables":${JSON.stringify(TEST_USER_DATA.trainer)}}'`,

	// クライアントユーザー作成
	createClient: `curl -X POST http://localhost:3000/api/graphql \\
  -H "Content-Type: application/json" \\
  -d '{"query":"${CREATE_USER_MUTATION.replace(/\s+/g, " ").trim()}","variables":${JSON.stringify(TEST_USER_DATA.client)}}'`,
};

// テスト実行順序
export const TEST_SEQUENCE = [
	{
		name: "1. 既存ユーザー確認",
		command: CURL_TEST_COMMANDS.getAllUsers,
		description: "現在のユーザー一覧を確認",
	},
	{
		name: "2. 管理者ユーザー作成",
		command: CURL_TEST_COMMANDS.createAdmin,
		description: "管理者権限のユーザーを作成",
	},
	{
		name: "3. トレーナーユーザー作成",
		command: CURL_TEST_COMMANDS.createTrainer,
		description: "トレーナー権限のユーザーを作成",
	},
	{
		name: "4. クライアントユーザー作成",
		command: CURL_TEST_COMMANDS.createClient,
		description: "クライアント権限のユーザーを作成",
	},
	{
		name: "5. 作成後ユーザー確認",
		command: CURL_TEST_COMMANDS.getAllUsers,
		description: "作成後のユーザー一覧を確認",
	},
];

/**
 * ユーザー種別の説明
 */
export const USER_KIND_DESCRIPTION = {
	0: "管理者 (Admin)",
	1: "トレーナー (Trainer)",
	2: "クライアント (Client)",
};

/**
 * 性別の説明
 */
export const GENDER_DESCRIPTION = {
	0: "女性 (Female)",
	1: "男性 (Male)",
	2: "その他 (Other)",
};

// 実行用ヘルパー関数のサンプル
export const executeTest = async (testCase: any) => {
	console.log(`\n🧪 ${testCase.name}`);
	console.log(`📝 ${testCase.description}`);
	console.log(`💻 ${testCase.command}`);
	console.log("---");
};

/**
 * GraphQLテスト用クエリ集
 * 開発・デバッグ時に使用するクエリとミューテーションのサンプル
 */

// 基本的なHelloクエリ
export const HELLO_QUERY = `
  query HelloQuery {
    hello
  }
`;

// 全ユーザー取得クエリ
export const GET_ALL_USERS = `
  query GetAllUsers {
    users {
      id
      email
      name
      role
      created_at
      updated_at
    }
  }
`;

// ユーザー作成ミューテーション
export const CREATE_USER_MUTATION = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      name
      role
      created_at
      updated_at
    }
  }
`;

// クライアント一覧取得（リレーション含む）
export const GET_CLIENTS_WITH_RELATIONS = `
  query GetClientsWithRelations {
    clients {
      id
      userId
      user {
        id
        email
        name
        role
      }
      profile {
        id
        firstName
        lastName
        phoneNumber
        dateOfBirth
        gender
      }
      sessions {
        id
        scheduledAt
        duration
        status
        notes
      }
      created_at
      updated_at
    }
  }
`;

// トレーナー一覧取得（リレーション含む）
export const GET_TRAINERS_WITH_RELATIONS = `
  query GetTrainersWithRelations {
    trainers {
      id
      userId
      user {
        id
        email
        name
        role
      }
      profile {
        id
        firstName
        lastName
        phoneNumber
        bio
        certifications
        specializations
        experience
      }
      sessions {
        id
        scheduledAt
        duration
        status
      }
      created_at
      updated_at
    }
  }
`;

// セッション一覧取得（完全なリレーション）
export const GET_SESSIONS_FULL = `
  query GetSessionsFull {
    sessions {
      id
      scheduledAt
      duration
      status
      notes
      client {
        id
        user {
          id
          name
          email
        }
        profile {
          firstName
          lastName
        }
      }
      trainer {
        id
        user {
          id
          name
          email
        }
        profile {
          firstName
          lastName
        }
      }
      items {
        id
        exerciseName
        sets
        reps
        weight
        duration
        notes
      }
      created_at
      updated_at
    }
  }
`;

// テスト用のサンプル変数（実際のPrismaスキーマに合わせて修正）
export const SAMPLE_VARIABLES = {
	// ユーザー作成用（実際のスキーマフィールドに合わせる）
	createUserAdmin: {
		input: {
			kind: 0, // 0: 管理者
			first_name: "管理者",
			last_name: "太郎",
			first_name_kana: "カンリシャ",
			last_name_kana: "タロウ",
			birth_date: "1980-01-01",
			gender: 1, // 1: 男性
			email: "admin@example.com",
			password: "password123",
		},
	},

	createUserTrainer: {
		input: {
			kind: 1, // 1: トレーナー
			first_name: "トレーナー",
			last_name: "花子",
			first_name_kana: "トレーナー",
			last_name_kana: "ハナコ",
			birth_date: "1985-05-15",
			gender: 0, // 0: 女性
			email: "trainer@example.com",
			password: "password123",
		},
	},

	createUserClient: {
		input: {
			kind: 2, // 2: クライアント
			first_name: "クライアント",
			last_name: "次郎",
			first_name_kana: "クライアント",
			last_name_kana: "ジロウ",
			birth_date: "1990-12-25",
			gender: 1, // 1: 男性
			email: "client@example.com",
			password: "password123",
		},
	},
};

// 実行用のテストケース
export const TEST_CASES = [
	{
		name: "Hello Query Test",
		query: HELLO_QUERY,
		variables: null,
		description: "基本的な接続テスト",
	},
	{
		name: "Get All Users Test",
		query: GET_ALL_USERS,
		variables: null,
		description: "全ユーザー取得テスト",
	},
	{
		name: "Create Admin User Test",
		query: CREATE_USER_MUTATION,
		variables: SAMPLE_VARIABLES.createUserAdmin,
		description: "管理者ユーザー作成テスト",
	},
	{
		name: "Create Trainer User Test",
		query: CREATE_USER_MUTATION,
		variables: SAMPLE_VARIABLES.createUserTrainer,
		description: "トレーナーユーザー作成テスト",
	},
	{
		name: "Create Client User Test",
		query: CREATE_USER_MUTATION,
		variables: SAMPLE_VARIABLES.createUserClient,
		description: "クライアントユーザー作成テスト",
	},
	{
		name: "Get Clients with Relations Test",
		query: GET_CLIENTS_WITH_RELATIONS,
		variables: null,
		description: "クライアント一覧（リレーション含む）取得テスト",
	},
];

/**
 * curlコマンドでテストする場合のサンプル
 */
export const CURL_EXAMPLES = {
	hello: `curl -X POST http://localhost:3000/api/graphql \\
  -H "Content-Type: application/json" \\
  -d '{"query":"${HELLO_QUERY.replace(/\s+/g, " ").trim()}"}'`,

	getAllUsers: `curl -X POST http://localhost:3000/api/graphql \\
  -H "Content-Type: application/json" \\
  -d '{"query":"${GET_ALL_USERS.replace(/\s+/g, " ").trim()}"}'`,

	createUser: `curl -X POST http://localhost:3000/api/graphql \\
  -H "Content-Type: application/json" \\
  -d '{"query":"${CREATE_USER_MUTATION.replace(/\s+/g, " ").trim()}","variables":${JSON.stringify(SAMPLE_VARIABLES.createUserAdmin)}}'`,
};

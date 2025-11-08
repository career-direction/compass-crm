import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

/**
 * ダミーデータ作成スクリプト
 * 開発・テスト用のサンプルデータを生成します
 */

// ダミーユーザーデータ
const DUMMY_USERS = [
  {
    kind: 0, // 管理者
    first_name: "管理者",
    last_name: "太郎",
    first_name_kana: "カンリシャ", 
    last_name_kana: "タロウ",
    birth_date: new Date("1980-01-01"),
    gender: 1, // 男性
    credentials: {
      email: "admin@compass-crm.com",
      password_digest: "hashed_password_123", // 実際は適切にハッシュ化
    }
  },
  {
    kind: 1, // トレーナー
    first_name: "トレーナー",
    last_name: "花子",
    first_name_kana: "トレーナー",
    last_name_kana: "ハナコ",
    birth_date: new Date("1985-05-15"),
    gender: 0, // 女性
    credentials: {
      email: "trainer1@compass-crm.com",
      password_digest: "hashed_password_456",
    }
  },
  {
    kind: 1, // トレーナー
    first_name: "指導",
    last_name: "次郎",
    first_name_kana: "シドウ",
    last_name_kana: "ジロウ",
    birth_date: new Date("1988-09-20"),
    gender: 1, // 男性
    credentials: {
      email: "trainer2@compass-crm.com",
      password_digest: "hashed_password_789",
    }
  },
  {
    kind: 2, // クライアント
    first_name: "顧客",
    last_name: "美咲",
    first_name_kana: "コキャク",
    last_name_kana: "ミサキ",
    birth_date: new Date("1992-03-10"),
    gender: 0, // 女性
    credentials: {
      email: "client1@example.com",
      password_digest: "hashed_password_abc",
    }
  },
  {
    kind: 2, // クライアント
    first_name: "利用者",
    last_name: "健太",
    first_name_kana: "リヨウシャ",
    last_name_kana: "ケンタ",
    birth_date: new Date("1990-07-25"),
    gender: 1, // 男性
    credentials: {
      email: "client2@example.com",
      password_digest: "hashed_password_def",
    }
  }
];

async function createDummyUsers() {
  console.log('🌱 ダミーユーザーデータを作成中...');
  
  for (const userData of DUMMY_USERS) {
    try {
      const user = await prisma.user.create({
        data: {
          kind: userData.kind,
          first_name: userData.first_name,
          last_name: userData.last_name,
          first_name_kana: userData.first_name_kana,
          last_name_kana: userData.last_name_kana,
          birth_date: userData.birth_date,
          gender: userData.gender,
          credentials: {
            create: {
              email: userData.credentials.email,
              password_digest: userData.credentials.password_digest,
            }
          }
        },
        include: {
          credentials: true
        }
      });
      
      console.log(`✅ ユーザー作成成功: ${user.first_name} ${user.last_name} (${userData.credentials.email})`);
    } catch (error) {
      console.error(`❌ ユーザー作成失敗: ${userData.credentials.email}`, error);
    }
  }
}

async function createDummyClients() {
  console.log('🏃‍♂️ ダミークライアントデータを作成中...');
  
  // クライアント種別のユーザーを取得
  const clientUsers = await prisma.user.findMany({
    where: { kind: 2 },
    include: { credentials: true }
  });
  
  for (const user of clientUsers) {
    try {
      const client = await prisma.client.create({
        data: {
          user_id: user.id,
          // 必要に応じて他のクライアント固有フィールドを追加
        }
      });
      
      console.log(`✅ クライアント作成成功: ${user.first_name} ${user.last_name}`);
    } catch (error) {
      console.error(`❌ クライアント作成失敗: ${user.first_name} ${user.last_name}`, error);
    }
  }
}

async function createDummyTrainers() {
  console.log('💪 ダミートレーナーデータを作成中...');
  
  // トレーナー種別のユーザーを取得
  const trainerUsers = await prisma.user.findMany({
    where: { kind: 1 },
    include: { credentials: true }
  });
  
  for (const user of trainerUsers) {
    try {
      const trainer = await prisma.trainer.create({
        data: {
          user_id: user.id,
          // 必要に応じて他のトレーナー固有フィールドを追加
        }
      });
      
      console.log(`✅ トレーナー作成成功: ${user.first_name} ${user.last_name}`);
    } catch (error) {
      console.error(`❌ トレーナー作成失敗: ${user.first_name} ${user.last_name}`, error);
    }
  }
}

async function clearExistingData() {
  console.log('🧹 既存データをクリア中...');
  
  try {
    // 依存関係の順序でデータを削除
    await prisma.client.deleteMany();
    await prisma.trainer.deleteMany();
    await prisma.userCredentials.deleteMany();
    await prisma.user.deleteMany();
    
    console.log('✅ 既存データのクリア完了');
  } catch (error) {
    console.error('❌ データクリア失敗:', error);
  }
}

async function main() {
  try {
    console.log('🚀 ダミーデータ作成スクリプト開始');
    
    // 既存データをクリア
    await clearExistingData();
    
    // ダミーデータを作成
    await createDummyUsers();
    await createDummyClients();
    await createDummyTrainers();
    
    // 作成結果を確認
    const userCount = await prisma.user.count();
    const clientCount = await prisma.client.count();
    const trainerCount = await prisma.trainer.count();
    
    console.log('\n📊 作成結果:');
    console.log(`   ユーザー: ${userCount}件`);
    console.log(`   クライアント: ${clientCount}件`);
    console.log(`   トレーナー: ${trainerCount}件`);
    
    console.log('\n🎉 ダミーデータ作成完了！');
    
  } catch (error) {
    console.error('💥 ダミーデータ作成中にエラーが発生:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// スクリプト実行
if (require.main === module) {
  main();
}

export { main as createDummyData };

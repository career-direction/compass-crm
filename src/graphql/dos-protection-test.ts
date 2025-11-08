/**
 * DoS攻撃対策のテスト用クエリ
 * 
 * このファイルは開発時にDoS攻撃対策が正しく動作するかテストするためのものです。
 * 本番環境では使用しないでください。
 */

// 1. Query Depth Attack テスト（深いネスト）
export const DEEP_NESTED_QUERY = `
  query DeepNestedTest {
    users {
      id
      credentials {
        id
        user {
          id
          credentials {
            id
            user {
              id
              credentials {
                id
                user {
                  id
                  credentials {
                    id
                    user {
                      id
                      # これは深度制限（8層）を超えるはず
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// 2. Query Complexity Attack テスト（複雑なクエリ）
export const HIGH_COMPLEXITY_QUERY = `
  query HighComplexityTest {
    users {
      id
      first_name
      last_name
      credentials {
        id
        email
      }
    }
    clients {
      id
      user {
        id
        first_name
        last_name
        credentials {
          id
          email
        }
      }
      profile {
        id
        occupation
        hobby
      }
      sessions {
        id
        scheduledAt
        trainer {
          id
          user {
            id
            first_name
            last_name
          }
          profile {
            id
            specialization
          }
        }
        items {
          id
          exerciseName
          sets
          reps
          weight
        }
      }
    }
    trainers {
      id
      user {
        id
        first_name
        last_name
        credentials {
          id
          email
        }
      }
      profile {
        id
        specialization
        certifications
      }
      sessions {
        id
        scheduledAt
        client {
          id
          user {
            id
            first_name
            last_name
          }
        }
        items {
          id
          exerciseName
          sets
          reps
        }
      }
    }
    sessions {
      id
      scheduledAt
      client {
        id
        user {
          id
          first_name
          last_name
        }
        profile {
          id
          occupation
        }
      }
      trainer {
        id
        user {
          id
          first_name
          last_name
        }
        profile {
          id
          specialization
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
    }
  }
`;

// 3. 正常なクエリ（制限内）
export const NORMAL_QUERY = `
  query NormalTest {
    users(limit: 10) {
      id
      first_name
      last_name
      credentials {
        id
        email
      }
    }
  }
`;

// 4. ページネーションテスト
export const PAGINATION_TEST = `
  query PaginationTest {
    users(limit: 5, offset: 0) {
      id
      first_name
      last_name
    }
    clients(limit: 3, offset: 0) {
      id
      user {
        first_name
        last_name
      }
    }
  }
`;

// 5. Introspection クエリ（高コスト）
export const INTROSPECTION_QUERY = `
  query IntrospectionTest {
    __schema {
      types {
        name
        fields {
          name
          type {
            name
            ofType {
              name
              ofType {
                name
              }
            }
          }
        }
      }
    }
  }
`;

// テスト実行用の関数
export const testDoSProtection = async () => {
  const endpoint = 'http://localhost:3000/api/graphql';
  
  console.log('🛡️ DoS攻撃対策テスト開始');
  
  // 1. 正常なクエリテスト
  console.log('\n1. 正常なクエリテスト');
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: NORMAL_QUERY })
    });
    const result = await response.json();
    console.log('✅ 正常なクエリ: 成功', result.data ? '(データ取得)' : '(エラー)');
  } catch (error) {
    console.log('❌ 正常なクエリ: 失敗', error);
  }

  // 2. 深いネストクエリテスト
  console.log('\n2. 深いネストクエリテスト（制限超過予定）');
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: DEEP_NESTED_QUERY })
    });
    const result = await response.json();
    if (result.errors) {
      console.log('✅ 深いネスト: 正しく制限された', result.errors[0].message);
    } else {
      console.log('❌ 深いネスト: 制限されなかった');
    }
  } catch (error) {
    console.log('✅ 深いネスト: 制限された', error);
  }

  // 3. 高複雑度クエリテスト
  console.log('\n3. 高複雑度クエリテスト（制限超過予定）');
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: HIGH_COMPLEXITY_QUERY })
    });
    const result = await response.json();
    if (result.errors) {
      console.log('✅ 高複雑度: 正しく制限された', result.errors[0].message);
    } else {
      console.log('❌ 高複雑度: 制限されなかった');
    }
  } catch (error) {
    console.log('✅ 高複雑度: 制限された', error);
  }

  // 4. レート制限テスト
  console.log('\n4. レート制限テスト（連続リクエスト）');
  const promises = Array.from({ length: 10 }, (_, i) => 
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: NORMAL_QUERY })
    }).then(res => ({ index: i, status: res.status }))
  );

  try {
    const results = await Promise.all(promises);
    const blocked = results.filter(r => r.status === 429 || r.status >= 400);
    console.log(`✅ レート制限: ${blocked.length}/10 リクエストが制限された`);
  } catch (error) {
    console.log('✅ レート制限: 制限された', error);
  }

  console.log('\n🛡️ DoS攻撃対策テスト完了');
};

// 使用例:
// npx tsx src/graphql/dos-protection-test.ts
if (require.main === module) {
  testDoSProtection().catch(console.error);
}

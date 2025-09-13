'use client';

import { useQuery, useMutation } from 'urql';
import { Button, Card, Text, Stack, Group, LoadingOverlay } from '@mantine/core';
import { GET_USERS, CREATE_USER } from '../../graphql/queries';

export function GraphQLExample() {
  // クエリの使用例
  const [usersResult, refetchUsers] = useQuery({
    query: GET_USERS,
  });

  // ミューテーションの使用例
  const [createUserResult, createUser] = useMutation(CREATE_USER);

  const { data: users, fetching: usersLoading, error: usersError } = usersResult;

  const handleCreateUser = async () => {
    const result = await createUser({
      input: {
        email: `test${Date.now()}@example.com`,
        name: `テストユーザー${Date.now()}`,
        role: 'CLIENT',
      },
    });

    if (result.data) {
      // ユーザー作成後にリストを再取得
      refetchUsers();
    }
  };

  if (usersError) {
    return (
      <Card>
        <Text color="red">エラーが発生しました: {usersError.message}</Text>
      </Card>
    );
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack>
        <Group justify="space-between">
          <Text size="lg" fw={500}>
            GraphQL使用例 - ユーザー一覧
          </Text>
          <Button
            onClick={handleCreateUser}
            loading={createUserResult.fetching}
          >
            テストユーザー作成
          </Button>
        </Group>

        <div style={{ position: 'relative', minHeight: 200 }}>
          <LoadingOverlay visible={usersLoading} />

          {users?.users && users.users.length > 0 ? (
            <Stack gap="xs">
              {users.users.map((user: any) => (
                <Card key={user.id} padding="sm" withBorder>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500}>{user.name || 'No Name'}</Text>
                      <Text size="sm" c="dimmed">{user.email}</Text>
                    </div>
                    <Text size="sm" c="blue">{user.role}</Text>
                  </Group>
                </Card>
              ))}
            </Stack>
          ) : (
            !usersLoading && (
              <Text c="dimmed" ta="center">
                ユーザーが見つかりません
              </Text>
            )
          )}
        </div>
      </Stack>
    </Card>
  );
}

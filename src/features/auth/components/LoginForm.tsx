'use client';

import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { validateEmail } from '../utils/validation';

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginFormData>({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: validateEmail,
      password: (value: string) =>
        value.length < 1 ? 'パスワードを入力してください' : null,
    },
  });

  const handleSubmit = async (values: LoginFormData) => {
    setLoading(true);
    try {
      console.log('Login data:', values);
      // TODO: Implement actual login logic
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title ta="center" mb={30}>
        ログイン
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="メールアドレス"
            placeholder="メールアドレスを入力してください"
            required
            {...form.getInputProps('email')}
          />

          <PasswordInput
            label="パスワード"
            placeholder="パスワードを入力してください"
            required
            {...form.getInputProps('password')}
          />

          <Button type="submit" fullWidth mt="xl" loading={loading}>
            ログイン
          </Button>
        </Stack>
      </form>

      <Text ta="center" mt="md">
        アカウントをお持ちでない方は{' '}
        <Anchor href="/register" size="sm">
          新規登録
        </Anchor>
      </Text>
    </>
  );
}

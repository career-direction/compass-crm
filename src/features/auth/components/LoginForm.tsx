"use client";

import {
	Anchor,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CPButton } from "@/components/ui/CPButton";
import { useAuth } from "../contexts/AuthContext";
import { validateEmail } from "../utils/validation";

type LoginFormData = {
	email: string;
	password: string;
};

export function LoginForm() {
	const [loading, setLoading] = useState(false);
	const { login } = useAuth();
	const router = useRouter();

	const form = useForm<LoginFormData>({
		initialValues: {
			email: "",
			password: "",
		},

		validate: {
			email: validateEmail,
			password: (value: string) =>
				value.length < 1 ? "パスワードを入力してください" : null,
		},
	});

	const handleSubmit = async (values: LoginFormData) => {
		setLoading(true);
		try {
			const result = await login(values.email, values.password);

			if (result.success) {
				notifications.show({
					title: "ログイン成功",
					message: `${result.user.lastName} ${result.user.firstName}さん、ようこそ！`,
					color: "green",
				});
				router.push("/sessions");
			} else {
				notifications.show({
					title: "ログイン失敗",
					message: result.error,
					color: "red",
				});
			}
		} catch (error) {
			console.error("Login error:", error);
			notifications.show({
				title: "エラー",
				message: "ログイン処理中にエラーが発生しました",
				color: "red",
			});
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
						{...form.getInputProps("email")}
					/>

					<PasswordInput
						label="パスワード"
						placeholder="パスワードを入力してください"
						required
						{...form.getInputProps("password")}
					/>

					<CPButton type="submit" fullWidth mt="xl" loading={loading}>
						ログイン
					</CPButton>
				</Stack>
			</form>

			<Text ta="center" mt="md">
				アカウントをお持ちでない方は{" "}
				<Anchor href="/register" size="sm">
					新規登録
				</Anchor>
			</Text>
		</>
	);
}

"use client";

import {
	Button,
	Card,
	Container,
	Group,
	Stack,
	Switch,
	Text,
	TextInput,
	Title,
} from "@mantine/core";

export const Settings = () => {
	return (
		<Container>
			<Stack gap="xl">
				<div>
					<Title order={1} mb="sm">
						設定
					</Title>
					<Text c="dimmed">アプリケーションの設定を管理</Text>
				</div>

				<Card shadow="sm" padding="lg" radius="md" withBorder>
					<Title order={3} mb="md">
						プロフィール設定
					</Title>
					<Stack gap="md">
						<TextInput label="名前" placeholder="山田次郎" />
						<TextInput
							label="メールアドレス"
							placeholder="yamada@example.com"
						/>
						<TextInput label="電話番号" placeholder="090-1234-5678" />
						<Button>保存</Button>
					</Stack>
				</Card>

				<Card shadow="sm" padding="lg" radius="md" withBorder>
					<Title order={3} mb="md">
						通知設定
					</Title>
					<Stack gap="md">
						<Group justify="space-between">
							<div>
								<Text fw={500}>セッション開始の通知</Text>
								<Text size="sm" c="dimmed">
									セッション15分前に通知を受け取る
								</Text>
							</div>
							<Switch defaultChecked />
						</Group>
						<Group justify="space-between">
							<div>
								<Text fw={500}>新規予約の通知</Text>
								<Text size="sm" c="dimmed">
									新しい予約が入った際に通知を受け取る
								</Text>
							</div>
							<Switch defaultChecked />
						</Group>
						<Group justify="space-between">
							<div>
								<Text fw={500}>キャンセル通知</Text>
								<Text size="sm" c="dimmed">
									予約がキャンセルされた際に通知を受け取る
								</Text>
							</div>
							<Switch />
						</Group>
					</Stack>
				</Card>

				<Card shadow="sm" padding="lg" radius="md" withBorder>
					<Title order={3} mb="md">
						セッション設定
					</Title>
					<Stack gap="md">
						<TextInput
							label="デフォルトセッション時間"
							placeholder="60"
							rightSection="分"
						/>
						<TextInput
							label="デフォルト料金"
							placeholder="8000"
							rightSection="円"
						/>
						<Button>保存</Button>
					</Stack>
				</Card>
			</Stack>
		</Container>
	);
};

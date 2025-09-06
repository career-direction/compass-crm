"use client";

import {
	Badge,
	Button,
	Card,
	Group,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { IconMail, IconPhone, IconUser } from "@tabler/icons-react";

const clients = [
	{
		id: 1,
		name: "田中太郎",
		email: "tanaka@example.com",
		phone: "090-1234-5678",
		status: "アクティブ",
		lastSession: "2024-01-15",
	},
	{
		id: 2,
		name: "佐藤花子",
		email: "sato@example.com",
		phone: "090-9876-5432",
		status: "アクティブ",
		lastSession: "2024-01-14",
	},
	{
		id: 3,
		name: "鈴木一郎",
		email: "suzuki@example.com",
		phone: "090-5555-1234",
		status: "休眠中",
		lastSession: "2023-12-20",
	},
];

export const ClientList = () => {
	return (
		<Stack gap="xl">
			<Group justify="space-between" align="center">
				<div>
					<Title order={1} mb="sm">
						クライアント一覧
					</Title>
					<Text c="dimmed">登録されているクライアントの管理</Text>
				</div>
				<Button>新規クライアント登録</Button>
			</Group>

			<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
					{clients.map((client) => (
						<Card
							key={client.id}
							shadow="sm"
							padding="lg"
							radius="md"
							withBorder
						>
							<Group justify="space-between" mb="sm">
								<Group>
									<IconUser size={24} />
									<Text fw={600}>{client.name}</Text>
								</Group>
								<Badge
									color={client.status === "アクティブ" ? "green" : "gray"}
								>
									{client.status}
								</Badge>
							</Group>

							<Stack gap="xs" mb="md">
								<Group gap="xs">
									<IconMail size={16} />
									<Text size="sm" c="dimmed">
										{client.email}
									</Text>
								</Group>
								<Group gap="xs">
									<IconPhone size={16} />
									<Text size="sm" c="dimmed">
										{client.phone}
									</Text>
								</Group>
								<Text size="sm" c="dimmed">
									最終セッション: {client.lastSession}
								</Text>
							</Stack>

							<Group justify="space-between">
								<Button variant="light" size="sm">
									詳細
								</Button>
								<Button variant="outline" size="sm">
									編集
								</Button>
							</Group>
						</Card>
					))}
			</SimpleGrid>
		</Stack>
	);
};

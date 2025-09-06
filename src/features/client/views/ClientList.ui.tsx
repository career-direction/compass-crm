"use client";

import { Badge, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { IconMail, IconPhone, IconUser } from "@tabler/icons-react";
import { CPButton } from "@/components/ui/CPButton";
import { CPCard } from "@/components/ui/CPCard";

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
	const handleNewClientClick = () => {
		console.log("新規クライアント登録ボタンがクリックされました");
	};

	const handleDetailClick = () => {
		console.log("詳細ボタンがクリックされました");
	};

	const handleEditClick = () => {
		console.log("編集ボタンがクリックされました");
	};

	return (
		<Stack gap="xl">
			<Group justify="space-between" align="center">
				<div>
					<Title order={1} mb="sm">
						クライアント一覧
					</Title>
					<Text c="dimmed">登録されているクライアントの管理</Text>
				</div>
				<CPButton onClick={handleNewClientClick}>新規クライアント登録</CPButton>
			</Group>

			<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
				{clients.map((client) => (
					<CPCard key={client.id}>
						<Group justify="space-between" mb="sm">
							<Group>
								<IconUser size={24} />
								<Text fw={600}>{client.name}</Text>
							</Group>
							<Badge color={client.status === "アクティブ" ? "green" : "gray"}>
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
							<CPButton variant="light" size="sm" onClick={handleDetailClick}>
								詳細
							</CPButton>
							<CPButton variant="outline" size="sm" onClick={handleEditClick}>
								編集
							</CPButton>
						</Group>
					</CPCard>
				))}
			</SimpleGrid>
		</Stack>
	);
};

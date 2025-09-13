"use client";

import { Badge, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { IconMail, IconPhone, IconUser } from "@tabler/icons-react";
import { CPButton } from "@/components/ui/CPButton";
import { CPCard } from "@/components/ui/CPCard";

const trainers = [
	{
		id: 1,
		name: "山田太郎",
		email: "yamada@example.com",
		phone: "090-1111-2222",
		status: "アクティブ",
		specialty: "筋力トレーニング",
		experience: "5年",
	},
	{
		id: 2,
		name: "加藤美咲",
		email: "kato@example.com",
		phone: "090-3333-4444",
		status: "アクティブ",
		specialty: "ヨガ・ピラティス",
		experience: "3年",
	},
	{
		id: 3,
		name: "渡辺健二",
		email: "watanabe@example.com",
		phone: "090-5555-6666",
		status: "休業中",
		specialty: "有酸素運動",
		experience: "7年",
	},
];

export const TrainerList = () => {
	const handleNewTrainerClick = () => {
		console.log("新規トレーナー登録ボタンがクリックされました");
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
						トレーナー一覧
					</Title>
					<Text c="dimmed">登録されているトレーナーの管理</Text>
				</div>
				<CPButton onClick={handleNewTrainerClick}>新規トレーナー登録</CPButton>
			</Group>

			<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
				{trainers.map((trainer) => (
					<CPCard key={trainer.id}>
						<Group justify="space-between" mb="sm">
							<Group>
								<IconUser size={24} />
								<Text fw={600}>{trainer.name}</Text>
							</Group>
							<Badge color={trainer.status === "アクティブ" ? "green" : "gray"}>
								{trainer.status}
							</Badge>
						</Group>

						<Stack gap="xs" mb="md">
							<Group gap="xs">
								<IconMail size={16} />
								<Text size="sm" c="dimmed">
									{trainer.email}
								</Text>
							</Group>
							<Group gap="xs">
								<IconPhone size={16} />
								<Text size="sm" c="dimmed">
									{trainer.phone}
								</Text>
							</Group>
							<Text size="sm" c="dimmed">
								専門分野: {trainer.specialty}
							</Text>
							<Text size="sm" c="dimmed">
								経験年数: {trainer.experience}
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
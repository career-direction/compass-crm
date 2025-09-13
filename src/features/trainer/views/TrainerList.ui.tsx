"use client";

import { Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { CPButton } from "@/components/ui/CPButton";
import { CPCard } from "@/components/ui/CPCard";
import { TrainerCardContent } from "../components/TrainerCardContent.ui";

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
	{
		id: 4,
		name: "渡辺健二",
		email: "watanabe@example.com",
		phone: "090-5555-6666",
		status: "休業中",
		specialty: "有酸素運動",
		experience: "7年",
	},
	{
		id: 5,
		name: "渡辺健二",
		email: "watanabe@example.com",
		phone: "090-5555-6666",
		status: "休業中",
		specialty: "有酸素運動",
		experience: "7年",
	},
	{
		id: 6,
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

			<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
				{trainers.map((trainer) => (
					<CPCard key={trainer.id}>
						<TrainerCardContent />
					</CPCard>
				))}
			</SimpleGrid>
		</Stack>
	);
};

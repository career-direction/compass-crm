"use client";

import {
	Box,
	Button,
	Card,
	Group,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from "@mantine/core";

export const TrainingMaterialList = () => {
	const trainingMaterials = [
		{
			id: 1,
			title: "筋力トレーニング基礎",
			category: "筋力",
			type: "動画",
			duration: "15分",
		},
		{
			id: 2,
			title: "栄養学入門",
			category: "栄養",
			type: "資料",
			duration: "20分",
		},
		{
			id: 3,
			title: "ストレッチ方法",
			category: "柔軟性",
			type: "動画",
			duration: "10分",
		},
	];

	return (
		<>
			<Group justify="space-between" align="center" my="md">
				<Box>
					<Title>教材一覧</Title>
				</Box>
				<Group>
					<Button>フィルター</Button>
					<Button>教材追加</Button>
				</Group>
			</Group>

			<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
				{trainingMaterials.map((material) => (
					<Card key={material.id} shadow="sm" padding="lg" radius="md" withBorder>
						<Stack gap="xs">
							<Title order={3}>{material.title}</Title>
							<Group justify="space-between">
								<Text size="sm" c="dimmed">
									カテゴリ: {material.category}
								</Text>
								<Text size="sm" c="dimmed">
									{material.type} / {material.duration}
								</Text>
							</Group>
							<Button variant="light" fullWidth mt="md" radius="md">
								詳細を見る
							</Button>
						</Stack>
					</Card>
				))}
			</SimpleGrid>
		</>
	);
};
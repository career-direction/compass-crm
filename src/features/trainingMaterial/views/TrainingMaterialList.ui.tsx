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
			<Card bg="white" shadow="sm" padding="xl" radius="lg" mb="xl" withBorder={false}>
				<Stack gap="md">
					<Group justify="space-between" align="center" wrap="wrap">
						<Box>
							<Title>教材一覧</Title>
						</Box>
						<Group gap="sm">
							<Button variant="light" size="sm">フィルター</Button>
							<Button size="sm">教材追加</Button>
						</Group>
					</Group>
				</Stack>
			</Card>

			<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={{ base: "md", sm: "lg", md: "xl" }}>
				{trainingMaterials.map((material) => (
					<Card 
						key={material.id} 
						bg="white"
						shadow="md" 
						padding={{ base: "lg", sm: "xl" }} 
						radius="lg" 
						withBorder={false}
						style={{
							cursor: "pointer",
							transition: "transform 0.2s ease, box-shadow 0.2s ease",
						}}
						styles={{
							root: {
								"&:hover": {
									transform: "translateY(-4px)",
									boxShadow: "0 8px 25px rgba(0, 0, 0, 0.12)",
								},
							},
						}}
					>
						<Stack gap="md">
							<Title order={3} size="h4">
								{material.title}
							</Title>
							<Group justify="space-between">
								<Text size="sm" c="dimmed">
									カテゴリ: {material.category}
								</Text>
								<Text size="sm" c="dimmed">
									{material.type} / {material.duration}
								</Text>
							</Group>
							<Button variant="light" fullWidth mt="md" radius="md" size="sm">
								詳細を見る
							</Button>
						</Stack>
					</Card>
				))}
			</SimpleGrid>
		</>
	);
};
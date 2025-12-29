"use client";

import { Group, Modal, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CPButton } from "@/components/ui/CPButton";
import { CPCard } from "@/components/ui/CPCard";
import { NewTrainingMaterialModal } from "../components/NewTrainingMaterialModal.container";

export const TrainingMaterialList = () => {
	const [opened, { open, close }] = useDisclosure(false);

	const handleFilterClick = () => {
		console.log("フィルターボタンがクリックされました");
	};

	const handleDetailClick = () => {
		console.log("詳細を見るボタンがクリックされました");
	};

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
				<Group gap="sm">
					<CPButton variant="light" size="sm" onClick={handleFilterClick}>
						フィルター
					</CPButton>
					<CPButton size="sm" onClick={open}>
						教材追加
					</CPButton>
				</Group>
			</Group>

			<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
				{trainingMaterials.map((material) => (
					<CPCard key={material.id}>
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
							<CPButton
								variant="light"
								fullWidth
								mt="md"
								radius="md"
								size="sm"
								onClick={handleDetailClick}
							>
								詳細を見る
							</CPButton>
						</Stack>
					</CPCard>
				))}
			</SimpleGrid>

			{/* 教材追加モーダル */}
			<Modal opened={opened} onClose={close} title="新しい教材" centered size="lg">
				{/* TODO: 実際のownerIdを認証情報から取得する */}
				<NewTrainingMaterialModal onClose={close} ownerId="00000000-0000-0000-0000-000000000000" />
			</Modal>
		</>
	);
};

"use client";

import {
	Center,
	Group,
	Loader,
	Modal,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CPButton } from "@/components/ui/CPButton";
import { CPCard } from "@/components/ui/CPCard";
import type { TrainingMaterialType } from "../types/trainingMaterial";
import { NewTrainingMaterialModal } from "../components/NewTrainingMaterialModal.container";

type TrainingMaterialListUIProps = {
	materials: TrainingMaterialType[];
	fetching: boolean;
	error?: string;
	onAddSuccess: () => void;
};

const contentTypeLabel: Record<string, string> = {
	video: "動画",
	document: "資料",
	audio: "音声",
};

const statusLabel: Record<string, string> = {
	draft: "下書き",
	published: "公開",
	archived: "アーカイブ",
};

export const TrainingMaterialListUI = ({
	materials,
	fetching,
	error,
	onAddSuccess,
}: TrainingMaterialListUIProps) => {
	const [opened, { open, close }] = useDisclosure(false);

	const handleFilterClick = () => {
		console.log("フィルターボタンがクリックされました");
	};

	const handleDetailClick = (key: string) => {
		console.log("詳細を見る:", key);
	};

	const handleClose = () => {
		close();
		onAddSuccess();
	};

	if (fetching) {
		return (
			<Center h={200}>
				<Loader />
			</Center>
		);
	}

	if (error) {
		return (
			<Center h={200}>
				<Text c="red">{error}</Text>
			</Center>
		);
	}

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

			{materials.length === 0 ? (
				<Center h={200}>
					<Text c="dimmed">教材がありません</Text>
				</Center>
			) : (
				<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
					{materials.map((material) => (
						<CPCard key={material.id}>
							<Stack gap="md">
								<Title order={3} size="h4">
									{material.name}
								</Title>
								<Group justify="space-between">
									<Text size="sm" c="dimmed">
										ステータス:{" "}
										{statusLabel[material.status] || material.status}
									</Text>
									<Text size="sm" c="dimmed">
										{contentTypeLabel[material.contentType] ||
											material.contentType}
									</Text>
								</Group>
								<CPButton
									variant="light"
									fullWidth
									mt="md"
									radius="md"
									size="sm"
									onClick={() => handleDetailClick(material.key)}
								>
									詳細を見る
								</CPButton>
							</Stack>
						</CPCard>
					))}
				</SimpleGrid>
			)}

			{/* 教材追加モーダル */}
			<Modal
				opened={opened}
				onClose={close}
				title="新しい教材"
				centered
				size="lg"
			>
				<NewTrainingMaterialModal onClose={handleClose} />
			</Modal>
		</>
	);
};

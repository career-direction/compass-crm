"use client";

import { Group, SimpleGrid, Skeleton, Stack } from "@mantine/core";
import { CPButton } from "@/components/ui/CPButton";
import { CPCard } from "@/components/ui/CPCard";
import { TrainerCardContent } from "../components/TrainerCardContent.ui";
import { useGetTrainersQuery } from "@/generated/gql/graphql";

export const TrainerList = () => {
	const [{ data, fetching, error }] = useGetTrainersQuery();

	const trainers = data?.trainers ?? [];
	const skeletonItems = Array.from({ length: 6 });

	const handleNewTrainerClick = () => {
		console.log("新規トレーナー登録ボタンがクリックされました");
	};

	const header = (
		<Group justify="space-between" align="center">
			<CPButton onClick={handleNewTrainerClick}>新規トレーナー登録</CPButton>
		</Group>
	);

	if (fetching) {
		return (
			<Stack gap="xl">
				{header}
				<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
					{skeletonItems.map((_, index) => (
						<CPCard
							key={`skeleton-${
								// biome-ignore lint/suspicious/noArrayIndexKey: skelton
								index
							}`}
						>
							<Skeleton height={180} radius="md" />
						</CPCard>
					))}
				</SimpleGrid>
			</Stack>
		);
	}

	if (error) {
		return (
			<Stack gap="xl">
				{header}
				<div>エラーが発生しました: {error.message}</div>
			</Stack>
		);
	}

	return (
		<Stack gap="xl">
			{header}

			<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
				{trainers.map((trainer) => (
					<CPCard key={trainer.id}>
						<TrainerCardContent
							firstName={trainer.user.first_name}
							lastName={trainer.user.last_name}
						/>
					</CPCard>
				))}
			</SimpleGrid>
		</Stack>
	);
};

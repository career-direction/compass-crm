"use client";

import { useDisclosure } from "@mantine/hooks";
import { useGetLearningMaterialsQuery } from "@/lib/graphql/generated/client/gql/urql";
import { toTrainingMaterials } from "../trainingMaterial.mapper";
import { TrainingMaterialListUI } from "./TrainingMaterialList.ui";

export const TrainingMaterialList = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [{ data, fetching, error }, refetch] = useGetLearningMaterialsQuery();

	const materials = data ? toTrainingMaterials(data) : [];

	const handleFilterClick = () => {
		console.log("フィルターボタンがクリックされました");
	};

	const handleDetailClick = (key: string) => {
		console.log("詳細を見る:", key);
	};

	const handleOpenModal = () => {
		open();
	};

	const handleCloseModal = () => {
		close();
		refetch({ requestPolicy: "network-only" });
	};

	return (
		<TrainingMaterialListUI
			materials={materials}
			fetching={fetching}
			error={error?.message}
			modalOpened={opened}
			onFilterClick={handleFilterClick}
			onDetailClick={handleDetailClick}
			onOpenModal={handleOpenModal}
			onCloseModal={handleCloseModal}
		/>
	);
};

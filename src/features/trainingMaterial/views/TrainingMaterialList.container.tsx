"use client";

import { useGetLearningMaterialsQuery } from "@/lib/graphql/generated/client/gql/urql";
import { toTrainingMaterials } from "../trainingMaterial.mapper";
import { TrainingMaterialListUI } from "./TrainingMaterialList.ui";

export const TrainingMaterialList = () => {
	const [{ data, fetching, error }, refetch] = useGetLearningMaterialsQuery();

	const materials = data ? toTrainingMaterials(data) : [];

	const handleAddSuccess = () => {
		refetch({ requestPolicy: "network-only" });
	};

	return (
		<TrainingMaterialListUI
			materials={materials}
			fetching={fetching}
			error={error?.message}
			onAddSuccess={handleAddSuccess}
		/>
	);
};

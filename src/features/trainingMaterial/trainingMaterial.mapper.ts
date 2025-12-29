import type * as Operations from "@/graphql/generated/client/gql/graphql";
import type { TrainingMaterialType } from "./types/trainingMaterial";

export function toTrainingMaterials(
	data: Operations.GetLearningMaterialsQuery,
): TrainingMaterialType[] {
	return data.learningMaterials.map((material) => ({
		id: material.id,
		key: material.key,
		name: material.name,
		status: material.status,
		sourceUrl: material.sourceUrl,
		contentType: material.contentType,
		contentId: material.contentId,
	}));
}

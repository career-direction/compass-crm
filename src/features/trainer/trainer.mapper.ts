import * as Operations from "@/lib/graphql/generated/client/gql/graphql";
import type { TrainerType } from "./types/trainer";

export function toTrainers(
	trainers: Operations.GetTrainersQuery,
): TrainerType[] {
	return trainers.trainers.map((trainer) => ({
		id: trainer.id,
		firstName: trainer.user.firstName,
		lastName: trainer.user.lastName,
	}));
}

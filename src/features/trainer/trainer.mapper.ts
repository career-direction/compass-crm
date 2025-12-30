import * as Operations from "../../graphql/generated/client/gql/graphql";
import type { TrainerType } from "./types/trainer";

export function toTrainers(
	trainers: Operations.GetTrainersQuery,
): TrainerType[] {
	return trainers.trainers.map((trainer) => ({
		id: trainer.id,
		firstName: trainer.user.first_name,
		lastName: trainer.user.last_name,
	}));
}

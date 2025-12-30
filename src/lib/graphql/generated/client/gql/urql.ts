import * as Operations from "./graphql";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function useCreateLearningMaterialMutation() {
	return Urql.useMutation<
		Operations.CreateLearningMaterialMutation,
		Operations.CreateLearningMaterialMutationVariables
	>(Operations.CreateLearningMaterialDocument);
}

export function useGetLearningMaterialsQuery(
	options?: Omit<
		Urql.UseQueryArgs<Operations.GetLearningMaterialsQueryVariables>,
		"query"
	>,
) {
	return Urql.useQuery<
		Operations.GetLearningMaterialsQuery,
		Operations.GetLearningMaterialsQueryVariables
	>({ query: Operations.GetLearningMaterialsDocument, ...options });
}

export function useGetTrainersQuery(
	options?: Omit<
		Urql.UseQueryArgs<Operations.GetTrainersQueryVariables>,
		"query"
	>,
) {
	return Urql.useQuery<
		Operations.GetTrainersQuery,
		Operations.GetTrainersQueryVariables
	>({ query: Operations.GetTrainersDocument, ...options });
}

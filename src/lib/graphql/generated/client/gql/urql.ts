import * as Operations from './graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


<<<<<<< HEAD:src/lib/graphql/generated/client/gql/urql.ts
export function useCreateLearningMaterialMutation() {
  return Urql.useMutation<Operations.CreateLearningMaterialMutation, Operations.CreateLearningMaterialMutationVariables>(Operations.CreateLearningMaterialDocument);
};

export function useGetLearningMaterialsQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetLearningMaterialsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetLearningMaterialsQuery, Operations.GetLearningMaterialsQueryVariables>({ query: Operations.GetLearningMaterialsDocument, ...options });
};

=======
>>>>>>> 9b1a8144a161edc3f732dff517141fba942a4a55:src/graphql/generated/client/gql/urql.ts
export function useGetTrainersQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetTrainersQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetTrainersQuery, Operations.GetTrainersQueryVariables>({ query: Operations.GetTrainersDocument, ...options });
};
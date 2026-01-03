import * as Operations from './graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useCreateClientMutation() {
  return Urql.useMutation<Operations.CreateClientMutation, Operations.CreateClientMutationVariables>(Operations.CreateClientDocument);
};

export function useCreateClientWithProfileMutation() {
  return Urql.useMutation<Operations.CreateClientWithProfileMutation, Operations.CreateClientWithProfileMutationVariables>(Operations.CreateClientWithProfileDocument);
};

export function useCreateLearningMaterialMutation() {
  return Urql.useMutation<Operations.CreateLearningMaterialMutation, Operations.CreateLearningMaterialMutationVariables>(Operations.CreateLearningMaterialDocument);
};

export function useGetClientQuery(options: Omit<Urql.UseQueryArgs<Operations.GetClientQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetClientQuery, Operations.GetClientQueryVariables>({ query: Operations.GetClientDocument, ...options });
};

export function useGetClientsQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetClientsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetClientsQuery, Operations.GetClientsQueryVariables>({ query: Operations.GetClientsDocument, ...options });
};

export function useGetLearningMaterialsQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetLearningMaterialsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetLearningMaterialsQuery, Operations.GetLearningMaterialsQueryVariables>({ query: Operations.GetLearningMaterialsDocument, ...options });
};

export function useGetTrainersQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetTrainersQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetTrainersQuery, Operations.GetTrainersQueryVariables>({ query: Operations.GetTrainersDocument, ...options });
};

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetUsersQuery, Operations.GetUsersQueryVariables>({ query: Operations.GetUsersDocument, ...options });
};
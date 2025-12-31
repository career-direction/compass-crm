/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation CreateClient($input: CreateClientInput!) {\n  createClient(input: $input) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n    }\n  }\n}": typeof types.CreateClientDocument,
    "mutation CreateClientWithProfile($input: CreateClientWithProfileInput!) {\n  createClientWithProfile(input: $input) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n      first_name_kana\n      last_name_kana\n      birth_date\n      gender\n    }\n    profile {\n      id\n      occupation\n      hobby\n      allowSnsPost\n      exerciseHistory\n    }\n  }\n}": typeof types.CreateClientWithProfileDocument,
    "mutation CreateLearningMaterial($input: CreateLearningMaterialInput!) {\n  createLearningMaterial(input: $input) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}": typeof types.CreateLearningMaterialDocument,
    "query GetClients($limit: Int, $offset: Int) {\n  clients(limit: $limit, offset: $offset) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n      first_name_kana\n      last_name_kana\n      birth_date\n      gender\n    }\n    profile {\n      id\n      occupation\n      hobby\n      allowSnsPost\n      exerciseHistory\n    }\n  }\n}": typeof types.GetClientsDocument,
    "query GetLearningMaterials($ownerId: String, $limit: Int, $offset: Int) {\n  learningMaterials(ownerId: $ownerId, limit: $limit, offset: $offset) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}": typeof types.GetLearningMaterialsDocument,
    "query GetTrainers {\n  trainers {\n    id\n    user {\n      first_name\n      last_name\n    }\n  }\n}": typeof types.GetTrainersDocument,
    "query GetUsers($limit: Int, $offset: Int) {\n  users(limit: $limit, offset: $offset) {\n    id\n    key\n    first_name\n    last_name\n    first_name_kana\n    last_name_kana\n  }\n}": typeof types.GetUsersDocument,
};
const documents: Documents = {
    "mutation CreateClient($input: CreateClientInput!) {\n  createClient(input: $input) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n    }\n  }\n}": types.CreateClientDocument,
    "mutation CreateClientWithProfile($input: CreateClientWithProfileInput!) {\n  createClientWithProfile(input: $input) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n      first_name_kana\n      last_name_kana\n      birth_date\n      gender\n    }\n    profile {\n      id\n      occupation\n      hobby\n      allowSnsPost\n      exerciseHistory\n    }\n  }\n}": types.CreateClientWithProfileDocument,
    "mutation CreateLearningMaterial($input: CreateLearningMaterialInput!) {\n  createLearningMaterial(input: $input) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}": types.CreateLearningMaterialDocument,
    "query GetClients($limit: Int, $offset: Int) {\n  clients(limit: $limit, offset: $offset) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n      first_name_kana\n      last_name_kana\n      birth_date\n      gender\n    }\n    profile {\n      id\n      occupation\n      hobby\n      allowSnsPost\n      exerciseHistory\n    }\n  }\n}": types.GetClientsDocument,
    "query GetLearningMaterials($ownerId: String, $limit: Int, $offset: Int) {\n  learningMaterials(ownerId: $ownerId, limit: $limit, offset: $offset) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}": types.GetLearningMaterialsDocument,
    "query GetTrainers {\n  trainers {\n    id\n    user {\n      first_name\n      last_name\n    }\n  }\n}": types.GetTrainersDocument,
    "query GetUsers($limit: Int, $offset: Int) {\n  users(limit: $limit, offset: $offset) {\n    id\n    key\n    first_name\n    last_name\n    first_name_kana\n    last_name_kana\n  }\n}": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateClient($input: CreateClientInput!) {\n  createClient(input: $input) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n    }\n  }\n}"): (typeof documents)["mutation CreateClient($input: CreateClientInput!) {\n  createClient(input: $input) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateClientWithProfile($input: CreateClientWithProfileInput!) {\n  createClientWithProfile(input: $input) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n      first_name_kana\n      last_name_kana\n      birth_date\n      gender\n    }\n    profile {\n      id\n      occupation\n      hobby\n      allowSnsPost\n      exerciseHistory\n    }\n  }\n}"): (typeof documents)["mutation CreateClientWithProfile($input: CreateClientWithProfileInput!) {\n  createClientWithProfile(input: $input) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n      first_name_kana\n      last_name_kana\n      birth_date\n      gender\n    }\n    profile {\n      id\n      occupation\n      hobby\n      allowSnsPost\n      exerciseHistory\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateLearningMaterial($input: CreateLearningMaterialInput!) {\n  createLearningMaterial(input: $input) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateLearningMaterial($input: CreateLearningMaterialInput!) {\n  createLearningMaterial(input: $input) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetClients($limit: Int, $offset: Int) {\n  clients(limit: $limit, offset: $offset) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n      first_name_kana\n      last_name_kana\n      birth_date\n      gender\n    }\n    profile {\n      id\n      occupation\n      hobby\n      allowSnsPost\n      exerciseHistory\n    }\n  }\n}"): (typeof documents)["query GetClients($limit: Int, $offset: Int) {\n  clients(limit: $limit, offset: $offset) {\n    id\n    userId\n    user {\n      id\n      key\n      first_name\n      last_name\n      first_name_kana\n      last_name_kana\n      birth_date\n      gender\n    }\n    profile {\n      id\n      occupation\n      hobby\n      allowSnsPost\n      exerciseHistory\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetLearningMaterials($ownerId: String, $limit: Int, $offset: Int) {\n  learningMaterials(ownerId: $ownerId, limit: $limit, offset: $offset) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetLearningMaterials($ownerId: String, $limit: Int, $offset: Int) {\n  learningMaterials(ownerId: $ownerId, limit: $limit, offset: $offset) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTrainers {\n  trainers {\n    id\n    user {\n      first_name\n      last_name\n    }\n  }\n}"): (typeof documents)["query GetTrainers {\n  trainers {\n    id\n    user {\n      first_name\n      last_name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUsers($limit: Int, $offset: Int) {\n  users(limit: $limit, offset: $offset) {\n    id\n    key\n    first_name\n    last_name\n    first_name_kana\n    last_name_kana\n  }\n}"): (typeof documents)["query GetUsers($limit: Int, $offset: Int) {\n  users(limit: $limit, offset: $offset) {\n    id\n    key\n    first_name\n    last_name\n    first_name_kana\n    last_name_kana\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
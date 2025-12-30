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
<<<<<<< HEAD:src/lib/graphql/generated/client/gql/gql.ts
    "mutation CreateLearningMaterial($input: CreateLearningMaterialInput!) {\n  createLearningMaterial(input: $input) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}": typeof types.CreateLearningMaterialDocument,
    "query GetLearningMaterials($ownerId: String, $limit: Int, $offset: Int) {\n  learningMaterials(ownerId: $ownerId, limit: $limit, offset: $offset) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}": typeof types.GetLearningMaterialsDocument,
    "query GetTrainers {\n  trainers {\n    id\n    user {\n      first_name\n      last_name\n    }\n  }\n}": typeof types.GetTrainersDocument,
};
const documents: Documents = {
    "mutation CreateLearningMaterial($input: CreateLearningMaterialInput!) {\n  createLearningMaterial(input: $input) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}": types.CreateLearningMaterialDocument,
    "query GetLearningMaterials($ownerId: String, $limit: Int, $offset: Int) {\n  learningMaterials(ownerId: $ownerId, limit: $limit, offset: $offset) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}": types.GetLearningMaterialsDocument,
=======
    "query GetTrainers {\n  trainers {\n    id\n    user {\n      first_name\n      last_name\n    }\n  }\n}": typeof types.GetTrainersDocument,
};
const documents: Documents = {
>>>>>>> 9b1a8144a161edc3f732dff517141fba942a4a55:src/graphql/generated/client/gql/gql.ts
    "query GetTrainers {\n  trainers {\n    id\n    user {\n      first_name\n      last_name\n    }\n  }\n}": types.GetTrainersDocument,
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
<<<<<<< HEAD:src/lib/graphql/generated/client/gql/gql.ts
export function graphql(source: "mutation CreateLearningMaterial($input: CreateLearningMaterialInput!) {\n  createLearningMaterial(input: $input) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateLearningMaterial($input: CreateLearningMaterialInput!) {\n  createLearningMaterial(input: $input) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetLearningMaterials($ownerId: String, $limit: Int, $offset: Int) {\n  learningMaterials(ownerId: $ownerId, limit: $limit, offset: $offset) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetLearningMaterials($ownerId: String, $limit: Int, $offset: Int) {\n  learningMaterials(ownerId: $ownerId, limit: $limit, offset: $offset) {\n    id\n    ownerId\n    key\n    name\n    status\n    sourceUrl\n    contentType\n    contentId\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
=======
>>>>>>> 9b1a8144a161edc3f732dff517141fba942a4a55:src/graphql/generated/client/gql/gql.ts
export function graphql(source: "query GetTrainers {\n  trainers {\n    id\n    user {\n      first_name\n      last_name\n    }\n  }\n}"): (typeof documents)["query GetTrainers {\n  trainers {\n    id\n    user {\n      first_name\n      last_name\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
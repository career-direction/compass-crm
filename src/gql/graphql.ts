/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date without time information */
  Date: { input: any; output: any; }
  /** A date and time */
  Datetime: { input: any; output: any; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: any; output: any; }
  /** A universally unique identifier */
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `_prisma_migrations` collection */
  deleteFrom_prisma_migrationsCollection: _Prisma_MigrationsDeleteResponse;
  /** Deletes zero or more records from the `assignments` collection */
  deleteFromassignmentsCollection: AssignmentsDeleteResponse;
  /** Deletes zero or more records from the `body_conditions` collection */
  deleteFrombody_conditionsCollection: Body_ConditionsDeleteResponse;
  /** Deletes zero or more records from the `client_profiles` collection */
  deleteFromclient_profilesCollection: Client_ProfilesDeleteResponse;
  /** Deletes zero or more records from the `clients` collection */
  deleteFromclientsCollection: ClientsDeleteResponse;
  /** Deletes zero or more records from the `curriculum_units` collection */
  deleteFromcurriculum_unitsCollection: Curriculum_UnitsDeleteResponse;
  /** Deletes zero or more records from the `learning_materials` collection */
  deleteFromlearning_materialsCollection: Learning_MaterialsDeleteResponse;
  /** Deletes zero or more records from the `midterm_health_purposes` collection */
  deleteFrommidterm_health_purposesCollection: Midterm_Health_PurposesDeleteResponse;
  /** Deletes zero or more records from the `pt_session_items` collection */
  deleteFrompt_session_itemsCollection: Pt_Session_ItemsDeleteResponse;
  /** Deletes zero or more records from the `pt_sessions` collection */
  deleteFrompt_sessionsCollection: Pt_SessionsDeleteResponse;
  /** Deletes zero or more records from the `required_functions` collection */
  deleteFromrequired_functionsCollection: Required_FunctionsDeleteResponse;
  /** Deletes zero or more records from the `trainer_profiles` collection */
  deleteFromtrainer_profilesCollection: Trainer_ProfilesDeleteResponse;
  /** Deletes zero or more records from the `trainers` collection */
  deleteFromtrainersCollection: TrainersDeleteResponse;
  /** Deletes zero or more records from the `treatment_menus` collection */
  deleteFromtreatment_menusCollection: Treatment_MenusDeleteResponse;
  /** Deletes zero or more records from the `user_credentials` collection */
  deleteFromuser_credentialsCollection: User_CredentialsDeleteResponse;
  /** Deletes zero or more records from the `users` collection */
  deleteFromusersCollection: UsersDeleteResponse;
  /** Adds one or more `_prisma_migrations` records to the collection */
  insertInto_prisma_migrationsCollection?: Maybe<_Prisma_MigrationsInsertResponse>;
  /** Adds one or more `assignments` records to the collection */
  insertIntoassignmentsCollection?: Maybe<AssignmentsInsertResponse>;
  /** Adds one or more `body_conditions` records to the collection */
  insertIntobody_conditionsCollection?: Maybe<Body_ConditionsInsertResponse>;
  /** Adds one or more `client_profiles` records to the collection */
  insertIntoclient_profilesCollection?: Maybe<Client_ProfilesInsertResponse>;
  /** Adds one or more `clients` records to the collection */
  insertIntoclientsCollection?: Maybe<ClientsInsertResponse>;
  /** Adds one or more `curriculum_units` records to the collection */
  insertIntocurriculum_unitsCollection?: Maybe<Curriculum_UnitsInsertResponse>;
  /** Adds one or more `learning_materials` records to the collection */
  insertIntolearning_materialsCollection?: Maybe<Learning_MaterialsInsertResponse>;
  /** Adds one or more `midterm_health_purposes` records to the collection */
  insertIntomidterm_health_purposesCollection?: Maybe<Midterm_Health_PurposesInsertResponse>;
  /** Adds one or more `pt_session_items` records to the collection */
  insertIntopt_session_itemsCollection?: Maybe<Pt_Session_ItemsInsertResponse>;
  /** Adds one or more `pt_sessions` records to the collection */
  insertIntopt_sessionsCollection?: Maybe<Pt_SessionsInsertResponse>;
  /** Adds one or more `required_functions` records to the collection */
  insertIntorequired_functionsCollection?: Maybe<Required_FunctionsInsertResponse>;
  /** Adds one or more `trainer_profiles` records to the collection */
  insertIntotrainer_profilesCollection?: Maybe<Trainer_ProfilesInsertResponse>;
  /** Adds one or more `trainers` records to the collection */
  insertIntotrainersCollection?: Maybe<TrainersInsertResponse>;
  /** Adds one or more `treatment_menus` records to the collection */
  insertIntotreatment_menusCollection?: Maybe<Treatment_MenusInsertResponse>;
  /** Adds one or more `user_credentials` records to the collection */
  insertIntouser_credentialsCollection?: Maybe<User_CredentialsInsertResponse>;
  /** Adds one or more `users` records to the collection */
  insertIntousersCollection?: Maybe<UsersInsertResponse>;
  /** Updates zero or more records in the `_prisma_migrations` collection */
  update_prisma_migrationsCollection: _Prisma_MigrationsUpdateResponse;
  /** Updates zero or more records in the `assignments` collection */
  updateassignmentsCollection: AssignmentsUpdateResponse;
  /** Updates zero or more records in the `body_conditions` collection */
  updatebody_conditionsCollection: Body_ConditionsUpdateResponse;
  /** Updates zero or more records in the `client_profiles` collection */
  updateclient_profilesCollection: Client_ProfilesUpdateResponse;
  /** Updates zero or more records in the `clients` collection */
  updateclientsCollection: ClientsUpdateResponse;
  /** Updates zero or more records in the `curriculum_units` collection */
  updatecurriculum_unitsCollection: Curriculum_UnitsUpdateResponse;
  /** Updates zero or more records in the `learning_materials` collection */
  updatelearning_materialsCollection: Learning_MaterialsUpdateResponse;
  /** Updates zero or more records in the `midterm_health_purposes` collection */
  updatemidterm_health_purposesCollection: Midterm_Health_PurposesUpdateResponse;
  /** Updates zero or more records in the `pt_session_items` collection */
  updatept_session_itemsCollection: Pt_Session_ItemsUpdateResponse;
  /** Updates zero or more records in the `pt_sessions` collection */
  updatept_sessionsCollection: Pt_SessionsUpdateResponse;
  /** Updates zero or more records in the `required_functions` collection */
  updaterequired_functionsCollection: Required_FunctionsUpdateResponse;
  /** Updates zero or more records in the `trainer_profiles` collection */
  updatetrainer_profilesCollection: Trainer_ProfilesUpdateResponse;
  /** Updates zero or more records in the `trainers` collection */
  updatetrainersCollection: TrainersUpdateResponse;
  /** Updates zero or more records in the `treatment_menus` collection */
  updatetreatment_menusCollection: Treatment_MenusUpdateResponse;
  /** Updates zero or more records in the `user_credentials` collection */
  updateuser_credentialsCollection: User_CredentialsUpdateResponse;
  /** Updates zero or more records in the `users` collection */
  updateusersCollection: UsersUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrom_Prisma_MigrationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<_Prisma_MigrationsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromassignmentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssignmentsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrombody_ConditionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Body_ConditionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromclient_ProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Client_ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromclientsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ClientsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcurriculum_UnitsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Curriculum_UnitsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromlearning_MaterialsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Learning_MaterialsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommidterm_Health_PurposesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Midterm_Health_PurposesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompt_Session_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pt_Session_ItemsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompt_SessionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pt_SessionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromrequired_FunctionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Required_FunctionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtrainer_ProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Trainer_ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtrainersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TrainersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtreatment_MenusCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Treatment_MenusFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromuser_CredentialsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_CredentialsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromusersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UsersFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertInto_Prisma_MigrationsCollectionArgs = {
  objects: Array<_Prisma_MigrationsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoassignmentsCollectionArgs = {
  objects: Array<AssignmentsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntobody_ConditionsCollectionArgs = {
  objects: Array<Body_ConditionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoclient_ProfilesCollectionArgs = {
  objects: Array<Client_ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoclientsCollectionArgs = {
  objects: Array<ClientsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocurriculum_UnitsCollectionArgs = {
  objects: Array<Curriculum_UnitsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntolearning_MaterialsCollectionArgs = {
  objects: Array<Learning_MaterialsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomidterm_Health_PurposesCollectionArgs = {
  objects: Array<Midterm_Health_PurposesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopt_Session_ItemsCollectionArgs = {
  objects: Array<Pt_Session_ItemsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopt_SessionsCollectionArgs = {
  objects: Array<Pt_SessionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntorequired_FunctionsCollectionArgs = {
  objects: Array<Required_FunctionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotrainer_ProfilesCollectionArgs = {
  objects: Array<Trainer_ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotrainersCollectionArgs = {
  objects: Array<TrainersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotreatment_MenusCollectionArgs = {
  objects: Array<Treatment_MenusInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntouser_CredentialsCollectionArgs = {
  objects: Array<User_CredentialsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntousersCollectionArgs = {
  objects: Array<UsersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdate_Prisma_MigrationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<_Prisma_MigrationsFilter>;
  set: _Prisma_MigrationsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateassignmentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssignmentsFilter>;
  set: AssignmentsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatebody_ConditionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Body_ConditionsFilter>;
  set: Body_ConditionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateclient_ProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Client_ProfilesFilter>;
  set: Client_ProfilesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateclientsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ClientsFilter>;
  set: ClientsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecurriculum_UnitsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Curriculum_UnitsFilter>;
  set: Curriculum_UnitsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatelearning_MaterialsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Learning_MaterialsFilter>;
  set: Learning_MaterialsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatemidterm_Health_PurposesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Midterm_Health_PurposesFilter>;
  set: Midterm_Health_PurposesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatept_Session_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pt_Session_ItemsFilter>;
  set: Pt_Session_ItemsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatept_SessionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pt_SessionsFilter>;
  set: Pt_SessionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdaterequired_FunctionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Required_FunctionsFilter>;
  set: Required_FunctionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetrainer_ProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Trainer_ProfilesFilter>;
  set: Trainer_ProfilesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetrainersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TrainersFilter>;
  set: TrainersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetreatment_MenusCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Treatment_MenusFilter>;
  set: Treatment_MenusUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateuser_CredentialsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_CredentialsFilter>;
  set: User_CredentialsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateusersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UsersFilter>;
  set: UsersUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `_prisma_migrations` */
  _prisma_migrationsCollection?: Maybe<_Prisma_MigrationsConnection>;
  /** A pagable collection of type `assignments` */
  assignmentsCollection?: Maybe<AssignmentsConnection>;
  /** A pagable collection of type `body_conditions` */
  body_conditionsCollection?: Maybe<Body_ConditionsConnection>;
  /** A pagable collection of type `client_profiles` */
  client_profilesCollection?: Maybe<Client_ProfilesConnection>;
  /** A pagable collection of type `clients` */
  clientsCollection?: Maybe<ClientsConnection>;
  /** A pagable collection of type `curriculum_units` */
  curriculum_unitsCollection?: Maybe<Curriculum_UnitsConnection>;
  /** A pagable collection of type `learning_materials` */
  learning_materialsCollection?: Maybe<Learning_MaterialsConnection>;
  /** A pagable collection of type `midterm_health_purposes` */
  midterm_health_purposesCollection?: Maybe<Midterm_Health_PurposesConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `pt_session_items` */
  pt_session_itemsCollection?: Maybe<Pt_Session_ItemsConnection>;
  /** A pagable collection of type `pt_sessions` */
  pt_sessionsCollection?: Maybe<Pt_SessionsConnection>;
  /** A pagable collection of type `required_functions` */
  required_functionsCollection?: Maybe<Required_FunctionsConnection>;
  /** A pagable collection of type `trainer_profiles` */
  trainer_profilesCollection?: Maybe<Trainer_ProfilesConnection>;
  /** A pagable collection of type `trainers` */
  trainersCollection?: Maybe<TrainersConnection>;
  /** A pagable collection of type `treatment_menus` */
  treatment_menusCollection?: Maybe<Treatment_MenusConnection>;
  /** A pagable collection of type `user_credentials` */
  user_credentialsCollection?: Maybe<User_CredentialsConnection>;
  /** A pagable collection of type `users` */
  usersCollection?: Maybe<UsersConnection>;
};


/** The root type for querying data */
export type Query_Prisma_MigrationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<_Prisma_MigrationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<_Prisma_MigrationsOrderBy>>;
};


/** The root type for querying data */
export type QueryAssignmentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssignmentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssignmentsOrderBy>>;
};


/** The root type for querying data */
export type QueryBody_ConditionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Body_ConditionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Body_ConditionsOrderBy>>;
};


/** The root type for querying data */
export type QueryClient_ProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Client_ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Client_ProfilesOrderBy>>;
};


/** The root type for querying data */
export type QueryClientsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ClientsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClientsOrderBy>>;
};


/** The root type for querying data */
export type QueryCurriculum_UnitsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Curriculum_UnitsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Curriculum_UnitsOrderBy>>;
};


/** The root type for querying data */
export type QueryLearning_MaterialsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Learning_MaterialsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Learning_MaterialsOrderBy>>;
};


/** The root type for querying data */
export type QueryMidterm_Health_PurposesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Midterm_Health_PurposesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Midterm_Health_PurposesOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryPt_Session_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pt_Session_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pt_Session_ItemsOrderBy>>;
};


/** The root type for querying data */
export type QueryPt_SessionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pt_SessionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pt_SessionsOrderBy>>;
};


/** The root type for querying data */
export type QueryRequired_FunctionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Required_FunctionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Required_FunctionsOrderBy>>;
};


/** The root type for querying data */
export type QueryTrainer_ProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Trainer_ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Trainer_ProfilesOrderBy>>;
};


/** The root type for querying data */
export type QueryTrainersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TrainersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrainersOrderBy>>;
};


/** The root type for querying data */
export type QueryTreatment_MenusCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Treatment_MenusFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Treatment_MenusOrderBy>>;
};


/** The root type for querying data */
export type QueryUser_CredentialsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_CredentialsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_CredentialsOrderBy>>;
};


/** The root type for querying data */
export type QueryUsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type _Prisma_Migrations = Node & {
  __typename?: '_prisma_migrations';
  applied_steps_count: Scalars['Int']['output'];
  checksum: Scalars['String']['output'];
  finished_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['String']['output'];
  logs?: Maybe<Scalars['String']['output']>;
  migration_name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  rolled_back_at?: Maybe<Scalars['Datetime']['output']>;
  started_at: Scalars['Datetime']['output'];
};

export type _Prisma_MigrationsConnection = {
  __typename?: '_prisma_migrationsConnection';
  edges: Array<_Prisma_MigrationsEdge>;
  pageInfo: PageInfo;
};

export type _Prisma_MigrationsDeleteResponse = {
  __typename?: '_prisma_migrationsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<_Prisma_Migrations>;
};

export type _Prisma_MigrationsEdge = {
  __typename?: '_prisma_migrationsEdge';
  cursor: Scalars['String']['output'];
  node: _Prisma_Migrations;
};

export type _Prisma_MigrationsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<_Prisma_MigrationsFilter>>;
  applied_steps_count?: InputMaybe<IntFilter>;
  checksum?: InputMaybe<StringFilter>;
  finished_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<StringFilter>;
  logs?: InputMaybe<StringFilter>;
  migration_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<_Prisma_MigrationsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<_Prisma_MigrationsFilter>>;
  rolled_back_at?: InputMaybe<DatetimeFilter>;
  started_at?: InputMaybe<DatetimeFilter>;
};

export type _Prisma_MigrationsInsertInput = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['Datetime']['input']>;
  started_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type _Prisma_MigrationsInsertResponse = {
  __typename?: '_prisma_migrationsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<_Prisma_Migrations>;
};

export type _Prisma_MigrationsOrderBy = {
  applied_steps_count?: InputMaybe<OrderByDirection>;
  checksum?: InputMaybe<OrderByDirection>;
  finished_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  logs?: InputMaybe<OrderByDirection>;
  migration_name?: InputMaybe<OrderByDirection>;
  rolled_back_at?: InputMaybe<OrderByDirection>;
  started_at?: InputMaybe<OrderByDirection>;
};

export type _Prisma_MigrationsUpdateInput = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['Datetime']['input']>;
  started_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type _Prisma_MigrationsUpdateResponse = {
  __typename?: '_prisma_migrationsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<_Prisma_Migrations>;
};

export type Assignments = Node & {
  __typename?: 'assignments';
  created_at: Scalars['Datetime']['output'];
  due_date: Scalars['Date']['output'];
  id: Scalars['BigInt']['output'];
  key: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pt_session_id: Scalars['BigInt']['output'];
  pt_sessions: Pt_Sessions;
  task_id: Scalars['BigInt']['output'];
  task_type: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
};

export type AssignmentsConnection = {
  __typename?: 'assignmentsConnection';
  edges: Array<AssignmentsEdge>;
  pageInfo: PageInfo;
};

export type AssignmentsDeleteResponse = {
  __typename?: 'assignmentsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Assignments>;
};

export type AssignmentsEdge = {
  __typename?: 'assignmentsEdge';
  cursor: Scalars['String']['output'];
  node: Assignments;
};

export type AssignmentsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AssignmentsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  due_date?: InputMaybe<DateFilter>;
  id?: InputMaybe<BigIntFilter>;
  key?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AssignmentsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AssignmentsFilter>>;
  pt_session_id?: InputMaybe<BigIntFilter>;
  task_id?: InputMaybe<BigIntFilter>;
  task_type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type AssignmentsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  due_date?: InputMaybe<Scalars['Date']['input']>;
  key?: InputMaybe<Scalars['UUID']['input']>;
  pt_session_id?: InputMaybe<Scalars['BigInt']['input']>;
  task_id?: InputMaybe<Scalars['BigInt']['input']>;
  task_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type AssignmentsInsertResponse = {
  __typename?: 'assignmentsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Assignments>;
};

export type AssignmentsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  due_date?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  pt_session_id?: InputMaybe<OrderByDirection>;
  task_id?: InputMaybe<OrderByDirection>;
  task_type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type AssignmentsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  due_date?: InputMaybe<Scalars['Date']['input']>;
  key?: InputMaybe<Scalars['UUID']['input']>;
  pt_session_id?: InputMaybe<Scalars['BigInt']['input']>;
  task_id?: InputMaybe<Scalars['BigInt']['input']>;
  task_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type AssignmentsUpdateResponse = {
  __typename?: 'assignmentsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Assignments>;
};

export type Body_Conditions = Node & {
  __typename?: 'body_conditions';
  arm_circumference?: Maybe<Scalars['Float']['output']>;
  avg_respiration_rate?: Maybe<Scalars['Float']['output']>;
  avg_sleep_time?: Maybe<Scalars['Float']['output']>;
  bmi?: Maybe<Scalars['Float']['output']>;
  bmr?: Maybe<Scalars['Float']['output']>;
  body_fat?: Maybe<Scalars['Float']['output']>;
  bust?: Maybe<Scalars['Float']['output']>;
  buttock_height?: Maybe<Scalars['Float']['output']>;
  calf_circumference?: Maybe<Scalars['Float']['output']>;
  client_id: Scalars['BigInt']['output'];
  clients: Clients;
  ffd?: Maybe<Scalars['Float']['output']>;
  hip?: Maybe<Scalars['Float']['output']>;
  hwd?: Maybe<Scalars['Float']['output']>;
  id: Scalars['BigInt']['output'];
  measured_at: Scalars['Date']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  muscle_mass?: Maybe<Scalars['Float']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  parasympathetic?: Maybe<Scalars['Float']['output']>;
  skeletal_muscle_rate?: Maybe<Scalars['Float']['output']>;
  sympathetic?: Maybe<Scalars['Float']['output']>;
  thigh_circumference?: Maybe<Scalars['Float']['output']>;
  underbust?: Maybe<Scalars['Float']['output']>;
  waist?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Body_ConditionsConnection = {
  __typename?: 'body_conditionsConnection';
  edges: Array<Body_ConditionsEdge>;
  pageInfo: PageInfo;
};

export type Body_ConditionsDeleteResponse = {
  __typename?: 'body_conditionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Body_Conditions>;
};

export type Body_ConditionsEdge = {
  __typename?: 'body_conditionsEdge';
  cursor: Scalars['String']['output'];
  node: Body_Conditions;
};

export type Body_ConditionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Body_ConditionsFilter>>;
  arm_circumference?: InputMaybe<FloatFilter>;
  avg_respiration_rate?: InputMaybe<FloatFilter>;
  avg_sleep_time?: InputMaybe<FloatFilter>;
  bmi?: InputMaybe<FloatFilter>;
  bmr?: InputMaybe<FloatFilter>;
  body_fat?: InputMaybe<FloatFilter>;
  bust?: InputMaybe<FloatFilter>;
  buttock_height?: InputMaybe<FloatFilter>;
  calf_circumference?: InputMaybe<FloatFilter>;
  client_id?: InputMaybe<BigIntFilter>;
  ffd?: InputMaybe<FloatFilter>;
  hip?: InputMaybe<FloatFilter>;
  hwd?: InputMaybe<FloatFilter>;
  id?: InputMaybe<BigIntFilter>;
  measured_at?: InputMaybe<DateFilter>;
  memo?: InputMaybe<StringFilter>;
  muscle_mass?: InputMaybe<FloatFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Body_ConditionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Body_ConditionsFilter>>;
  parasympathetic?: InputMaybe<FloatFilter>;
  skeletal_muscle_rate?: InputMaybe<FloatFilter>;
  sympathetic?: InputMaybe<FloatFilter>;
  thigh_circumference?: InputMaybe<FloatFilter>;
  underbust?: InputMaybe<FloatFilter>;
  waist?: InputMaybe<FloatFilter>;
  weight?: InputMaybe<FloatFilter>;
};

export type Body_ConditionsInsertInput = {
  arm_circumference?: InputMaybe<Scalars['Float']['input']>;
  avg_respiration_rate?: InputMaybe<Scalars['Float']['input']>;
  avg_sleep_time?: InputMaybe<Scalars['Float']['input']>;
  bmi?: InputMaybe<Scalars['Float']['input']>;
  bmr?: InputMaybe<Scalars['Float']['input']>;
  body_fat?: InputMaybe<Scalars['Float']['input']>;
  bust?: InputMaybe<Scalars['Float']['input']>;
  buttock_height?: InputMaybe<Scalars['Float']['input']>;
  calf_circumference?: InputMaybe<Scalars['Float']['input']>;
  client_id?: InputMaybe<Scalars['BigInt']['input']>;
  ffd?: InputMaybe<Scalars['Float']['input']>;
  hip?: InputMaybe<Scalars['Float']['input']>;
  hwd?: InputMaybe<Scalars['Float']['input']>;
  measured_at?: InputMaybe<Scalars['Date']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  muscle_mass?: InputMaybe<Scalars['Float']['input']>;
  parasympathetic?: InputMaybe<Scalars['Float']['input']>;
  skeletal_muscle_rate?: InputMaybe<Scalars['Float']['input']>;
  sympathetic?: InputMaybe<Scalars['Float']['input']>;
  thigh_circumference?: InputMaybe<Scalars['Float']['input']>;
  underbust?: InputMaybe<Scalars['Float']['input']>;
  waist?: InputMaybe<Scalars['Float']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type Body_ConditionsInsertResponse = {
  __typename?: 'body_conditionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Body_Conditions>;
};

export type Body_ConditionsOrderBy = {
  arm_circumference?: InputMaybe<OrderByDirection>;
  avg_respiration_rate?: InputMaybe<OrderByDirection>;
  avg_sleep_time?: InputMaybe<OrderByDirection>;
  bmi?: InputMaybe<OrderByDirection>;
  bmr?: InputMaybe<OrderByDirection>;
  body_fat?: InputMaybe<OrderByDirection>;
  bust?: InputMaybe<OrderByDirection>;
  buttock_height?: InputMaybe<OrderByDirection>;
  calf_circumference?: InputMaybe<OrderByDirection>;
  client_id?: InputMaybe<OrderByDirection>;
  ffd?: InputMaybe<OrderByDirection>;
  hip?: InputMaybe<OrderByDirection>;
  hwd?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  measured_at?: InputMaybe<OrderByDirection>;
  memo?: InputMaybe<OrderByDirection>;
  muscle_mass?: InputMaybe<OrderByDirection>;
  parasympathetic?: InputMaybe<OrderByDirection>;
  skeletal_muscle_rate?: InputMaybe<OrderByDirection>;
  sympathetic?: InputMaybe<OrderByDirection>;
  thigh_circumference?: InputMaybe<OrderByDirection>;
  underbust?: InputMaybe<OrderByDirection>;
  waist?: InputMaybe<OrderByDirection>;
  weight?: InputMaybe<OrderByDirection>;
};

export type Body_ConditionsUpdateInput = {
  arm_circumference?: InputMaybe<Scalars['Float']['input']>;
  avg_respiration_rate?: InputMaybe<Scalars['Float']['input']>;
  avg_sleep_time?: InputMaybe<Scalars['Float']['input']>;
  bmi?: InputMaybe<Scalars['Float']['input']>;
  bmr?: InputMaybe<Scalars['Float']['input']>;
  body_fat?: InputMaybe<Scalars['Float']['input']>;
  bust?: InputMaybe<Scalars['Float']['input']>;
  buttock_height?: InputMaybe<Scalars['Float']['input']>;
  calf_circumference?: InputMaybe<Scalars['Float']['input']>;
  client_id?: InputMaybe<Scalars['BigInt']['input']>;
  ffd?: InputMaybe<Scalars['Float']['input']>;
  hip?: InputMaybe<Scalars['Float']['input']>;
  hwd?: InputMaybe<Scalars['Float']['input']>;
  measured_at?: InputMaybe<Scalars['Date']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  muscle_mass?: InputMaybe<Scalars['Float']['input']>;
  parasympathetic?: InputMaybe<Scalars['Float']['input']>;
  skeletal_muscle_rate?: InputMaybe<Scalars['Float']['input']>;
  sympathetic?: InputMaybe<Scalars['Float']['input']>;
  thigh_circumference?: InputMaybe<Scalars['Float']['input']>;
  underbust?: InputMaybe<Scalars['Float']['input']>;
  waist?: InputMaybe<Scalars['Float']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type Body_ConditionsUpdateResponse = {
  __typename?: 'body_conditionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Body_Conditions>;
};

export type Client_Profiles = Node & {
  __typename?: 'client_profiles';
  allow_sns_post: Scalars['String']['output'];
  client_id: Scalars['BigInt']['output'];
  clients: Clients;
  exercise_history: Scalars['String']['output'];
  hobby: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  occupation: Scalars['String']['output'];
};

export type Client_ProfilesConnection = {
  __typename?: 'client_profilesConnection';
  edges: Array<Client_ProfilesEdge>;
  pageInfo: PageInfo;
};

export type Client_ProfilesDeleteResponse = {
  __typename?: 'client_profilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Client_Profiles>;
};

export type Client_ProfilesEdge = {
  __typename?: 'client_profilesEdge';
  cursor: Scalars['String']['output'];
  node: Client_Profiles;
};

export type Client_ProfilesFilter = {
  allow_sns_post?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Client_ProfilesFilter>>;
  client_id?: InputMaybe<BigIntFilter>;
  exercise_history?: InputMaybe<StringFilter>;
  hobby?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Client_ProfilesFilter>;
  occupation?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Client_ProfilesFilter>>;
};

export type Client_ProfilesInsertInput = {
  allow_sns_post?: InputMaybe<Scalars['String']['input']>;
  client_id?: InputMaybe<Scalars['BigInt']['input']>;
  exercise_history?: InputMaybe<Scalars['String']['input']>;
  hobby?: InputMaybe<Scalars['String']['input']>;
  occupation?: InputMaybe<Scalars['String']['input']>;
};

export type Client_ProfilesInsertResponse = {
  __typename?: 'client_profilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Client_Profiles>;
};

export type Client_ProfilesOrderBy = {
  allow_sns_post?: InputMaybe<OrderByDirection>;
  client_id?: InputMaybe<OrderByDirection>;
  exercise_history?: InputMaybe<OrderByDirection>;
  hobby?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  occupation?: InputMaybe<OrderByDirection>;
};

export type Client_ProfilesUpdateInput = {
  allow_sns_post?: InputMaybe<Scalars['String']['input']>;
  client_id?: InputMaybe<Scalars['BigInt']['input']>;
  exercise_history?: InputMaybe<Scalars['String']['input']>;
  hobby?: InputMaybe<Scalars['String']['input']>;
  occupation?: InputMaybe<Scalars['String']['input']>;
};

export type Client_ProfilesUpdateResponse = {
  __typename?: 'client_profilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Client_Profiles>;
};

export type Clients = Node & {
  __typename?: 'clients';
  body_conditionsCollection?: Maybe<Body_ConditionsConnection>;
  client_profiles?: Maybe<Client_Profiles>;
  id: Scalars['BigInt']['output'];
  midterm_health_purposesCollection?: Maybe<Midterm_Health_PurposesConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pt_sessionsCollection?: Maybe<Pt_SessionsConnection>;
  user_id: Scalars['BigInt']['output'];
  users: Users;
};


export type ClientsBody_ConditionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Body_ConditionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Body_ConditionsOrderBy>>;
};


export type ClientsMidterm_Health_PurposesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Midterm_Health_PurposesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Midterm_Health_PurposesOrderBy>>;
};


export type ClientsPt_SessionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pt_SessionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pt_SessionsOrderBy>>;
};

export type ClientsConnection = {
  __typename?: 'clientsConnection';
  edges: Array<ClientsEdge>;
  pageInfo: PageInfo;
};

export type ClientsDeleteResponse = {
  __typename?: 'clientsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Clients>;
};

export type ClientsEdge = {
  __typename?: 'clientsEdge';
  cursor: Scalars['String']['output'];
  node: Clients;
};

export type ClientsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ClientsFilter>>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ClientsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ClientsFilter>>;
  user_id?: InputMaybe<BigIntFilter>;
};

export type ClientsInsertInput = {
  user_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ClientsInsertResponse = {
  __typename?: 'clientsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Clients>;
};

export type ClientsOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type ClientsUpdateInput = {
  user_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ClientsUpdateResponse = {
  __typename?: 'clientsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Clients>;
};

export type Curriculum_Units = Node & {
  __typename?: 'curriculum_units';
  created_at: Scalars['Datetime']['output'];
  evaluation_criteria: Scalars['String']['output'];
  evaluation_criteria_url: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  overview: Scalars['String']['output'];
  overview_url: Scalars['String']['output'];
  required_functionsCollection?: Maybe<Required_FunctionsConnection>;
  type: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type Curriculum_UnitsRequired_FunctionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Required_FunctionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Required_FunctionsOrderBy>>;
};

export type Curriculum_UnitsConnection = {
  __typename?: 'curriculum_unitsConnection';
  edges: Array<Curriculum_UnitsEdge>;
  pageInfo: PageInfo;
};

export type Curriculum_UnitsDeleteResponse = {
  __typename?: 'curriculum_unitsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Curriculum_Units>;
};

export type Curriculum_UnitsEdge = {
  __typename?: 'curriculum_unitsEdge';
  cursor: Scalars['String']['output'];
  node: Curriculum_Units;
};

export type Curriculum_UnitsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Curriculum_UnitsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  evaluation_criteria?: InputMaybe<StringFilter>;
  evaluation_criteria_url?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Curriculum_UnitsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Curriculum_UnitsFilter>>;
  overview?: InputMaybe<StringFilter>;
  overview_url?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Curriculum_UnitsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  evaluation_criteria?: InputMaybe<Scalars['String']['input']>;
  evaluation_criteria_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  overview_url?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Curriculum_UnitsInsertResponse = {
  __typename?: 'curriculum_unitsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Curriculum_Units>;
};

export type Curriculum_UnitsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  evaluation_criteria?: InputMaybe<OrderByDirection>;
  evaluation_criteria_url?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  overview?: InputMaybe<OrderByDirection>;
  overview_url?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Curriculum_UnitsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  evaluation_criteria?: InputMaybe<Scalars['String']['input']>;
  evaluation_criteria_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  overview_url?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Curriculum_UnitsUpdateResponse = {
  __typename?: 'curriculum_unitsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Curriculum_Units>;
};

export type Learning_Materials = Node & {
  __typename?: 'learning_materials';
  content_id: Scalars['BigInt']['output'];
  content_type: Scalars['String']['output'];
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  key: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  owner_id: Scalars['UUID']['output'];
  source_url: Scalars['String']['output'];
  status: Scalars['String']['output'];
  treatment_menusCollection?: Maybe<Treatment_MenusConnection>;
  updated_at: Scalars['Datetime']['output'];
  users: Users;
};


export type Learning_MaterialsTreatment_MenusCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Treatment_MenusFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Treatment_MenusOrderBy>>;
};

export type Learning_MaterialsConnection = {
  __typename?: 'learning_materialsConnection';
  edges: Array<Learning_MaterialsEdge>;
  pageInfo: PageInfo;
};

export type Learning_MaterialsDeleteResponse = {
  __typename?: 'learning_materialsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Learning_Materials>;
};

export type Learning_MaterialsEdge = {
  __typename?: 'learning_materialsEdge';
  cursor: Scalars['String']['output'];
  node: Learning_Materials;
};

export type Learning_MaterialsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Learning_MaterialsFilter>>;
  content_id?: InputMaybe<BigIntFilter>;
  content_type?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  key?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Learning_MaterialsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Learning_MaterialsFilter>>;
  owner_id?: InputMaybe<UuidFilter>;
  source_url?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Learning_MaterialsInsertInput = {
  content_id?: InputMaybe<Scalars['BigInt']['input']>;
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  key?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['UUID']['input']>;
  source_url?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Learning_MaterialsInsertResponse = {
  __typename?: 'learning_materialsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Learning_Materials>;
};

export type Learning_MaterialsOrderBy = {
  content_id?: InputMaybe<OrderByDirection>;
  content_type?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  owner_id?: InputMaybe<OrderByDirection>;
  source_url?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Learning_MaterialsUpdateInput = {
  content_id?: InputMaybe<Scalars['BigInt']['input']>;
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  key?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['UUID']['input']>;
  source_url?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Learning_MaterialsUpdateResponse = {
  __typename?: 'learning_materialsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Learning_Materials>;
};

export type Midterm_Health_Purposes = Node & {
  __typename?: 'midterm_health_purposes';
  client_id: Scalars['BigInt']['output'];
  clients: Clients;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  key: Scalars['UUID']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  months: Scalars['Int']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  purpose: Scalars['String']['output'];
  setting_date: Scalars['Datetime']['output'];
  start_date: Scalars['Datetime']['output'];
  updated_at: Scalars['Datetime']['output'];
};

export type Midterm_Health_PurposesConnection = {
  __typename?: 'midterm_health_purposesConnection';
  edges: Array<Midterm_Health_PurposesEdge>;
  pageInfo: PageInfo;
};

export type Midterm_Health_PurposesDeleteResponse = {
  __typename?: 'midterm_health_purposesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Midterm_Health_Purposes>;
};

export type Midterm_Health_PurposesEdge = {
  __typename?: 'midterm_health_purposesEdge';
  cursor: Scalars['String']['output'];
  node: Midterm_Health_Purposes;
};

export type Midterm_Health_PurposesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Midterm_Health_PurposesFilter>>;
  client_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  key?: InputMaybe<UuidFilter>;
  memo?: InputMaybe<StringFilter>;
  months?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Midterm_Health_PurposesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Midterm_Health_PurposesFilter>>;
  purpose?: InputMaybe<StringFilter>;
  setting_date?: InputMaybe<DatetimeFilter>;
  start_date?: InputMaybe<DatetimeFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Midterm_Health_PurposesInsertInput = {
  client_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  key?: InputMaybe<Scalars['UUID']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  months?: InputMaybe<Scalars['Int']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  setting_date?: InputMaybe<Scalars['Datetime']['input']>;
  start_date?: InputMaybe<Scalars['Datetime']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Midterm_Health_PurposesInsertResponse = {
  __typename?: 'midterm_health_purposesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Midterm_Health_Purposes>;
};

export type Midterm_Health_PurposesOrderBy = {
  client_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  memo?: InputMaybe<OrderByDirection>;
  months?: InputMaybe<OrderByDirection>;
  purpose?: InputMaybe<OrderByDirection>;
  setting_date?: InputMaybe<OrderByDirection>;
  start_date?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Midterm_Health_PurposesUpdateInput = {
  client_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  key?: InputMaybe<Scalars['UUID']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  months?: InputMaybe<Scalars['Int']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  setting_date?: InputMaybe<Scalars['Datetime']['input']>;
  start_date?: InputMaybe<Scalars['Datetime']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Midterm_Health_PurposesUpdateResponse = {
  __typename?: 'midterm_health_purposesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Midterm_Health_Purposes>;
};

export type Pt_Session_Items = Node & {
  __typename?: 'pt_session_items';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pt_session_id: Scalars['BigInt']['output'];
  pt_sessions: Pt_Sessions;
  task_id: Scalars['BigInt']['output'];
  task_type: Scalars['String']['output'];
  trainer_advice?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['Datetime']['output'];
};

export type Pt_Session_ItemsConnection = {
  __typename?: 'pt_session_itemsConnection';
  edges: Array<Pt_Session_ItemsEdge>;
  pageInfo: PageInfo;
};

export type Pt_Session_ItemsDeleteResponse = {
  __typename?: 'pt_session_itemsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pt_Session_Items>;
};

export type Pt_Session_ItemsEdge = {
  __typename?: 'pt_session_itemsEdge';
  cursor: Scalars['String']['output'];
  node: Pt_Session_Items;
};

export type Pt_Session_ItemsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Pt_Session_ItemsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  memo?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Pt_Session_ItemsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Pt_Session_ItemsFilter>>;
  pt_session_id?: InputMaybe<BigIntFilter>;
  task_id?: InputMaybe<BigIntFilter>;
  task_type?: InputMaybe<StringFilter>;
  trainer_advice?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Pt_Session_ItemsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  pt_session_id?: InputMaybe<Scalars['BigInt']['input']>;
  task_id?: InputMaybe<Scalars['BigInt']['input']>;
  task_type?: InputMaybe<Scalars['String']['input']>;
  trainer_advice?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Pt_Session_ItemsInsertResponse = {
  __typename?: 'pt_session_itemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pt_Session_Items>;
};

export type Pt_Session_ItemsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  memo?: InputMaybe<OrderByDirection>;
  pt_session_id?: InputMaybe<OrderByDirection>;
  task_id?: InputMaybe<OrderByDirection>;
  task_type?: InputMaybe<OrderByDirection>;
  trainer_advice?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Pt_Session_ItemsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  pt_session_id?: InputMaybe<Scalars['BigInt']['input']>;
  task_id?: InputMaybe<Scalars['BigInt']['input']>;
  task_type?: InputMaybe<Scalars['String']['input']>;
  trainer_advice?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Pt_Session_ItemsUpdateResponse = {
  __typename?: 'pt_session_itemsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pt_Session_Items>;
};

export type Pt_Sessions = Node & {
  __typename?: 'pt_sessions';
  archive_url?: Maybe<Scalars['String']['output']>;
  assignmentsCollection?: Maybe<AssignmentsConnection>;
  chat_contents?: Maybe<Scalars['String']['output']>;
  client_id: Scalars['BigInt']['output'];
  clients: Clients;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  key: Scalars['UUID']['output'];
  kind: Scalars['String']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  performed_at: Scalars['Datetime']['output'];
  pt_session_itemsCollection?: Maybe<Pt_Session_ItemsConnection>;
  theme: Scalars['String']['output'];
  trainer_comment?: Maybe<Scalars['String']['output']>;
  trainer_id: Scalars['BigInt']['output'];
  trainers: Trainers;
  updated_at: Scalars['Datetime']['output'];
};


export type Pt_SessionsAssignmentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssignmentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssignmentsOrderBy>>;
};


export type Pt_SessionsPt_Session_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pt_Session_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pt_Session_ItemsOrderBy>>;
};

export type Pt_SessionsConnection = {
  __typename?: 'pt_sessionsConnection';
  edges: Array<Pt_SessionsEdge>;
  pageInfo: PageInfo;
};

export type Pt_SessionsDeleteResponse = {
  __typename?: 'pt_sessionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pt_Sessions>;
};

export type Pt_SessionsEdge = {
  __typename?: 'pt_sessionsEdge';
  cursor: Scalars['String']['output'];
  node: Pt_Sessions;
};

export type Pt_SessionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Pt_SessionsFilter>>;
  archive_url?: InputMaybe<StringFilter>;
  chat_contents?: InputMaybe<StringFilter>;
  client_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  key?: InputMaybe<UuidFilter>;
  kind?: InputMaybe<StringFilter>;
  memo?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Pt_SessionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Pt_SessionsFilter>>;
  performed_at?: InputMaybe<DatetimeFilter>;
  theme?: InputMaybe<StringFilter>;
  trainer_comment?: InputMaybe<StringFilter>;
  trainer_id?: InputMaybe<BigIntFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Pt_SessionsInsertInput = {
  archive_url?: InputMaybe<Scalars['String']['input']>;
  chat_contents?: InputMaybe<Scalars['String']['input']>;
  client_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  key?: InputMaybe<Scalars['UUID']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  performed_at?: InputMaybe<Scalars['Datetime']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  trainer_comment?: InputMaybe<Scalars['String']['input']>;
  trainer_id?: InputMaybe<Scalars['BigInt']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Pt_SessionsInsertResponse = {
  __typename?: 'pt_sessionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pt_Sessions>;
};

export type Pt_SessionsOrderBy = {
  archive_url?: InputMaybe<OrderByDirection>;
  chat_contents?: InputMaybe<OrderByDirection>;
  client_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  kind?: InputMaybe<OrderByDirection>;
  memo?: InputMaybe<OrderByDirection>;
  performed_at?: InputMaybe<OrderByDirection>;
  theme?: InputMaybe<OrderByDirection>;
  trainer_comment?: InputMaybe<OrderByDirection>;
  trainer_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Pt_SessionsUpdateInput = {
  archive_url?: InputMaybe<Scalars['String']['input']>;
  chat_contents?: InputMaybe<Scalars['String']['input']>;
  client_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  key?: InputMaybe<Scalars['UUID']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  performed_at?: InputMaybe<Scalars['Datetime']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  trainer_comment?: InputMaybe<Scalars['String']['input']>;
  trainer_id?: InputMaybe<Scalars['BigInt']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Pt_SessionsUpdateResponse = {
  __typename?: 'pt_sessionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pt_Sessions>;
};

export type Required_Functions = Node & {
  __typename?: 'required_functions';
  created_at: Scalars['Datetime']['output'];
  curriculum_unit_id: Scalars['BigInt']['output'];
  curriculum_units: Curriculum_Units;
  evaluation_criteria: Scalars['String']['output'];
  evaluation_criteria_url: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  overview: Scalars['String']['output'];
  overview_url: Scalars['String']['output'];
  treatment_menusCollection?: Maybe<Treatment_MenusConnection>;
  updated_at: Scalars['Datetime']['output'];
};


export type Required_FunctionsTreatment_MenusCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Treatment_MenusFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Treatment_MenusOrderBy>>;
};

export type Required_FunctionsConnection = {
  __typename?: 'required_functionsConnection';
  edges: Array<Required_FunctionsEdge>;
  pageInfo: PageInfo;
};

export type Required_FunctionsDeleteResponse = {
  __typename?: 'required_functionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Required_Functions>;
};

export type Required_FunctionsEdge = {
  __typename?: 'required_functionsEdge';
  cursor: Scalars['String']['output'];
  node: Required_Functions;
};

export type Required_FunctionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Required_FunctionsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  curriculum_unit_id?: InputMaybe<BigIntFilter>;
  evaluation_criteria?: InputMaybe<StringFilter>;
  evaluation_criteria_url?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Required_FunctionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Required_FunctionsFilter>>;
  overview?: InputMaybe<StringFilter>;
  overview_url?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Required_FunctionsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  curriculum_unit_id?: InputMaybe<Scalars['BigInt']['input']>;
  evaluation_criteria?: InputMaybe<Scalars['String']['input']>;
  evaluation_criteria_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  overview_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Required_FunctionsInsertResponse = {
  __typename?: 'required_functionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Required_Functions>;
};

export type Required_FunctionsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  curriculum_unit_id?: InputMaybe<OrderByDirection>;
  evaluation_criteria?: InputMaybe<OrderByDirection>;
  evaluation_criteria_url?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  overview?: InputMaybe<OrderByDirection>;
  overview_url?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Required_FunctionsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  curriculum_unit_id?: InputMaybe<Scalars['BigInt']['input']>;
  evaluation_criteria?: InputMaybe<Scalars['String']['input']>;
  evaluation_criteria_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  overview_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Required_FunctionsUpdateResponse = {
  __typename?: 'required_functionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Required_Functions>;
};

export type Trainer_Profiles = Node & {
  __typename?: 'trainer_profiles';
  certifications: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  motivation_statement: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  signature_muscle: Scalars['String']['output'];
  specialization: Scalars['String']['output'];
  trainer_id: Scalars['BigInt']['output'];
  trainers: Trainers;
};

export type Trainer_ProfilesConnection = {
  __typename?: 'trainer_profilesConnection';
  edges: Array<Trainer_ProfilesEdge>;
  pageInfo: PageInfo;
};

export type Trainer_ProfilesDeleteResponse = {
  __typename?: 'trainer_profilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Trainer_Profiles>;
};

export type Trainer_ProfilesEdge = {
  __typename?: 'trainer_profilesEdge';
  cursor: Scalars['String']['output'];
  node: Trainer_Profiles;
};

export type Trainer_ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Trainer_ProfilesFilter>>;
  certifications?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  motivation_statement?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Trainer_ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Trainer_ProfilesFilter>>;
  signature_muscle?: InputMaybe<StringFilter>;
  specialization?: InputMaybe<StringFilter>;
  trainer_id?: InputMaybe<BigIntFilter>;
};

export type Trainer_ProfilesInsertInput = {
  certifications?: InputMaybe<Scalars['String']['input']>;
  motivation_statement?: InputMaybe<Scalars['String']['input']>;
  signature_muscle?: InputMaybe<Scalars['String']['input']>;
  specialization?: InputMaybe<Scalars['String']['input']>;
  trainer_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Trainer_ProfilesInsertResponse = {
  __typename?: 'trainer_profilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Trainer_Profiles>;
};

export type Trainer_ProfilesOrderBy = {
  certifications?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  motivation_statement?: InputMaybe<OrderByDirection>;
  signature_muscle?: InputMaybe<OrderByDirection>;
  specialization?: InputMaybe<OrderByDirection>;
  trainer_id?: InputMaybe<OrderByDirection>;
};

export type Trainer_ProfilesUpdateInput = {
  certifications?: InputMaybe<Scalars['String']['input']>;
  motivation_statement?: InputMaybe<Scalars['String']['input']>;
  signature_muscle?: InputMaybe<Scalars['String']['input']>;
  specialization?: InputMaybe<Scalars['String']['input']>;
  trainer_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Trainer_ProfilesUpdateResponse = {
  __typename?: 'trainer_profilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Trainer_Profiles>;
};

export type Trainers = Node & {
  __typename?: 'trainers';
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pt_sessionsCollection?: Maybe<Pt_SessionsConnection>;
  trainer_profiles?: Maybe<Trainer_Profiles>;
  user_id: Scalars['BigInt']['output'];
  users: Users;
};


export type TrainersPt_SessionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pt_SessionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pt_SessionsOrderBy>>;
};

export type TrainersConnection = {
  __typename?: 'trainersConnection';
  edges: Array<TrainersEdge>;
  pageInfo: PageInfo;
};

export type TrainersDeleteResponse = {
  __typename?: 'trainersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Trainers>;
};

export type TrainersEdge = {
  __typename?: 'trainersEdge';
  cursor: Scalars['String']['output'];
  node: Trainers;
};

export type TrainersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TrainersFilter>>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TrainersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TrainersFilter>>;
  user_id?: InputMaybe<BigIntFilter>;
};

export type TrainersInsertInput = {
  user_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type TrainersInsertResponse = {
  __typename?: 'trainersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Trainers>;
};

export type TrainersOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type TrainersUpdateInput = {
  user_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type TrainersUpdateResponse = {
  __typename?: 'trainersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Trainers>;
};

export type Treatment_Menus = Node & {
  __typename?: 'treatment_menus';
  common_errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  learning_material_id: Scalars['BigInt']['output'];
  learning_materials: Learning_Materials;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  required_function_id: Scalars['BigInt']['output'];
  required_functions: Required_Functions;
  target_muscles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tips: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
};

export type Treatment_MenusConnection = {
  __typename?: 'treatment_menusConnection';
  edges: Array<Treatment_MenusEdge>;
  pageInfo: PageInfo;
};

export type Treatment_MenusDeleteResponse = {
  __typename?: 'treatment_menusDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Treatment_Menus>;
};

export type Treatment_MenusEdge = {
  __typename?: 'treatment_menusEdge';
  cursor: Scalars['String']['output'];
  node: Treatment_Menus;
};

export type Treatment_MenusFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Treatment_MenusFilter>>;
  common_errors?: InputMaybe<StringListFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  learning_material_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Treatment_MenusFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Treatment_MenusFilter>>;
  required_function_id?: InputMaybe<BigIntFilter>;
  target_muscles?: InputMaybe<StringListFilter>;
  tips?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Treatment_MenusInsertInput = {
  common_errors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  learning_material_id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  required_function_id?: InputMaybe<Scalars['BigInt']['input']>;
  target_muscles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tips?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Treatment_MenusInsertResponse = {
  __typename?: 'treatment_menusInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Treatment_Menus>;
};

export type Treatment_MenusOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  learning_material_id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  required_function_id?: InputMaybe<OrderByDirection>;
  tips?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Treatment_MenusUpdateInput = {
  common_errors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  learning_material_id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  required_function_id?: InputMaybe<Scalars['BigInt']['input']>;
  target_muscles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tips?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Treatment_MenusUpdateResponse = {
  __typename?: 'treatment_menusUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Treatment_Menus>;
};

export type User_Credentials = Node & {
  __typename?: 'user_credentials';
  created_at: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  password_digest: Scalars['String']['output'];
  reset_at: Scalars['Boolean']['output'];
  updated_at: Scalars['Datetime']['output'];
  user_id: Scalars['UUID']['output'];
  users: Users;
};

export type User_CredentialsConnection = {
  __typename?: 'user_credentialsConnection';
  edges: Array<User_CredentialsEdge>;
  pageInfo: PageInfo;
};

export type User_CredentialsDeleteResponse = {
  __typename?: 'user_credentialsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Credentials>;
};

export type User_CredentialsEdge = {
  __typename?: 'user_credentialsEdge';
  cursor: Scalars['String']['output'];
  node: User_Credentials;
};

export type User_CredentialsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_CredentialsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_CredentialsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_CredentialsFilter>>;
  password_digest?: InputMaybe<StringFilter>;
  reset_at?: InputMaybe<BooleanFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type User_CredentialsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password_digest?: InputMaybe<Scalars['String']['input']>;
  reset_at?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type User_CredentialsInsertResponse = {
  __typename?: 'user_credentialsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Credentials>;
};

export type User_CredentialsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  password_digest?: InputMaybe<OrderByDirection>;
  reset_at?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type User_CredentialsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password_digest?: InputMaybe<Scalars['String']['input']>;
  reset_at?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type User_CredentialsUpdateResponse = {
  __typename?: 'user_credentialsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Credentials>;
};

export type Users = Node & {
  __typename?: 'users';
  active_flag: Scalars['Boolean']['output'];
  birth_date: Scalars['Date']['output'];
  clients?: Maybe<Clients>;
  created_at: Scalars['Datetime']['output'];
  deleted_at?: Maybe<Scalars['Datetime']['output']>;
  first_name: Scalars['String']['output'];
  first_name_kana: Scalars['String']['output'];
  gender: Scalars['Int']['output'];
  id: Scalars['BigInt']['output'];
  key: Scalars['UUID']['output'];
  kind: Scalars['Int']['output'];
  last_name: Scalars['String']['output'];
  last_name_kana: Scalars['String']['output'];
  learning_materialsCollection?: Maybe<Learning_MaterialsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  trainers?: Maybe<Trainers>;
  updated_at: Scalars['Datetime']['output'];
  user_credentials?: Maybe<User_Credentials>;
};


export type UsersLearning_MaterialsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Learning_MaterialsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Learning_MaterialsOrderBy>>;
};

export type UsersConnection = {
  __typename?: 'usersConnection';
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
};

export type UsersDeleteResponse = {
  __typename?: 'usersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersEdge = {
  __typename?: 'usersEdge';
  cursor: Scalars['String']['output'];
  node: Users;
};

export type UsersFilter = {
  active_flag?: InputMaybe<BooleanFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UsersFilter>>;
  birth_date?: InputMaybe<DateFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  first_name?: InputMaybe<StringFilter>;
  first_name_kana?: InputMaybe<StringFilter>;
  gender?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  key?: InputMaybe<UuidFilter>;
  kind?: InputMaybe<IntFilter>;
  last_name?: InputMaybe<StringFilter>;
  last_name_kana?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UsersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UsersFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type UsersInsertInput = {
  active_flag?: InputMaybe<Scalars['Boolean']['input']>;
  birth_date?: InputMaybe<Scalars['Date']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['UUID']['input']>;
  kind?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type UsersInsertResponse = {
  __typename?: 'usersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersOrderBy = {
  active_flag?: InputMaybe<OrderByDirection>;
  birth_date?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  first_name_kana?: InputMaybe<OrderByDirection>;
  gender?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  kind?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
  last_name_kana?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type UsersUpdateInput = {
  active_flag?: InputMaybe<Scalars['Boolean']['input']>;
  birth_date?: InputMaybe<Scalars['Date']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  first_name_kana?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['UUID']['input']>;
  kind?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_name_kana?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type UsersUpdateResponse = {
  __typename?: 'usersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', usersCollection?: { __typename?: 'usersConnection', edges: Array<{ __typename?: 'usersEdge', node: { __typename?: 'users', id: any, first_name: string, last_name: string, created_at: any } }> } | null };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
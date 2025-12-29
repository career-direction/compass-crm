/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
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
};

export type Assignment = {
  __typename?: 'Assignment';
  createdAt: Scalars['String']['output'];
  dueDate: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  ptSessionId: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
  taskType: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type BodyCondition = {
  __typename?: 'BodyCondition';
  armCircumference?: Maybe<Scalars['Float']['output']>;
  avgRespirationRate?: Maybe<Scalars['Float']['output']>;
  avgSleepTime?: Maybe<Scalars['Float']['output']>;
  bmi?: Maybe<Scalars['Float']['output']>;
  bmr?: Maybe<Scalars['Float']['output']>;
  bodyFat?: Maybe<Scalars['Float']['output']>;
  bust?: Maybe<Scalars['Float']['output']>;
  buttockHeight?: Maybe<Scalars['Float']['output']>;
  calfCircumference?: Maybe<Scalars['Float']['output']>;
  clientId: Scalars['Int']['output'];
  ffd?: Maybe<Scalars['Float']['output']>;
  hip?: Maybe<Scalars['Float']['output']>;
  hwd?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  measuredAt: Scalars['String']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  muscleMass?: Maybe<Scalars['Float']['output']>;
  parasympathetic?: Maybe<Scalars['Float']['output']>;
  skeletalMuscleRate?: Maybe<Scalars['Float']['output']>;
  sympathetic?: Maybe<Scalars['Float']['output']>;
  thighCircumference?: Maybe<Scalars['Float']['output']>;
  underbust?: Maybe<Scalars['Float']['output']>;
  waist?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Client = {
  __typename?: 'Client';
  id: Scalars['Int']['output'];
  profile?: Maybe<ClientProfile>;
  sessions: Array<PtSession>;
  user: User;
  userId: Scalars['String']['output'];
};

export type ClientProfile = {
  __typename?: 'ClientProfile';
  allowSnsPost: Scalars['String']['output'];
  clientId: Scalars['String']['output'];
  exerciseHistory: Scalars['String']['output'];
  hobby: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  occupation: Scalars['String']['output'];
};

export type CreateAssignmentInput = {
  dueDate: Scalars['String']['input'];
  ptSessionId: Scalars['Int']['input'];
  taskId: Scalars['Int']['input'];
  taskType: Scalars['String']['input'];
};

export type CreateBodyConditionInput = {
  armCircumference?: InputMaybe<Scalars['Float']['input']>;
  avgRespirationRate?: InputMaybe<Scalars['Float']['input']>;
  avgSleepTime?: InputMaybe<Scalars['Float']['input']>;
  bmi?: InputMaybe<Scalars['Float']['input']>;
  bmr?: InputMaybe<Scalars['Float']['input']>;
  bodyFat?: InputMaybe<Scalars['Float']['input']>;
  bust?: InputMaybe<Scalars['Float']['input']>;
  buttockHeight?: InputMaybe<Scalars['Float']['input']>;
  calfCircumference?: InputMaybe<Scalars['Float']['input']>;
  clientId: Scalars['Int']['input'];
  ffd?: InputMaybe<Scalars['Float']['input']>;
  hip?: InputMaybe<Scalars['Float']['input']>;
  hwd?: InputMaybe<Scalars['Float']['input']>;
  measuredAt: Scalars['String']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  muscleMass?: InputMaybe<Scalars['Float']['input']>;
  parasympathetic?: InputMaybe<Scalars['Float']['input']>;
  skeletalMuscleRate?: InputMaybe<Scalars['Float']['input']>;
  sympathetic?: InputMaybe<Scalars['Float']['input']>;
  thighCircumference?: InputMaybe<Scalars['Float']['input']>;
  underbust?: InputMaybe<Scalars['Float']['input']>;
  waist?: InputMaybe<Scalars['Float']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateClientInput = {
  userId: Scalars['String']['input'];
};

export type CreateCurriculumUnitInput = {
  evaluationCriteria: Scalars['String']['input'];
  evaluationCriteriaUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  overview: Scalars['String']['input'];
  overviewUrl: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateLearningMaterialInput = {
  contentId: Scalars['Int']['input'];
  contentType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  sourceUrl: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type CreateMidtermHealthPurposeInput = {
  clientId: Scalars['Int']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  months: Scalars['Int']['input'];
  purpose: Scalars['String']['input'];
  settingDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type CreateRequiredFunctionInput = {
  curriculumUnitId: Scalars['Int']['input'];
  evaluationCriteria: Scalars['String']['input'];
  evaluationCriteriaUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  overview: Scalars['String']['input'];
  overviewUrl: Scalars['String']['input'];
};

export type CreateSessionInput = {
  clientId: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt: Scalars['String']['input'];
  trainerId: Scalars['String']['input'];
};

export type CreateTrainerInput = {
  userId: Scalars['String']['input'];
};

export type CreateTrainingMenuInput = {
  commonErrors: Array<Scalars['String']['input']>;
  learningMaterialId: Scalars['Int']['input'];
  level: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  requiredFunctionId: Scalars['Int']['input'];
  targetMuscles: Array<Scalars['String']['input']>;
  tips: Scalars['String']['input'];
};

export type CreateTreatmentMenuInput = {
  commonErrors: Array<Scalars['String']['input']>;
  learningMaterialId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  requiredFunctionId: Scalars['Int']['input'];
  targetMuscles: Array<Scalars['String']['input']>;
  tips: Scalars['String']['input'];
};

export type CreateUserInput = {
  birth_date: Scalars['String']['input'];
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  first_name_kana: Scalars['String']['input'];
  gender: Scalars['Int']['input'];
  kind: Scalars['Int']['input'];
  last_name: Scalars['String']['input'];
  last_name_kana: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CurriculumUnit = {
  __typename?: 'CurriculumUnit';
  createdAt: Scalars['String']['output'];
  evaluationCriteria: Scalars['String']['output'];
  evaluationCriteriaUrl: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  overviewUrl: Scalars['String']['output'];
  requiredFunctions: Array<RequiredFunction>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
  PreferNotToSay = 'PREFER_NOT_TO_SAY'
}

export type LearningMaterial = {
  __typename?: 'LearningMaterial';
  contentId: Scalars['Int']['output'];
  contentType: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['String']['output'];
  sourceUrl: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type MidtermHealthPurpose = {
  __typename?: 'MidtermHealthPurpose';
  clientId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  months: Scalars['Int']['output'];
  purpose: Scalars['String']['output'];
  settingDate: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAssignment: Assignment;
  createBodyCondition: BodyCondition;
  createClient: Client;
  createCurriculumUnit: CurriculumUnit;
  createLearningMaterial: LearningMaterial;
  createMidtermHealthPurpose: MidtermHealthPurpose;
  createRequiredFunction: RequiredFunction;
  createSession: PtSession;
  createTrainer: Trainer;
  createTrainingMenu: TrainingMenu;
  createTreatmentMenu: TreatmentMenu;
  createUser: User;
};


export type MutationCreateAssignmentArgs = {
  input: CreateAssignmentInput;
};


export type MutationCreateBodyConditionArgs = {
  input: CreateBodyConditionInput;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationCreateCurriculumUnitArgs = {
  input: CreateCurriculumUnitInput;
};


export type MutationCreateLearningMaterialArgs = {
  input: CreateLearningMaterialInput;
};


export type MutationCreateMidtermHealthPurposeArgs = {
  input: CreateMidtermHealthPurposeInput;
};


export type MutationCreateRequiredFunctionArgs = {
  input: CreateRequiredFunctionInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateTrainerArgs = {
  input: CreateTrainerInput;
};


export type MutationCreateTrainingMenuArgs = {
  input: CreateTrainingMenuInput;
};


export type MutationCreateTreatmentMenuArgs = {
  input: CreateTreatmentMenuInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type PtSession = {
  __typename?: 'PTSession';
  client: Client;
  clientId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  items: Array<PtSessionItem>;
  notes?: Maybe<Scalars['String']['output']>;
  scheduledAt: Scalars['String']['output'];
  status: SessionStatus;
  trainer: Trainer;
  trainerId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PtSessionItem = {
  __typename?: 'PTSessionItem';
  createdAt: Scalars['String']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  exerciseName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  reps?: Maybe<Scalars['Int']['output']>;
  sessionId: Scalars['String']['output'];
  sets?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  assignments: Array<Assignment>;
  bodyConditions: Array<BodyCondition>;
  clients: Array<Client>;
  curriculumUnits: Array<CurriculumUnit>;
  hello?: Maybe<Scalars['String']['output']>;
  learningMaterials: Array<LearningMaterial>;
  midtermHealthPurposes: Array<MidtermHealthPurpose>;
  requiredFunctions: Array<RequiredFunction>;
  sessions: Array<PtSession>;
  trainers: Array<Trainer>;
  trainingMenus: Array<TrainingMenu>;
  treatmentMenus: Array<TreatmentMenu>;
  users: Array<User>;
};


export type QueryAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sessionId: Scalars['Int']['input'];
};


export type QueryBodyConditionsArgs = {
  clientId: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClientsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurriculumUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLearningMaterialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMidtermHealthPurposesArgs = {
  clientId: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRequiredFunctionsArgs = {
  curriculumUnitId: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySessionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainingMenusArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  requiredFunctionId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTreatmentMenusArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  requiredFunctionId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type RequiredFunction = {
  __typename?: 'RequiredFunction';
  createdAt: Scalars['String']['output'];
  curriculumUnitId: Scalars['Int']['output'];
  evaluationCriteria: Scalars['String']['output'];
  evaluationCriteriaUrl: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  overviewUrl: Scalars['String']['output'];
  trainingMenus: Array<TrainingMenu>;
  treatmentMenus: Array<TreatmentMenu>;
  updatedAt: Scalars['String']['output'];
};

export enum SessionStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  Scheduled = 'SCHEDULED'
}

export type Trainer = {
  __typename?: 'Trainer';
  id: Scalars['Int']['output'];
  profile?: Maybe<TrainerProfile>;
  sessions: Array<PtSession>;
  user: User;
  userId: Scalars['String']['output'];
};

export type TrainerProfile = {
  __typename?: 'TrainerProfile';
  certifications: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  motivationStatement: Scalars['String']['output'];
  signatureMuscle: Scalars['String']['output'];
  specialization: Scalars['String']['output'];
  trainerId: Scalars['String']['output'];
};

export type TrainingMenu = {
  __typename?: 'TrainingMenu';
  commonErrors: Array<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  learningMaterialId: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  requiredFunctionId: Scalars['Int']['output'];
  targetMuscles: Array<Scalars['String']['output']>;
  tips: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type TreatmentMenu = {
  __typename?: 'TreatmentMenu';
  commonErrors: Array<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  learningMaterialId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  requiredFunctionId: Scalars['Int']['output'];
  targetMuscles: Array<Scalars['String']['output']>;
  tips: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  active_flag: Scalars['Boolean']['output'];
  birth_date: Scalars['String']['output'];
  created_at: Scalars['String']['output'];
  credentials?: Maybe<UserCredentials>;
  first_name: Scalars['String']['output'];
  first_name_kana: Scalars['String']['output'];
  gender: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  kind: Scalars['Int']['output'];
  last_name: Scalars['String']['output'];
  last_name_kana: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type UserCredentials = {
  __typename?: 'UserCredentials';
  created_at: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  reset_at: Scalars['Boolean']['output'];
  updated_at: Scalars['String']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  Trainer = 'TRAINER'
}

export type CreateLearningMaterialMutationVariables = Exact<{
  input: CreateLearningMaterialInput;
}>;


export type CreateLearningMaterialMutation = { __typename?: 'Mutation', createLearningMaterial: { __typename?: 'LearningMaterial', id: number, ownerId: string, key: string, name: string, status: string, sourceUrl: string, contentType: string, contentId: number, createdAt: string, updatedAt: string } };

export type GetTrainersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrainersQuery = { __typename?: 'Query', trainers: Array<{ __typename?: 'Trainer', id: number, user: { __typename?: 'User', first_name: string, last_name: string } }> };


export const CreateLearningMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLearningMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLearningMaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLearningMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"contentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateLearningMaterialMutation, CreateLearningMaterialMutationVariables>;
export const GetTrainersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrainers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trainers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTrainersQuery, GetTrainersQueryVariables>;
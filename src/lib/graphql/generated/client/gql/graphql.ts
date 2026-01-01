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
  executions: Array<AssignmentExecution>;
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  ptSessionId: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
  taskType: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AssignmentExecution = {
  __typename?: 'AssignmentExecution';
  assignmentId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  executionDate: Scalars['String']['output'];
  id: Scalars['Int']['output'];
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
  assignments: Array<Assignment>;
  bodyConditions: Array<BodyCondition>;
  id: Scalars['Int']['output'];
  midtermHealthPurposes: Array<MidtermHealthPurpose>;
  profile?: Maybe<ClientProfile>;
  sessions: Array<PtSession>;
  user: User;
  userId: Scalars['Int']['output'];
};

export type ClientProfile = {
  __typename?: 'ClientProfile';
  allowSnsPost: Scalars['String']['output'];
  clientId: Scalars['Int']['output'];
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
  armCircumference?: InputMaybe<Scalars['String']['input']>;
  avgRespirationRate?: InputMaybe<Scalars['String']['input']>;
  avgSleepTime?: InputMaybe<Scalars['String']['input']>;
  bmi?: InputMaybe<Scalars['String']['input']>;
  bmr?: InputMaybe<Scalars['String']['input']>;
  bodyFat?: InputMaybe<Scalars['String']['input']>;
  bust?: InputMaybe<Scalars['String']['input']>;
  buttockHeight?: InputMaybe<Scalars['String']['input']>;
  calfCircumference?: InputMaybe<Scalars['String']['input']>;
  clientId: Scalars['Int']['input'];
  ffd?: InputMaybe<Scalars['String']['input']>;
  hip?: InputMaybe<Scalars['String']['input']>;
  hwd?: InputMaybe<Scalars['String']['input']>;
  measuredAt: Scalars['String']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  muscleMass?: InputMaybe<Scalars['String']['input']>;
  parasympathetic?: InputMaybe<Scalars['String']['input']>;
  skeletalMuscleRate?: InputMaybe<Scalars['String']['input']>;
  sympathetic?: InputMaybe<Scalars['String']['input']>;
  thighCircumference?: InputMaybe<Scalars['String']['input']>;
  underbust?: InputMaybe<Scalars['String']['input']>;
  waist?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

export type CreateClientInput = {
  userId: Scalars['Int']['input'];
};

export type CreateClientProfileInput = {
  allowSnsPost: Scalars['String']['input'];
  clientId: Scalars['Int']['input'];
  exerciseHistory: Scalars['String']['input'];
  hobby: Scalars['String']['input'];
  occupation: Scalars['String']['input'];
};

export type CreateClientWithProfileInput = {
  allowSnsPost: Scalars['String']['input'];
  birthDate: Scalars['String']['input'];
  exerciseHistory: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  firstNameKana: Scalars['String']['input'];
  gender: Scalars['Int']['input'];
  hobby: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  lastNameKana: Scalars['String']['input'];
  occupation: Scalars['String']['input'];
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
  ownerId: Scalars['String']['input'];
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

export type CreatePtSessionInput = {
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  chatContents?: InputMaybe<Scalars['String']['input']>;
  clientId: Scalars['Int']['input'];
  kind: Scalars['String']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  performedAt: Scalars['String']['input'];
  theme: Scalars['String']['input'];
  trainerComment?: InputMaybe<Scalars['String']['input']>;
  trainerId: Scalars['Int']['input'];
};

export type CreatePtSessionItemInput = {
  memo?: InputMaybe<Scalars['String']['input']>;
  ptSessionId: Scalars['Int']['input'];
  taskId: Scalars['Int']['input'];
  taskType: Scalars['String']['input'];
  trainerAdvice?: InputMaybe<Scalars['String']['input']>;
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
  clientId: Scalars['Int']['input'];
  kind: Scalars['String']['input'];
  performedAt: Scalars['String']['input'];
  theme: Scalars['String']['input'];
  trainerId: Scalars['Int']['input'];
};

export type CreateTrainerInput = {
  userId: Scalars['Int']['input'];
};

export type CreateTrainerProfileInput = {
  certifications: Scalars['String']['input'];
  motivationStatement: Scalars['String']['input'];
  signatureMuscle: Scalars['String']['input'];
  specialization: Scalars['String']['input'];
  trainerId: Scalars['Int']['input'];
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

export type CreateUserCredentialInput = {
  email: Scalars['String']['input'];
  passwordDigest: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateUserInput = {
  birthDate: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  firstNameKana: Scalars['String']['input'];
  gender: Scalars['Int']['input'];
  kind: Scalars['Int']['input'];
  lastName: Scalars['String']['input'];
  lastNameKana: Scalars['String']['input'];
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
  milestones: Array<MonthlyHealthMilestone>;
  months: Scalars['Int']['output'];
  purpose: Scalars['String']['output'];
  settingDate: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type MonthlyActionGoal = {
  __typename?: 'MonthlyActionGoal';
  achieved?: Maybe<Scalars['String']['output']>;
  actionType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  frequencyPerWeek: Scalars['Int']['output'];
  goal: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  monthlyHealthMilestoneId: Scalars['Int']['output'];
  targetMonth: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type MonthlyHealthMilestone = {
  __typename?: 'MonthlyHealthMilestone';
  achieved?: Maybe<Scalars['Boolean']['output']>;
  actionGoals: Array<MonthlyActionGoal>;
  asIs: Scalars['String']['output'];
  clientId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  midtermHealthGoalId: Scalars['Int']['output'];
  results?: Maybe<Scalars['String']['output']>;
  target: Scalars['String']['output'];
  toBe?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  yearMonth: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAssignment: Assignment;
  createBodyCondition: BodyCondition;
  createClient: Client;
  createClientProfile: ClientProfile;
  createClientWithProfile: Client;
  createCurriculumUnit: CurriculumUnit;
  createLearningMaterial: LearningMaterial;
  createMidtermHealthPurpose: MidtermHealthPurpose;
  createPTSession: PtSession;
  createPTSessionItem: PtSessionItem;
  createRequiredFunction: RequiredFunction;
  createSession: PtSession;
  createTrainer: Trainer;
  createTrainerProfile: TrainerProfile;
  createTrainingMenu: TrainingMenu;
  createTreatmentMenu: TreatmentMenu;
  createUser: User;
  createUserCredential: UserCredential;
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


export type MutationCreateClientProfileArgs = {
  input: CreateClientProfileInput;
};


export type MutationCreateClientWithProfileArgs = {
  input: CreateClientWithProfileInput;
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


export type MutationCreatePtSessionArgs = {
  input: CreatePtSessionInput;
};


export type MutationCreatePtSessionItemArgs = {
  input: CreatePtSessionItemInput;
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


export type MutationCreateTrainerProfileArgs = {
  input: CreateTrainerProfileInput;
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


export type MutationCreateUserCredentialArgs = {
  input: CreateUserCredentialInput;
};

export type PtSession = {
  __typename?: 'PTSession';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  assignments: Array<Assignment>;
  chatContents?: Maybe<Scalars['String']['output']>;
  client: Client;
  clientId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  items: Array<PtSessionItem>;
  key: Scalars['String']['output'];
  kind: Scalars['String']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  performedAt: Scalars['String']['output'];
  theme: Scalars['String']['output'];
  trainer: Trainer;
  trainerComment?: Maybe<Scalars['String']['output']>;
  trainerId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PtSessionItem = {
  __typename?: 'PTSessionItem';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  ptSessionId: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
  taskType: Scalars['String']['output'];
  trainerAdvice?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  assignments: Array<Assignment>;
  bodyConditions: Array<BodyCondition>;
  clientProfiles: Array<ClientProfile>;
  clientProfilesById?: Maybe<ClientProfile>;
  clients: Array<Client>;
  clientsById?: Maybe<Client>;
  curriculumUnits: Array<CurriculumUnit>;
  curriculumUnitsById?: Maybe<CurriculumUnit>;
  hello?: Maybe<Scalars['String']['output']>;
  learningMaterials: Array<LearningMaterial>;
  midtermHealthPurposes: Array<MidtermHealthPurpose>;
  ptSessionItems: Array<PtSessionItem>;
  ptSessionItemsById?: Maybe<PtSessionItem>;
  ptSessions: Array<PtSession>;
  ptSessionsById?: Maybe<PtSession>;
  requiredFunctions: Array<RequiredFunction>;
  sessions: Array<PtSession>;
  trainerProfiles: Array<TrainerProfile>;
  trainerProfilesById?: Maybe<TrainerProfile>;
  trainers: Array<Trainer>;
  trainersById?: Maybe<Trainer>;
  trainingMenus: Array<TrainingMenu>;
  trainingMenusById?: Maybe<TrainingMenu>;
  treatmentMenus: Array<TreatmentMenu>;
  treatmentMenusById?: Maybe<TreatmentMenu>;
  userCredentials: Array<UserCredential>;
  userCredentialsById?: Maybe<UserCredential>;
  users: Array<User>;
  usersById?: Maybe<User>;
};


export type QueryAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ptSessionId: Scalars['Int']['input'];
};


export type QueryBodyConditionsArgs = {
  clientId: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClientProfilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClientProfilesByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryClientsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClientsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCurriculumUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurriculumUnitsByIdArgs = {
  id: Scalars['Int']['input'];
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


export type QueryPtSessionItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPtSessionItemsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPtSessionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPtSessionsByIdArgs = {
  id: Scalars['Int']['input'];
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


export type QueryTrainerProfilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainerProfilesByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTrainersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainersByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTrainingMenusArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainingMenusByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTreatmentMenusArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTreatmentMenusByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserCredentialsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserCredentialsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersByIdArgs = {
  id: Scalars['Int']['input'];
};

export type RequiredFunction = {
  __typename?: 'RequiredFunction';
  createdAt: Scalars['String']['output'];
  curriculumUnit?: Maybe<CurriculumUnit>;
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

export type Trainer = {
  __typename?: 'Trainer';
  id: Scalars['Int']['output'];
  profile?: Maybe<TrainerProfile>;
  sessions: Array<PtSession>;
  user: User;
  userId: Scalars['Int']['output'];
};

export type TrainerProfile = {
  __typename?: 'TrainerProfile';
  certifications: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  motivationStatement: Scalars['String']['output'];
  signatureMuscles: Scalars['String']['output'];
  specializations: Scalars['String']['output'];
  trainerId: Scalars['Int']['output'];
};

export type TrainingMenu = {
  __typename?: 'TrainingMenu';
  commonErrors: Array<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  learningMaterial?: Maybe<LearningMaterial>;
  learningMaterialId: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  requiredFunction?: Maybe<RequiredFunction>;
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
  learningMaterial?: Maybe<LearningMaterial>;
  learningMaterialId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  requiredFunction?: Maybe<RequiredFunction>;
  requiredFunctionId: Scalars['Int']['output'];
  targetMuscles: Array<Scalars['String']['output']>;
  tips: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  activeFlag: Scalars['Boolean']['output'];
  birthDate: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  credentials?: Maybe<UserCredential>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  firstNameKana: Scalars['String']['output'];
  gender: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  kind: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  lastNameKana: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UserCredential = {
  __typename?: 'UserCredential';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  passwordDigest: Scalars['String']['output'];
  resetAt: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CreateClientMutationVariables = Exact<{
  input: CreateClientInput;
}>;


export type CreateClientMutation = { __typename?: 'Mutation', createClient: { __typename?: 'Client', id: number, userId: number, user: { __typename?: 'User', id: number, key: string, firstName: string, lastName: string } } };

export type CreateClientWithProfileMutationVariables = Exact<{
  input: CreateClientWithProfileInput;
}>;


export type CreateClientWithProfileMutation = { __typename?: 'Mutation', createClientWithProfile: { __typename?: 'Client', id: number, userId: number, user: { __typename?: 'User', id: number, key: string, firstName: string, lastName: string, firstNameKana: string, lastNameKana: string, birthDate: string, gender: number }, profile?: { __typename?: 'ClientProfile', id: number, occupation: string, hobby: string, allowSnsPost: string, exerciseHistory: string } | null } };

export type CreateLearningMaterialMutationVariables = Exact<{
  input: CreateLearningMaterialInput;
}>;


export type CreateLearningMaterialMutation = { __typename?: 'Mutation', createLearningMaterial: { __typename?: 'LearningMaterial', id: number, ownerId: string, key: string, name: string, status: string, sourceUrl: string, contentType: string, contentId: number, createdAt: string, updatedAt: string } };

export type GetClientsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetClientsQuery = { __typename?: 'Query', clients: Array<{ __typename?: 'Client', id: number, userId: number, user: { __typename?: 'User', id: number, key: string, firstName: string, lastName: string, firstNameKana: string, lastNameKana: string, birthDate: string, gender: number }, profile?: { __typename?: 'ClientProfile', id: number, occupation: string, hobby: string, allowSnsPost: string, exerciseHistory: string } | null }> };

export type GetLearningMaterialsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetLearningMaterialsQuery = { __typename?: 'Query', learningMaterials: Array<{ __typename?: 'LearningMaterial', id: number, ownerId: string, key: string, name: string, status: string, sourceUrl: string, contentType: string, contentId: number, createdAt: string, updatedAt: string }> };

export type GetTrainersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrainersQuery = { __typename?: 'Query', trainers: Array<{ __typename?: 'Trainer', id: number, user: { __typename?: 'User', firstName: string, lastName: string } }> };

export type GetUsersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, key: string, firstName: string, lastName: string, firstNameKana: string, lastNameKana: string }> };


export const CreateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<CreateClientMutation, CreateClientMutationVariables>;
export const CreateClientWithProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientWithProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientWithProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClientWithProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstNameKana"}},{"kind":"Field","name":{"kind":"Name","value":"lastNameKana"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"occupation"}},{"kind":"Field","name":{"kind":"Name","value":"hobby"}},{"kind":"Field","name":{"kind":"Name","value":"allowSnsPost"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseHistory"}}]}}]}}]}}]} as unknown as DocumentNode<CreateClientWithProfileMutation, CreateClientWithProfileMutationVariables>;
export const CreateLearningMaterialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLearningMaterial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLearningMaterialInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLearningMaterial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"contentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateLearningMaterialMutation, CreateLearningMaterialMutationVariables>;
export const GetClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstNameKana"}},{"kind":"Field","name":{"kind":"Name","value":"lastNameKana"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"occupation"}},{"kind":"Field","name":{"kind":"Name","value":"hobby"}},{"kind":"Field","name":{"kind":"Name","value":"allowSnsPost"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseHistory"}}]}}]}}]}}]} as unknown as DocumentNode<GetClientsQuery, GetClientsQueryVariables>;
export const GetLearningMaterialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLearningMaterials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"learningMaterials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"contentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetLearningMaterialsQuery, GetLearningMaterialsQueryVariables>;
export const GetTrainersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrainers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trainers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetTrainersQuery, GetTrainersQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstNameKana"}},{"kind":"Field","name":{"kind":"Name","value":"lastNameKana"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
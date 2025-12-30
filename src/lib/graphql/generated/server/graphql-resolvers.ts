<<<<<<< HEAD:src/lib/graphql/generated/server/graphql-resolvers.ts
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '@/lib/graphql/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  armCircumference: Maybe<Scalars['Float']['output']>;
  avgRespirationRate: Maybe<Scalars['Float']['output']>;
  avgSleepTime: Maybe<Scalars['Float']['output']>;
  bmi: Maybe<Scalars['Float']['output']>;
  bmr: Maybe<Scalars['Float']['output']>;
  bodyFat: Maybe<Scalars['Float']['output']>;
  bust: Maybe<Scalars['Float']['output']>;
  buttockHeight: Maybe<Scalars['Float']['output']>;
  calfCircumference: Maybe<Scalars['Float']['output']>;
  clientId: Scalars['Int']['output'];
  ffd: Maybe<Scalars['Float']['output']>;
  hip: Maybe<Scalars['Float']['output']>;
  hwd: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  measuredAt: Scalars['String']['output'];
  memo: Maybe<Scalars['String']['output']>;
  muscleMass: Maybe<Scalars['Float']['output']>;
  parasympathetic: Maybe<Scalars['Float']['output']>;
  skeletalMuscleRate: Maybe<Scalars['Float']['output']>;
  sympathetic: Maybe<Scalars['Float']['output']>;
  thighCircumference: Maybe<Scalars['Float']['output']>;
  underbust: Maybe<Scalars['Float']['output']>;
  waist: Maybe<Scalars['Float']['output']>;
  weight: Maybe<Scalars['Float']['output']>;
};

export type Client = {
  __typename?: 'Client';
  id: Scalars['Int']['output'];
  profile: Maybe<ClientProfile>;
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
  armCircumference: InputMaybe<Scalars['Float']['input']>;
  avgRespirationRate: InputMaybe<Scalars['Float']['input']>;
  avgSleepTime: InputMaybe<Scalars['Float']['input']>;
  bmi: InputMaybe<Scalars['Float']['input']>;
  bmr: InputMaybe<Scalars['Float']['input']>;
  bodyFat: InputMaybe<Scalars['Float']['input']>;
  bust: InputMaybe<Scalars['Float']['input']>;
  buttockHeight: InputMaybe<Scalars['Float']['input']>;
  calfCircumference: InputMaybe<Scalars['Float']['input']>;
  clientId: Scalars['Int']['input'];
  ffd: InputMaybe<Scalars['Float']['input']>;
  hip: InputMaybe<Scalars['Float']['input']>;
  hwd: InputMaybe<Scalars['Float']['input']>;
  measuredAt: Scalars['String']['input'];
  memo: InputMaybe<Scalars['String']['input']>;
  muscleMass: InputMaybe<Scalars['Float']['input']>;
  parasympathetic: InputMaybe<Scalars['Float']['input']>;
  skeletalMuscleRate: InputMaybe<Scalars['Float']['input']>;
  sympathetic: InputMaybe<Scalars['Float']['input']>;
  thighCircumference: InputMaybe<Scalars['Float']['input']>;
  underbust: InputMaybe<Scalars['Float']['input']>;
  waist: InputMaybe<Scalars['Float']['input']>;
  weight: InputMaybe<Scalars['Float']['input']>;
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
  memo: InputMaybe<Scalars['String']['input']>;
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
  notes: InputMaybe<Scalars['String']['input']>;
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
  memo: Maybe<Scalars['String']['output']>;
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
  notes: Maybe<Scalars['String']['output']>;
  scheduledAt: Scalars['String']['output'];
  status: SessionStatus;
  trainer: Trainer;
  trainerId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PtSessionItem = {
  __typename?: 'PTSessionItem';
  createdAt: Scalars['String']['output'];
  duration: Maybe<Scalars['Int']['output']>;
  exerciseName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  notes: Maybe<Scalars['String']['output']>;
  reps: Maybe<Scalars['Int']['output']>;
  sessionId: Scalars['String']['output'];
  sets: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
  weight: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  assignments: Array<Assignment>;
  bodyConditions: Array<BodyCondition>;
  clients: Array<Client>;
  curriculumUnits: Array<CurriculumUnit>;
  hello: Maybe<Scalars['String']['output']>;
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
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  sessionId: Scalars['Int']['input'];
};


export type QueryBodyConditionsArgs = {
  clientId: Scalars['Int']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClientsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurriculumUnitsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLearningMaterialsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  ownerId: InputMaybe<Scalars['String']['input']>;
};


export type QueryMidtermHealthPurposesArgs = {
  clientId: Scalars['Int']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRequiredFunctionsArgs = {
  curriculumUnitId: Scalars['Int']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySessionsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainersArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainingMenusArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  requiredFunctionId: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTreatmentMenusArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  requiredFunctionId: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
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
  profile: Maybe<TrainerProfile>;
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
  credentials: Maybe<UserCredentials>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Assignment: ResolverTypeWrapper<Assignment>;
  BodyCondition: ResolverTypeWrapper<BodyCondition>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Client: ResolverTypeWrapper<Client>;
  ClientProfile: ResolverTypeWrapper<ClientProfile>;
  CreateAssignmentInput: CreateAssignmentInput;
  CreateBodyConditionInput: CreateBodyConditionInput;
  CreateClientInput: CreateClientInput;
  CreateCurriculumUnitInput: CreateCurriculumUnitInput;
  CreateLearningMaterialInput: CreateLearningMaterialInput;
  CreateMidtermHealthPurposeInput: CreateMidtermHealthPurposeInput;
  CreateRequiredFunctionInput: CreateRequiredFunctionInput;
  CreateSessionInput: CreateSessionInput;
  CreateTrainerInput: CreateTrainerInput;
  CreateTrainingMenuInput: CreateTrainingMenuInput;
  CreateTreatmentMenuInput: CreateTreatmentMenuInput;
  CreateUserInput: CreateUserInput;
  CurriculumUnit: ResolverTypeWrapper<CurriculumUnit>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Gender: Gender;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LearningMaterial: ResolverTypeWrapper<LearningMaterial>;
  MidtermHealthPurpose: ResolverTypeWrapper<MidtermHealthPurpose>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  PTSession: ResolverTypeWrapper<PtSession>;
  PTSessionItem: ResolverTypeWrapper<PtSessionItem>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RequiredFunction: ResolverTypeWrapper<RequiredFunction>;
  SessionStatus: SessionStatus;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Trainer: ResolverTypeWrapper<Trainer>;
  TrainerProfile: ResolverTypeWrapper<TrainerProfile>;
  TrainingMenu: ResolverTypeWrapper<TrainingMenu>;
  TreatmentMenu: ResolverTypeWrapper<TreatmentMenu>;
  User: ResolverTypeWrapper<User>;
  UserCredentials: ResolverTypeWrapper<UserCredentials>;
  UserRole: UserRole;
=======
import { GraphQLResolveInfo } from "graphql";
import { Context } from "@/graphql/context";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

export type Assignment = {
	__typename?: "Assignment";
	createdAt: Scalars["String"]["output"];
	dueDate: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	key: Scalars["String"]["output"];
	ptSessionId: Scalars["Int"]["output"];
	taskId: Scalars["Int"]["output"];
	taskType: Scalars["String"]["output"];
	updatedAt: Scalars["String"]["output"];
};

export type BodyCondition = {
	__typename?: "BodyCondition";
	armCircumference: Maybe<Scalars["Float"]["output"]>;
	avgRespirationRate: Maybe<Scalars["Float"]["output"]>;
	avgSleepTime: Maybe<Scalars["Float"]["output"]>;
	bmi: Maybe<Scalars["Float"]["output"]>;
	bmr: Maybe<Scalars["Float"]["output"]>;
	bodyFat: Maybe<Scalars["Float"]["output"]>;
	bust: Maybe<Scalars["Float"]["output"]>;
	buttockHeight: Maybe<Scalars["Float"]["output"]>;
	calfCircumference: Maybe<Scalars["Float"]["output"]>;
	clientId: Scalars["Int"]["output"];
	ffd: Maybe<Scalars["Float"]["output"]>;
	hip: Maybe<Scalars["Float"]["output"]>;
	hwd: Maybe<Scalars["Float"]["output"]>;
	id: Scalars["Int"]["output"];
	measuredAt: Scalars["String"]["output"];
	memo: Maybe<Scalars["String"]["output"]>;
	muscleMass: Maybe<Scalars["Float"]["output"]>;
	parasympathetic: Maybe<Scalars["Float"]["output"]>;
	skeletalMuscleRate: Maybe<Scalars["Float"]["output"]>;
	sympathetic: Maybe<Scalars["Float"]["output"]>;
	thighCircumference: Maybe<Scalars["Float"]["output"]>;
	underbust: Maybe<Scalars["Float"]["output"]>;
	waist: Maybe<Scalars["Float"]["output"]>;
	weight: Maybe<Scalars["Float"]["output"]>;
};

export type Client = {
	__typename?: "Client";
	id: Scalars["Int"]["output"];
	profile: Maybe<ClientProfile>;
	sessions: Array<PtSession>;
	user: User;
	userId: Scalars["String"]["output"];
};

export type ClientProfile = {
	__typename?: "ClientProfile";
	allowSnsPost: Scalars["String"]["output"];
	clientId: Scalars["String"]["output"];
	exerciseHistory: Scalars["String"]["output"];
	hobby: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	occupation: Scalars["String"]["output"];
};

export type CreateAssignmentInput = {
	dueDate: Scalars["String"]["input"];
	ptSessionId: Scalars["Int"]["input"];
	taskId: Scalars["Int"]["input"];
	taskType: Scalars["String"]["input"];
};

export type CreateBodyConditionInput = {
	armCircumference: InputMaybe<Scalars["Float"]["input"]>;
	avgRespirationRate: InputMaybe<Scalars["Float"]["input"]>;
	avgSleepTime: InputMaybe<Scalars["Float"]["input"]>;
	bmi: InputMaybe<Scalars["Float"]["input"]>;
	bmr: InputMaybe<Scalars["Float"]["input"]>;
	bodyFat: InputMaybe<Scalars["Float"]["input"]>;
	bust: InputMaybe<Scalars["Float"]["input"]>;
	buttockHeight: InputMaybe<Scalars["Float"]["input"]>;
	calfCircumference: InputMaybe<Scalars["Float"]["input"]>;
	clientId: Scalars["Int"]["input"];
	ffd: InputMaybe<Scalars["Float"]["input"]>;
	hip: InputMaybe<Scalars["Float"]["input"]>;
	hwd: InputMaybe<Scalars["Float"]["input"]>;
	measuredAt: Scalars["String"]["input"];
	memo: InputMaybe<Scalars["String"]["input"]>;
	muscleMass: InputMaybe<Scalars["Float"]["input"]>;
	parasympathetic: InputMaybe<Scalars["Float"]["input"]>;
	skeletalMuscleRate: InputMaybe<Scalars["Float"]["input"]>;
	sympathetic: InputMaybe<Scalars["Float"]["input"]>;
	thighCircumference: InputMaybe<Scalars["Float"]["input"]>;
	underbust: InputMaybe<Scalars["Float"]["input"]>;
	waist: InputMaybe<Scalars["Float"]["input"]>;
	weight: InputMaybe<Scalars["Float"]["input"]>;
};

export type CreateClientInput = {
	userId: Scalars["String"]["input"];
};

export type CreateCurriculumUnitInput = {
	evaluationCriteria: Scalars["String"]["input"];
	evaluationCriteriaUrl: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	overview: Scalars["String"]["input"];
	overviewUrl: Scalars["String"]["input"];
	type: Scalars["String"]["input"];
};

export type CreateLearningMaterialInput = {
	contentId: Scalars["Int"]["input"];
	contentType: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	ownerId: Scalars["String"]["input"];
	sourceUrl: Scalars["String"]["input"];
	status: Scalars["String"]["input"];
};

export type CreateMidtermHealthPurposeInput = {
	clientId: Scalars["Int"]["input"];
	memo: InputMaybe<Scalars["String"]["input"]>;
	months: Scalars["Int"]["input"];
	purpose: Scalars["String"]["input"];
	settingDate: Scalars["String"]["input"];
	startDate: Scalars["String"]["input"];
};

export type CreateRequiredFunctionInput = {
	curriculumUnitId: Scalars["Int"]["input"];
	evaluationCriteria: Scalars["String"]["input"];
	evaluationCriteriaUrl: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	overview: Scalars["String"]["input"];
	overviewUrl: Scalars["String"]["input"];
};

export type CreateSessionInput = {
	clientId: Scalars["String"]["input"];
	duration: Scalars["Int"]["input"];
	notes: InputMaybe<Scalars["String"]["input"]>;
	scheduledAt: Scalars["String"]["input"];
	trainerId: Scalars["String"]["input"];
};

export type CreateTrainerInput = {
	userId: Scalars["String"]["input"];
};

export type CreateTrainingMenuInput = {
	commonErrors: Array<Scalars["String"]["input"]>;
	learningMaterialId: Scalars["Int"]["input"];
	level: Scalars["Int"]["input"];
	name: Scalars["String"]["input"];
	requiredFunctionId: Scalars["Int"]["input"];
	targetMuscles: Array<Scalars["String"]["input"]>;
	tips: Scalars["String"]["input"];
};

export type CreateTreatmentMenuInput = {
	commonErrors: Array<Scalars["String"]["input"]>;
	learningMaterialId: Scalars["Int"]["input"];
	name: Scalars["String"]["input"];
	requiredFunctionId: Scalars["Int"]["input"];
	targetMuscles: Array<Scalars["String"]["input"]>;
	tips: Scalars["String"]["input"];
};

export type CreateUserInput = {
	birth_date: Scalars["String"]["input"];
	email: Scalars["String"]["input"];
	first_name: Scalars["String"]["input"];
	first_name_kana: Scalars["String"]["input"];
	gender: Scalars["Int"]["input"];
	kind: Scalars["Int"]["input"];
	last_name: Scalars["String"]["input"];
	last_name_kana: Scalars["String"]["input"];
	password: Scalars["String"]["input"];
};

export type CurriculumUnit = {
	__typename?: "CurriculumUnit";
	createdAt: Scalars["String"]["output"];
	evaluationCriteria: Scalars["String"]["output"];
	evaluationCriteriaUrl: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	name: Scalars["String"]["output"];
	overview: Scalars["String"]["output"];
	overviewUrl: Scalars["String"]["output"];
	requiredFunctions: Array<RequiredFunction>;
	type: Scalars["String"]["output"];
	updatedAt: Scalars["String"]["output"];
};

export enum Gender {
	Female = "FEMALE",
	Male = "MALE",
	Other = "OTHER",
	PreferNotToSay = "PREFER_NOT_TO_SAY",
}

export type LearningMaterial = {
	__typename?: "LearningMaterial";
	contentId: Scalars["Int"]["output"];
	contentType: Scalars["String"]["output"];
	createdAt: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	key: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	ownerId: Scalars["String"]["output"];
	sourceUrl: Scalars["String"]["output"];
	status: Scalars["String"]["output"];
	updatedAt: Scalars["String"]["output"];
};

export type MidtermHealthPurpose = {
	__typename?: "MidtermHealthPurpose";
	clientId: Scalars["Int"]["output"];
	createdAt: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	key: Scalars["String"]["output"];
	memo: Maybe<Scalars["String"]["output"]>;
	months: Scalars["Int"]["output"];
	purpose: Scalars["String"]["output"];
	settingDate: Scalars["String"]["output"];
	startDate: Scalars["String"]["output"];
	updatedAt: Scalars["String"]["output"];
};

export type Mutation = {
	__typename?: "Mutation";
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
	__typename?: "PTSession";
	client: Client;
	clientId: Scalars["String"]["output"];
	createdAt: Scalars["String"]["output"];
	duration: Scalars["Int"]["output"];
	id: Scalars["Int"]["output"];
	items: Array<PtSessionItem>;
	notes: Maybe<Scalars["String"]["output"]>;
	scheduledAt: Scalars["String"]["output"];
	status: SessionStatus;
	trainer: Trainer;
	trainerId: Scalars["String"]["output"];
	updatedAt: Scalars["String"]["output"];
};

export type PtSessionItem = {
	__typename?: "PTSessionItem";
	createdAt: Scalars["String"]["output"];
	duration: Maybe<Scalars["Int"]["output"]>;
	exerciseName: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	notes: Maybe<Scalars["String"]["output"]>;
	reps: Maybe<Scalars["Int"]["output"]>;
	sessionId: Scalars["String"]["output"];
	sets: Maybe<Scalars["Int"]["output"]>;
	updatedAt: Scalars["String"]["output"];
	weight: Maybe<Scalars["Float"]["output"]>;
};

export type Query = {
	__typename?: "Query";
	assignments: Array<Assignment>;
	bodyConditions: Array<BodyCondition>;
	clients: Array<Client>;
	curriculumUnits: Array<CurriculumUnit>;
	hello: Maybe<Scalars["String"]["output"]>;
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
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
	sessionId: Scalars["Int"]["input"];
};

export type QueryBodyConditionsArgs = {
	clientId: Scalars["Int"]["input"];
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryClientsArgs = {
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCurriculumUnitsArgs = {
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLearningMaterialsArgs = {
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
	ownerId: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryMidtermHealthPurposesArgs = {
	clientId: Scalars["Int"]["input"];
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRequiredFunctionsArgs = {
	curriculumUnitId: Scalars["Int"]["input"];
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
};

export type QuerySessionsArgs = {
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTrainersArgs = {
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTrainingMenusArgs = {
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
	requiredFunctionId: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTreatmentMenusArgs = {
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
	requiredFunctionId: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUsersArgs = {
	limit: InputMaybe<Scalars["Int"]["input"]>;
	offset: InputMaybe<Scalars["Int"]["input"]>;
};

export type RequiredFunction = {
	__typename?: "RequiredFunction";
	createdAt: Scalars["String"]["output"];
	curriculumUnitId: Scalars["Int"]["output"];
	evaluationCriteria: Scalars["String"]["output"];
	evaluationCriteriaUrl: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	name: Scalars["String"]["output"];
	overview: Scalars["String"]["output"];
	overviewUrl: Scalars["String"]["output"];
	trainingMenus: Array<TrainingMenu>;
	treatmentMenus: Array<TreatmentMenu>;
	updatedAt: Scalars["String"]["output"];
};

export enum SessionStatus {
	Cancelled = "CANCELLED",
	Completed = "COMPLETED",
	InProgress = "IN_PROGRESS",
	Scheduled = "SCHEDULED",
}

export type Trainer = {
	__typename?: "Trainer";
	id: Scalars["Int"]["output"];
	profile: Maybe<TrainerProfile>;
	sessions: Array<PtSession>;
	user: User;
	userId: Scalars["String"]["output"];
};

export type TrainerProfile = {
	__typename?: "TrainerProfile";
	certifications: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	motivationStatement: Scalars["String"]["output"];
	signatureMuscle: Scalars["String"]["output"];
	specialization: Scalars["String"]["output"];
	trainerId: Scalars["String"]["output"];
};

export type TrainingMenu = {
	__typename?: "TrainingMenu";
	commonErrors: Array<Scalars["String"]["output"]>;
	createdAt: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	learningMaterialId: Scalars["Int"]["output"];
	level: Scalars["Int"]["output"];
	name: Scalars["String"]["output"];
	requiredFunctionId: Scalars["Int"]["output"];
	targetMuscles: Array<Scalars["String"]["output"]>;
	tips: Scalars["String"]["output"];
	updatedAt: Scalars["String"]["output"];
};

export type TreatmentMenu = {
	__typename?: "TreatmentMenu";
	commonErrors: Array<Scalars["String"]["output"]>;
	createdAt: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	learningMaterialId: Scalars["Int"]["output"];
	name: Scalars["String"]["output"];
	requiredFunctionId: Scalars["Int"]["output"];
	targetMuscles: Array<Scalars["String"]["output"]>;
	tips: Scalars["String"]["output"];
	updatedAt: Scalars["String"]["output"];
};

export type User = {
	__typename?: "User";
	active_flag: Scalars["Boolean"]["output"];
	birth_date: Scalars["String"]["output"];
	created_at: Scalars["String"]["output"];
	credentials: Maybe<UserCredentials>;
	first_name: Scalars["String"]["output"];
	first_name_kana: Scalars["String"]["output"];
	gender: Scalars["Int"]["output"];
	id: Scalars["Int"]["output"];
	key: Scalars["String"]["output"];
	kind: Scalars["Int"]["output"];
	last_name: Scalars["String"]["output"];
	last_name_kana: Scalars["String"]["output"];
	updated_at: Scalars["String"]["output"];
};

export type UserCredentials = {
	__typename?: "UserCredentials";
	created_at: Scalars["String"]["output"];
	email: Scalars["String"]["output"];
	id: Scalars["Int"]["output"];
	reset_at: Scalars["Boolean"]["output"];
	updated_at: Scalars["String"]["output"];
};

export enum UserRole {
	Admin = "ADMIN",
	Client = "CLIENT",
	Trainer = "TRAINER",
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<
	TResult,
	TParent = Record<PropertyKey, never>,
	TContext = Record<PropertyKey, never>,
	TArgs = Record<PropertyKey, never>,
> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = Record<PropertyKey, never>,
	TContext = Record<PropertyKey, never>,
	TArgs = Record<PropertyKey, never>,
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<
	TTypes,
	TParent = Record<PropertyKey, never>,
	TContext = Record<PropertyKey, never>,
> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<
	T = Record<PropertyKey, never>,
	TContext = Record<PropertyKey, never>,
> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = Record<PropertyKey, never>,
	TParent = Record<PropertyKey, never>,
	TContext = Record<PropertyKey, never>,
	TArgs = Record<PropertyKey, never>,
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Assignment: ResolverTypeWrapper<Assignment>;
	BodyCondition: ResolverTypeWrapper<BodyCondition>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
	Client: ResolverTypeWrapper<Client>;
	ClientProfile: ResolverTypeWrapper<ClientProfile>;
	CreateAssignmentInput: CreateAssignmentInput;
	CreateBodyConditionInput: CreateBodyConditionInput;
	CreateClientInput: CreateClientInput;
	CreateCurriculumUnitInput: CreateCurriculumUnitInput;
	CreateLearningMaterialInput: CreateLearningMaterialInput;
	CreateMidtermHealthPurposeInput: CreateMidtermHealthPurposeInput;
	CreateRequiredFunctionInput: CreateRequiredFunctionInput;
	CreateSessionInput: CreateSessionInput;
	CreateTrainerInput: CreateTrainerInput;
	CreateTrainingMenuInput: CreateTrainingMenuInput;
	CreateTreatmentMenuInput: CreateTreatmentMenuInput;
	CreateUserInput: CreateUserInput;
	CurriculumUnit: ResolverTypeWrapper<CurriculumUnit>;
	Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
	Gender: Gender;
	Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
	LearningMaterial: ResolverTypeWrapper<LearningMaterial>;
	MidtermHealthPurpose: ResolverTypeWrapper<MidtermHealthPurpose>;
	Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
	PTSession: ResolverTypeWrapper<PtSession>;
	PTSessionItem: ResolverTypeWrapper<PtSessionItem>;
	Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
	RequiredFunction: ResolverTypeWrapper<RequiredFunction>;
	SessionStatus: SessionStatus;
	String: ResolverTypeWrapper<Scalars["String"]["output"]>;
	Trainer: ResolverTypeWrapper<Trainer>;
	TrainerProfile: ResolverTypeWrapper<TrainerProfile>;
	TrainingMenu: ResolverTypeWrapper<TrainingMenu>;
	TreatmentMenu: ResolverTypeWrapper<TreatmentMenu>;
	User: ResolverTypeWrapper<User>;
	UserCredentials: ResolverTypeWrapper<UserCredentials>;
	UserRole: UserRole;
>>>>>>> 9b1a8144a161edc3f732dff517141fba942a4a55:src/graphql/generated/server/graphql-resolvers.ts
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
<<<<<<< HEAD:src/lib/graphql/generated/server/graphql-resolvers.ts
  Assignment: Assignment;
  BodyCondition: BodyCondition;
  Boolean: Scalars['Boolean']['output'];
  Client: Client;
  ClientProfile: ClientProfile;
  CreateAssignmentInput: CreateAssignmentInput;
  CreateBodyConditionInput: CreateBodyConditionInput;
  CreateClientInput: CreateClientInput;
  CreateCurriculumUnitInput: CreateCurriculumUnitInput;
  CreateLearningMaterialInput: CreateLearningMaterialInput;
  CreateMidtermHealthPurposeInput: CreateMidtermHealthPurposeInput;
  CreateRequiredFunctionInput: CreateRequiredFunctionInput;
  CreateSessionInput: CreateSessionInput;
  CreateTrainerInput: CreateTrainerInput;
  CreateTrainingMenuInput: CreateTrainingMenuInput;
  CreateTreatmentMenuInput: CreateTreatmentMenuInput;
  CreateUserInput: CreateUserInput;
  CurriculumUnit: CurriculumUnit;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  LearningMaterial: LearningMaterial;
  MidtermHealthPurpose: MidtermHealthPurpose;
  Mutation: Record<PropertyKey, never>;
  PTSession: PtSession;
  PTSessionItem: PtSessionItem;
  Query: Record<PropertyKey, never>;
  RequiredFunction: RequiredFunction;
  String: Scalars['String']['output'];
  Trainer: Trainer;
  TrainerProfile: TrainerProfile;
  TrainingMenu: TrainingMenu;
  TreatmentMenu: TreatmentMenu;
  User: User;
  UserCredentials: UserCredentials;
};

export type AssignmentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Assignment'] = ResolversParentTypes['Assignment']> = {
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dueDate: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ptSessionId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taskId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taskType: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BodyConditionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BodyCondition'] = ResolversParentTypes['BodyCondition']> = {
  armCircumference: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgRespirationRate: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgSleepTime: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bmi: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bmr: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bodyFat: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bust: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  buttockHeight: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  calfCircumference: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  clientId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ffd: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hip: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hwd: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  measuredAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memo: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  muscleMass: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  parasympathetic: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  skeletalMuscleRate: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sympathetic: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  thighCircumference: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  underbust: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  waist: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type ClientResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  profile: Resolver<Maybe<ResolversTypes['ClientProfile']>, ParentType, ContextType>;
  sessions: Resolver<Array<ResolversTypes['PTSession']>, ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ClientProfileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ClientProfile'] = ResolversParentTypes['ClientProfile']> = {
  allowSnsPost: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clientId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exerciseHistory: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hobby: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  occupation: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CurriculumUnitResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CurriculumUnit'] = ResolversParentTypes['CurriculumUnit']> = {
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  evaluationCriteria: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  evaluationCriteriaUrl: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overview: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overviewUrl: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requiredFunctions: Resolver<Array<ResolversTypes['RequiredFunction']>, ParentType, ContextType>;
  type: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LearningMaterialResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LearningMaterial'] = ResolversParentTypes['LearningMaterial']> = {
  contentId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contentType: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceUrl: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MidtermHealthPurposeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MidtermHealthPurpose'] = ResolversParentTypes['MidtermHealthPurpose']> = {
  clientId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memo: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  months: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  purpose: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  settingDate: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAssignment: Resolver<ResolversTypes['Assignment'], ParentType, ContextType, RequireFields<MutationCreateAssignmentArgs, 'input'>>;
  createBodyCondition: Resolver<ResolversTypes['BodyCondition'], ParentType, ContextType, RequireFields<MutationCreateBodyConditionArgs, 'input'>>;
  createClient: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<MutationCreateClientArgs, 'input'>>;
  createCurriculumUnit: Resolver<ResolversTypes['CurriculumUnit'], ParentType, ContextType, RequireFields<MutationCreateCurriculumUnitArgs, 'input'>>;
  createLearningMaterial: Resolver<ResolversTypes['LearningMaterial'], ParentType, ContextType, RequireFields<MutationCreateLearningMaterialArgs, 'input'>>;
  createMidtermHealthPurpose: Resolver<ResolversTypes['MidtermHealthPurpose'], ParentType, ContextType, RequireFields<MutationCreateMidtermHealthPurposeArgs, 'input'>>;
  createRequiredFunction: Resolver<ResolversTypes['RequiredFunction'], ParentType, ContextType, RequireFields<MutationCreateRequiredFunctionArgs, 'input'>>;
  createSession: Resolver<ResolversTypes['PTSession'], ParentType, ContextType, RequireFields<MutationCreateSessionArgs, 'input'>>;
  createTrainer: Resolver<ResolversTypes['Trainer'], ParentType, ContextType, RequireFields<MutationCreateTrainerArgs, 'input'>>;
  createTrainingMenu: Resolver<ResolversTypes['TrainingMenu'], ParentType, ContextType, RequireFields<MutationCreateTrainingMenuArgs, 'input'>>;
  createTreatmentMenu: Resolver<ResolversTypes['TreatmentMenu'], ParentType, ContextType, RequireFields<MutationCreateTreatmentMenuArgs, 'input'>>;
  createUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
};

export type PtSessionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PTSession'] = ResolversParentTypes['PTSession']> = {
  client: Resolver<ResolversTypes['Client'], ParentType, ContextType>;
  clientId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items: Resolver<Array<ResolversTypes['PTSessionItem']>, ParentType, ContextType>;
  notes: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scheduledAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['SessionStatus'], ParentType, ContextType>;
  trainer: Resolver<ResolversTypes['Trainer'], ParentType, ContextType>;
  trainerId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PtSessionItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PTSessionItem'] = ResolversParentTypes['PTSessionItem']> = {
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exerciseName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  notes: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reps: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sessionId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sets: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  assignments: Resolver<Array<ResolversTypes['Assignment']>, ParentType, ContextType, RequireFields<QueryAssignmentsArgs, 'sessionId'>>;
  bodyConditions: Resolver<Array<ResolversTypes['BodyCondition']>, ParentType, ContextType, RequireFields<QueryBodyConditionsArgs, 'clientId'>>;
  clients: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType, QueryClientsArgs>;
  curriculumUnits: Resolver<Array<ResolversTypes['CurriculumUnit']>, ParentType, ContextType, QueryCurriculumUnitsArgs>;
  hello: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  learningMaterials: Resolver<Array<ResolversTypes['LearningMaterial']>, ParentType, ContextType, QueryLearningMaterialsArgs>;
  midtermHealthPurposes: Resolver<Array<ResolversTypes['MidtermHealthPurpose']>, ParentType, ContextType, RequireFields<QueryMidtermHealthPurposesArgs, 'clientId'>>;
  requiredFunctions: Resolver<Array<ResolversTypes['RequiredFunction']>, ParentType, ContextType, RequireFields<QueryRequiredFunctionsArgs, 'curriculumUnitId'>>;
  sessions: Resolver<Array<ResolversTypes['PTSession']>, ParentType, ContextType, QuerySessionsArgs>;
  trainers: Resolver<Array<ResolversTypes['Trainer']>, ParentType, ContextType, QueryTrainersArgs>;
  trainingMenus: Resolver<Array<ResolversTypes['TrainingMenu']>, ParentType, ContextType, QueryTrainingMenusArgs>;
  treatmentMenus: Resolver<Array<ResolversTypes['TreatmentMenu']>, ParentType, ContextType, QueryTreatmentMenusArgs>;
  users: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, QueryUsersArgs>;
};

export type RequiredFunctionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RequiredFunction'] = ResolversParentTypes['RequiredFunction']> = {
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  curriculumUnitId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  evaluationCriteria: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  evaluationCriteriaUrl: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overview: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overviewUrl: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trainingMenus: Resolver<Array<ResolversTypes['TrainingMenu']>, ParentType, ContextType>;
  treatmentMenus: Resolver<Array<ResolversTypes['TreatmentMenu']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TrainerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Trainer'] = ResolversParentTypes['Trainer']> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  profile: Resolver<Maybe<ResolversTypes['TrainerProfile']>, ParentType, ContextType>;
  sessions: Resolver<Array<ResolversTypes['PTSession']>, ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TrainerProfileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TrainerProfile'] = ResolversParentTypes['TrainerProfile']> = {
  certifications: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  motivationStatement: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signatureMuscle: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  specialization: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trainerId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TrainingMenuResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TrainingMenu'] = ResolversParentTypes['TrainingMenu']> = {
  commonErrors: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  learningMaterialId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requiredFunctionId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetMuscles: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tips: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TreatmentMenuResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TreatmentMenu'] = ResolversParentTypes['TreatmentMenu']> = {
  commonErrors: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  learningMaterialId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requiredFunctionId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetMuscles: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tips: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  active_flag: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  birth_date: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  credentials: Resolver<Maybe<ResolversTypes['UserCredentials']>, ParentType, ContextType>;
  first_name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name_kana: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  last_name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_name_kana: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type UserCredentialsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserCredentials'] = ResolversParentTypes['UserCredentials']> = {
  created_at: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reset_at: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updated_at: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Assignment: AssignmentResolvers<ContextType>;
  BodyCondition: BodyConditionResolvers<ContextType>;
  Client: ClientResolvers<ContextType>;
  ClientProfile: ClientProfileResolvers<ContextType>;
  CurriculumUnit: CurriculumUnitResolvers<ContextType>;
  LearningMaterial: LearningMaterialResolvers<ContextType>;
  MidtermHealthPurpose: MidtermHealthPurposeResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  PTSession: PtSessionResolvers<ContextType>;
  PTSessionItem: PtSessionItemResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  RequiredFunction: RequiredFunctionResolvers<ContextType>;
  Trainer: TrainerResolvers<ContextType>;
  TrainerProfile: TrainerProfileResolvers<ContextType>;
  TrainingMenu: TrainingMenuResolvers<ContextType>;
  TreatmentMenu: TreatmentMenuResolvers<ContextType>;
  User: UserResolvers<ContextType>;
  UserCredentials: UserCredentialsResolvers<ContextType>;
};

=======
	Assignment: Assignment;
	BodyCondition: BodyCondition;
	Boolean: Scalars["Boolean"]["output"];
	Client: Client;
	ClientProfile: ClientProfile;
	CreateAssignmentInput: CreateAssignmentInput;
	CreateBodyConditionInput: CreateBodyConditionInput;
	CreateClientInput: CreateClientInput;
	CreateCurriculumUnitInput: CreateCurriculumUnitInput;
	CreateLearningMaterialInput: CreateLearningMaterialInput;
	CreateMidtermHealthPurposeInput: CreateMidtermHealthPurposeInput;
	CreateRequiredFunctionInput: CreateRequiredFunctionInput;
	CreateSessionInput: CreateSessionInput;
	CreateTrainerInput: CreateTrainerInput;
	CreateTrainingMenuInput: CreateTrainingMenuInput;
	CreateTreatmentMenuInput: CreateTreatmentMenuInput;
	CreateUserInput: CreateUserInput;
	CurriculumUnit: CurriculumUnit;
	Float: Scalars["Float"]["output"];
	Int: Scalars["Int"]["output"];
	LearningMaterial: LearningMaterial;
	MidtermHealthPurpose: MidtermHealthPurpose;
	Mutation: Record<PropertyKey, never>;
	PTSession: PtSession;
	PTSessionItem: PtSessionItem;
	Query: Record<PropertyKey, never>;
	RequiredFunction: RequiredFunction;
	String: Scalars["String"]["output"];
	Trainer: Trainer;
	TrainerProfile: TrainerProfile;
	TrainingMenu: TrainingMenu;
	TreatmentMenu: TreatmentMenu;
	User: User;
	UserCredentials: UserCredentials;
};

export type AssignmentResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Assignment"] = ResolversParentTypes["Assignment"],
> = {
	createdAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	dueDate: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	key: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	ptSessionId: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	taskId: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	taskType: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type BodyConditionResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["BodyCondition"] = ResolversParentTypes["BodyCondition"],
> = {
	armCircumference: Resolver<
		Maybe<ResolversTypes["Float"]>,
		ParentType,
		ContextType
	>;
	avgRespirationRate: Resolver<
		Maybe<ResolversTypes["Float"]>,
		ParentType,
		ContextType
	>;
	avgSleepTime: Resolver<
		Maybe<ResolversTypes["Float"]>,
		ParentType,
		ContextType
	>;
	bmi: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	bmr: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	bodyFat: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	bust: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	buttockHeight: Resolver<
		Maybe<ResolversTypes["Float"]>,
		ParentType,
		ContextType
	>;
	calfCircumference: Resolver<
		Maybe<ResolversTypes["Float"]>,
		ParentType,
		ContextType
	>;
	clientId: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	ffd: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	hip: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	hwd: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	measuredAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	memo: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	muscleMass: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	parasympathetic: Resolver<
		Maybe<ResolversTypes["Float"]>,
		ParentType,
		ContextType
	>;
	skeletalMuscleRate: Resolver<
		Maybe<ResolversTypes["Float"]>,
		ParentType,
		ContextType
	>;
	sympathetic: Resolver<
		Maybe<ResolversTypes["Float"]>,
		ParentType,
		ContextType
	>;
	thighCircumference: Resolver<
		Maybe<ResolversTypes["Float"]>,
		ParentType,
		ContextType
	>;
	underbust: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	waist: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	weight: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type ClientResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Client"] = ResolversParentTypes["Client"],
> = {
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	profile: Resolver<
		Maybe<ResolversTypes["ClientProfile"]>,
		ParentType,
		ContextType
	>;
	sessions: Resolver<
		Array<ResolversTypes["PTSession"]>,
		ParentType,
		ContextType
	>;
	user: Resolver<ResolversTypes["User"], ParentType, ContextType>;
	userId: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type ClientProfileResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["ClientProfile"] = ResolversParentTypes["ClientProfile"],
> = {
	allowSnsPost: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	clientId: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	exerciseHistory: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	hobby: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	occupation: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type CurriculumUnitResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["CurriculumUnit"] = ResolversParentTypes["CurriculumUnit"],
> = {
	createdAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	evaluationCriteria: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	evaluationCriteriaUrl: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	overview: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	overviewUrl: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	requiredFunctions: Resolver<
		Array<ResolversTypes["RequiredFunction"]>,
		ParentType,
		ContextType
	>;
	type: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type LearningMaterialResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["LearningMaterial"] = ResolversParentTypes["LearningMaterial"],
> = {
	contentId: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	contentType: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	createdAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	key: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	ownerId: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	sourceUrl: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	status: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type MidtermHealthPurposeResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["MidtermHealthPurpose"] = ResolversParentTypes["MidtermHealthPurpose"],
> = {
	clientId: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	createdAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	key: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	memo: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	months: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	purpose: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	settingDate: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	startDate: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
	createAssignment: Resolver<
		ResolversTypes["Assignment"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateAssignmentArgs, "input">
	>;
	createBodyCondition: Resolver<
		ResolversTypes["BodyCondition"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateBodyConditionArgs, "input">
	>;
	createClient: Resolver<
		ResolversTypes["Client"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateClientArgs, "input">
	>;
	createCurriculumUnit: Resolver<
		ResolversTypes["CurriculumUnit"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateCurriculumUnitArgs, "input">
	>;
	createLearningMaterial: Resolver<
		ResolversTypes["LearningMaterial"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateLearningMaterialArgs, "input">
	>;
	createMidtermHealthPurpose: Resolver<
		ResolversTypes["MidtermHealthPurpose"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateMidtermHealthPurposeArgs, "input">
	>;
	createRequiredFunction: Resolver<
		ResolversTypes["RequiredFunction"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateRequiredFunctionArgs, "input">
	>;
	createSession: Resolver<
		ResolversTypes["PTSession"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateSessionArgs, "input">
	>;
	createTrainer: Resolver<
		ResolversTypes["Trainer"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateTrainerArgs, "input">
	>;
	createTrainingMenu: Resolver<
		ResolversTypes["TrainingMenu"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateTrainingMenuArgs, "input">
	>;
	createTreatmentMenu: Resolver<
		ResolversTypes["TreatmentMenu"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateTreatmentMenuArgs, "input">
	>;
	createUser: Resolver<
		ResolversTypes["User"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateUserArgs, "input">
	>;
};

export type PtSessionResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["PTSession"] = ResolversParentTypes["PTSession"],
> = {
	client: Resolver<ResolversTypes["Client"], ParentType, ContextType>;
	clientId: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	createdAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	duration: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	items: Resolver<
		Array<ResolversTypes["PTSessionItem"]>,
		ParentType,
		ContextType
	>;
	notes: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	scheduledAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	status: Resolver<ResolversTypes["SessionStatus"], ParentType, ContextType>;
	trainer: Resolver<ResolversTypes["Trainer"], ParentType, ContextType>;
	trainerId: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type PtSessionItemResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["PTSessionItem"] = ResolversParentTypes["PTSessionItem"],
> = {
	createdAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	duration: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	exerciseName: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	notes: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	reps: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	sessionId: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	sets: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	updatedAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	weight: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	assignments: Resolver<
		Array<ResolversTypes["Assignment"]>,
		ParentType,
		ContextType,
		RequireFields<QueryAssignmentsArgs, "sessionId">
	>;
	bodyConditions: Resolver<
		Array<ResolversTypes["BodyCondition"]>,
		ParentType,
		ContextType,
		RequireFields<QueryBodyConditionsArgs, "clientId">
	>;
	clients: Resolver<
		Array<ResolversTypes["Client"]>,
		ParentType,
		ContextType,
		QueryClientsArgs
	>;
	curriculumUnits: Resolver<
		Array<ResolversTypes["CurriculumUnit"]>,
		ParentType,
		ContextType,
		QueryCurriculumUnitsArgs
	>;
	hello: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	learningMaterials: Resolver<
		Array<ResolversTypes["LearningMaterial"]>,
		ParentType,
		ContextType,
		QueryLearningMaterialsArgs
	>;
	midtermHealthPurposes: Resolver<
		Array<ResolversTypes["MidtermHealthPurpose"]>,
		ParentType,
		ContextType,
		RequireFields<QueryMidtermHealthPurposesArgs, "clientId">
	>;
	requiredFunctions: Resolver<
		Array<ResolversTypes["RequiredFunction"]>,
		ParentType,
		ContextType,
		RequireFields<QueryRequiredFunctionsArgs, "curriculumUnitId">
	>;
	sessions: Resolver<
		Array<ResolversTypes["PTSession"]>,
		ParentType,
		ContextType,
		QuerySessionsArgs
	>;
	trainers: Resolver<
		Array<ResolversTypes["Trainer"]>,
		ParentType,
		ContextType,
		QueryTrainersArgs
	>;
	trainingMenus: Resolver<
		Array<ResolversTypes["TrainingMenu"]>,
		ParentType,
		ContextType,
		QueryTrainingMenusArgs
	>;
	treatmentMenus: Resolver<
		Array<ResolversTypes["TreatmentMenu"]>,
		ParentType,
		ContextType,
		QueryTreatmentMenusArgs
	>;
	users: Resolver<
		Array<ResolversTypes["User"]>,
		ParentType,
		ContextType,
		QueryUsersArgs
	>;
};

export type RequiredFunctionResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["RequiredFunction"] = ResolversParentTypes["RequiredFunction"],
> = {
	createdAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	curriculumUnitId: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	evaluationCriteria: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	evaluationCriteriaUrl: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	overview: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	overviewUrl: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	trainingMenus: Resolver<
		Array<ResolversTypes["TrainingMenu"]>,
		ParentType,
		ContextType
	>;
	treatmentMenus: Resolver<
		Array<ResolversTypes["TreatmentMenu"]>,
		ParentType,
		ContextType
	>;
	updatedAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type TrainerResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Trainer"] = ResolversParentTypes["Trainer"],
> = {
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	profile: Resolver<
		Maybe<ResolversTypes["TrainerProfile"]>,
		ParentType,
		ContextType
	>;
	sessions: Resolver<
		Array<ResolversTypes["PTSession"]>,
		ParentType,
		ContextType
	>;
	user: Resolver<ResolversTypes["User"], ParentType, ContextType>;
	userId: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type TrainerProfileResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["TrainerProfile"] = ResolversParentTypes["TrainerProfile"],
> = {
	certifications: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	motivationStatement: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	signatureMuscle: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	specialization: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	trainerId: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type TrainingMenuResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["TrainingMenu"] = ResolversParentTypes["TrainingMenu"],
> = {
	commonErrors: Resolver<
		Array<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	createdAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	learningMaterialId: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	level: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	requiredFunctionId: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	targetMuscles: Resolver<
		Array<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	tips: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type TreatmentMenuResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["TreatmentMenu"] = ResolversParentTypes["TreatmentMenu"],
> = {
	commonErrors: Resolver<
		Array<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	createdAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	learningMaterialId: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	requiredFunctionId: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	targetMuscles: Resolver<
		Array<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	tips: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type UserResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
	active_flag: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
	birth_date: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	created_at: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	credentials: Resolver<
		Maybe<ResolversTypes["UserCredentials"]>,
		ParentType,
		ContextType
	>;
	first_name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	first_name_kana: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	gender: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	key: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	kind: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	last_name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	last_name_kana: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updated_at: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type UserCredentialsResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["UserCredentials"] = ResolversParentTypes["UserCredentials"],
> = {
	created_at: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	email: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	reset_at: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
	updated_at: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
	Assignment: AssignmentResolvers<ContextType>;
	BodyCondition: BodyConditionResolvers<ContextType>;
	Client: ClientResolvers<ContextType>;
	ClientProfile: ClientProfileResolvers<ContextType>;
	CurriculumUnit: CurriculumUnitResolvers<ContextType>;
	LearningMaterial: LearningMaterialResolvers<ContextType>;
	MidtermHealthPurpose: MidtermHealthPurposeResolvers<ContextType>;
	Mutation: MutationResolvers<ContextType>;
	PTSession: PtSessionResolvers<ContextType>;
	PTSessionItem: PtSessionItemResolvers<ContextType>;
	Query: QueryResolvers<ContextType>;
	RequiredFunction: RequiredFunctionResolvers<ContextType>;
	Trainer: TrainerResolvers<ContextType>;
	TrainerProfile: TrainerProfileResolvers<ContextType>;
	TrainingMenu: TrainingMenuResolvers<ContextType>;
	TreatmentMenu: TreatmentMenuResolvers<ContextType>;
	User: UserResolvers<ContextType>;
	UserCredentials: UserCredentialsResolvers<ContextType>;
};
>>>>>>> 9b1a8144a161edc3f732dff517141fba942a4a55:src/graphql/generated/server/graphql-resolvers.ts

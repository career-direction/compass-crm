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
  assignments: Array<Assignment>;
  bodyConditions: Array<BodyCondition>;
  id: Scalars['Int']['output'];
  midtermHealthPurposes: Array<MidtermHealthPurpose>;
  profile: Maybe<ClientProfile>;
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
  armCircumference: InputMaybe<Scalars['String']['input']>;
  avgRespirationRate: InputMaybe<Scalars['String']['input']>;
  avgSleepTime: InputMaybe<Scalars['String']['input']>;
  bmi: InputMaybe<Scalars['String']['input']>;
  bmr: InputMaybe<Scalars['String']['input']>;
  bodyFat: InputMaybe<Scalars['String']['input']>;
  bust: InputMaybe<Scalars['String']['input']>;
  buttockHeight: InputMaybe<Scalars['String']['input']>;
  calfCircumference: InputMaybe<Scalars['String']['input']>;
  clientId: Scalars['Int']['input'];
  ffd: InputMaybe<Scalars['String']['input']>;
  hip: InputMaybe<Scalars['String']['input']>;
  hwd: InputMaybe<Scalars['String']['input']>;
  measuredAt: Scalars['String']['input'];
  memo: InputMaybe<Scalars['String']['input']>;
  muscleMass: InputMaybe<Scalars['String']['input']>;
  parasympathetic: InputMaybe<Scalars['String']['input']>;
  skeletalMuscleRate: InputMaybe<Scalars['String']['input']>;
  sympathetic: InputMaybe<Scalars['String']['input']>;
  thighCircumference: InputMaybe<Scalars['String']['input']>;
  underbust: InputMaybe<Scalars['String']['input']>;
  waist: InputMaybe<Scalars['String']['input']>;
  weight: InputMaybe<Scalars['String']['input']>;
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
  memo: InputMaybe<Scalars['String']['input']>;
  months: Scalars['Int']['input'];
  purpose: Scalars['String']['input'];
  settingDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type CreatePtSessionInput = {
  archiveUrl: InputMaybe<Scalars['String']['input']>;
  chatContents: InputMaybe<Scalars['String']['input']>;
  clientId: Scalars['Int']['input'];
  kind: Scalars['String']['input'];
  memo: InputMaybe<Scalars['String']['input']>;
  performedAt: Scalars['String']['input'];
  theme: Scalars['String']['input'];
  trainerComment: InputMaybe<Scalars['String']['input']>;
  trainerId: Scalars['Int']['input'];
};

export type CreatePtSessionItemInput = {
  memo: InputMaybe<Scalars['String']['input']>;
  ptSessionId: Scalars['Int']['input'];
  taskId: Scalars['Int']['input'];
  taskType: Scalars['String']['input'];
  trainerAdvice: InputMaybe<Scalars['String']['input']>;
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
  memo: Maybe<Scalars['String']['output']>;
  milestones: Array<MonthlyHealthMilestone>;
  months: Scalars['Int']['output'];
  purpose: Scalars['String']['output'];
  settingDate: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type MonthlyActionGoal = {
  __typename?: 'MonthlyActionGoal';
  achieved: Maybe<Scalars['String']['output']>;
  actionType: Maybe<Scalars['String']['output']>;
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
  achieved: Maybe<Scalars['Boolean']['output']>;
  actionGoals: Array<MonthlyActionGoal>;
  asIs: Scalars['String']['output'];
  clientId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  midtermHealthGoalId: Scalars['Int']['output'];
  results: Maybe<Scalars['String']['output']>;
  target: Scalars['String']['output'];
  toBe: Maybe<Scalars['String']['output']>;
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
  archiveUrl: Maybe<Scalars['String']['output']>;
  assignments: Array<Assignment>;
  chatContents: Maybe<Scalars['String']['output']>;
  client: Client;
  clientId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  items: Array<PtSessionItem>;
  key: Scalars['String']['output'];
  kind: Scalars['String']['output'];
  memo: Maybe<Scalars['String']['output']>;
  performedAt: Scalars['String']['output'];
  theme: Scalars['String']['output'];
  trainer: Trainer;
  trainerComment: Maybe<Scalars['String']['output']>;
  trainerId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PtSessionItem = {
  __typename?: 'PTSessionItem';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  memo: Maybe<Scalars['String']['output']>;
  ptSessionId: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
  taskType: Scalars['String']['output'];
  trainerAdvice: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  assignments: Array<Assignment>;
  bodyConditions: Array<BodyCondition>;
  clientProfiles: Array<ClientProfile>;
  clientProfilesById: Maybe<ClientProfile>;
  clients: Array<Client>;
  clientsById: Maybe<Client>;
  curriculumUnits: Array<CurriculumUnit>;
  curriculumUnitsById: Maybe<CurriculumUnit>;
  hello: Maybe<Scalars['String']['output']>;
  learningMaterials: Array<LearningMaterial>;
  midtermHealthPurposes: Array<MidtermHealthPurpose>;
  ptSessionItems: Array<PtSessionItem>;
  ptSessionItemsById: Maybe<PtSessionItem>;
  ptSessions: Array<PtSession>;
  ptSessionsById: Maybe<PtSession>;
  requiredFunctions: Array<RequiredFunction>;
  sessions: Array<PtSession>;
  trainerProfiles: Array<TrainerProfile>;
  trainerProfilesById: Maybe<TrainerProfile>;
  trainers: Array<Trainer>;
  trainersById: Maybe<Trainer>;
  trainingMenus: Array<TrainingMenu>;
  trainingMenusById: Maybe<TrainingMenu>;
  treatmentMenus: Array<TreatmentMenu>;
  treatmentMenusById: Maybe<TreatmentMenu>;
  userCredentials: Array<UserCredential>;
  userCredentialsById: Maybe<UserCredential>;
  users: Array<User>;
  usersById: Maybe<User>;
};


export type QueryAssignmentsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  ptSessionId: Scalars['Int']['input'];
};


export type QueryBodyConditionsArgs = {
  clientId: Scalars['Int']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClientProfilesArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClientProfilesByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryClientsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClientsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCurriculumUnitsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurriculumUnitsByIdArgs = {
  id: Scalars['Int']['input'];
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


export type QueryPtSessionItemsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPtSessionItemsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPtSessionsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPtSessionsByIdArgs = {
  id: Scalars['Int']['input'];
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


export type QueryTrainerProfilesArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainerProfilesByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTrainersArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainersByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTrainingMenusArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainingMenusByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTreatmentMenusArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTreatmentMenusByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserCredentialsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserCredentialsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersByIdArgs = {
  id: Scalars['Int']['input'];
};

export type RequiredFunction = {
  __typename?: 'RequiredFunction';
  createdAt: Scalars['String']['output'];
  curriculumUnit: Maybe<CurriculumUnit>;
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
  profile: Maybe<TrainerProfile>;
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
  learningMaterial: Maybe<LearningMaterial>;
  learningMaterialId: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  requiredFunction: Maybe<RequiredFunction>;
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
  learningMaterial: Maybe<LearningMaterial>;
  learningMaterialId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  requiredFunction: Maybe<RequiredFunction>;
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
  credentials: Maybe<UserCredential>;
  deletedAt: Maybe<Scalars['String']['output']>;
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
  AssignmentExecution: ResolverTypeWrapper<AssignmentExecution>;
  BodyCondition: ResolverTypeWrapper<BodyCondition>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Client: ResolverTypeWrapper<Client>;
  ClientProfile: ResolverTypeWrapper<ClientProfile>;
  CreateAssignmentInput: CreateAssignmentInput;
  CreateBodyConditionInput: CreateBodyConditionInput;
  CreateClientInput: CreateClientInput;
  CreateClientProfileInput: CreateClientProfileInput;
  CreateClientWithProfileInput: CreateClientWithProfileInput;
  CreateCurriculumUnitInput: CreateCurriculumUnitInput;
  CreateLearningMaterialInput: CreateLearningMaterialInput;
  CreateMidtermHealthPurposeInput: CreateMidtermHealthPurposeInput;
  CreatePTSessionInput: CreatePtSessionInput;
  CreatePTSessionItemInput: CreatePtSessionItemInput;
  CreateRequiredFunctionInput: CreateRequiredFunctionInput;
  CreateSessionInput: CreateSessionInput;
  CreateTrainerInput: CreateTrainerInput;
  CreateTrainerProfileInput: CreateTrainerProfileInput;
  CreateTrainingMenuInput: CreateTrainingMenuInput;
  CreateTreatmentMenuInput: CreateTreatmentMenuInput;
  CreateUserCredentialInput: CreateUserCredentialInput;
  CreateUserInput: CreateUserInput;
  CurriculumUnit: ResolverTypeWrapper<CurriculumUnit>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LearningMaterial: ResolverTypeWrapper<LearningMaterial>;
  MidtermHealthPurpose: ResolverTypeWrapper<MidtermHealthPurpose>;
  MonthlyActionGoal: ResolverTypeWrapper<MonthlyActionGoal>;
  MonthlyHealthMilestone: ResolverTypeWrapper<MonthlyHealthMilestone>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  PTSession: ResolverTypeWrapper<PtSession>;
  PTSessionItem: ResolverTypeWrapper<PtSessionItem>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RequiredFunction: ResolverTypeWrapper<RequiredFunction>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Trainer: ResolverTypeWrapper<Trainer>;
  TrainerProfile: ResolverTypeWrapper<TrainerProfile>;
  TrainingMenu: ResolverTypeWrapper<TrainingMenu>;
  TreatmentMenu: ResolverTypeWrapper<TreatmentMenu>;
  User: ResolverTypeWrapper<User>;
  UserCredential: ResolverTypeWrapper<UserCredential>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Assignment: Assignment;
  AssignmentExecution: AssignmentExecution;
  BodyCondition: BodyCondition;
  Boolean: Scalars['Boolean']['output'];
  Client: Client;
  ClientProfile: ClientProfile;
  CreateAssignmentInput: CreateAssignmentInput;
  CreateBodyConditionInput: CreateBodyConditionInput;
  CreateClientInput: CreateClientInput;
  CreateClientProfileInput: CreateClientProfileInput;
  CreateClientWithProfileInput: CreateClientWithProfileInput;
  CreateCurriculumUnitInput: CreateCurriculumUnitInput;
  CreateLearningMaterialInput: CreateLearningMaterialInput;
  CreateMidtermHealthPurposeInput: CreateMidtermHealthPurposeInput;
  CreatePTSessionInput: CreatePtSessionInput;
  CreatePTSessionItemInput: CreatePtSessionItemInput;
  CreateRequiredFunctionInput: CreateRequiredFunctionInput;
  CreateSessionInput: CreateSessionInput;
  CreateTrainerInput: CreateTrainerInput;
  CreateTrainerProfileInput: CreateTrainerProfileInput;
  CreateTrainingMenuInput: CreateTrainingMenuInput;
  CreateTreatmentMenuInput: CreateTreatmentMenuInput;
  CreateUserCredentialInput: CreateUserCredentialInput;
  CreateUserInput: CreateUserInput;
  CurriculumUnit: CurriculumUnit;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  LearningMaterial: LearningMaterial;
  MidtermHealthPurpose: MidtermHealthPurpose;
  MonthlyActionGoal: MonthlyActionGoal;
  MonthlyHealthMilestone: MonthlyHealthMilestone;
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
  UserCredential: UserCredential;
};

export type AssignmentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Assignment'] = ResolversParentTypes['Assignment']> = {
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dueDate: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  executions: Resolver<Array<ResolversTypes['AssignmentExecution']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ptSessionId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taskId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taskType: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type AssignmentExecutionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AssignmentExecution'] = ResolversParentTypes['AssignmentExecution']> = {
  assignmentId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  executionDate: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  assignments: Resolver<Array<ResolversTypes['Assignment']>, ParentType, ContextType>;
  bodyConditions: Resolver<Array<ResolversTypes['BodyCondition']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  midtermHealthPurposes: Resolver<Array<ResolversTypes['MidtermHealthPurpose']>, ParentType, ContextType>;
  profile: Resolver<Maybe<ResolversTypes['ClientProfile']>, ParentType, ContextType>;
  sessions: Resolver<Array<ResolversTypes['PTSession']>, ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ClientProfileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ClientProfile'] = ResolversParentTypes['ClientProfile']> = {
  allowSnsPost: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clientId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  milestones: Resolver<Array<ResolversTypes['MonthlyHealthMilestone']>, ParentType, ContextType>;
  months: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  purpose: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  settingDate: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MonthlyActionGoalResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MonthlyActionGoal'] = ResolversParentTypes['MonthlyActionGoal']> = {
  achieved: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actionType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  frequencyPerWeek: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  goal: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  monthlyHealthMilestoneId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetMonth: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MonthlyHealthMilestoneResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MonthlyHealthMilestone'] = ResolversParentTypes['MonthlyHealthMilestone']> = {
  achieved: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  actionGoals: Resolver<Array<ResolversTypes['MonthlyActionGoal']>, ParentType, ContextType>;
  asIs: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clientId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  midtermHealthGoalId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toBe: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  yearMonth: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAssignment: Resolver<ResolversTypes['Assignment'], ParentType, ContextType, RequireFields<MutationCreateAssignmentArgs, 'input'>>;
  createBodyCondition: Resolver<ResolversTypes['BodyCondition'], ParentType, ContextType, RequireFields<MutationCreateBodyConditionArgs, 'input'>>;
  createClient: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<MutationCreateClientArgs, 'input'>>;
  createClientProfile: Resolver<ResolversTypes['ClientProfile'], ParentType, ContextType, RequireFields<MutationCreateClientProfileArgs, 'input'>>;
  createClientWithProfile: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<MutationCreateClientWithProfileArgs, 'input'>>;
  createCurriculumUnit: Resolver<ResolversTypes['CurriculumUnit'], ParentType, ContextType, RequireFields<MutationCreateCurriculumUnitArgs, 'input'>>;
  createLearningMaterial: Resolver<ResolversTypes['LearningMaterial'], ParentType, ContextType, RequireFields<MutationCreateLearningMaterialArgs, 'input'>>;
  createMidtermHealthPurpose: Resolver<ResolversTypes['MidtermHealthPurpose'], ParentType, ContextType, RequireFields<MutationCreateMidtermHealthPurposeArgs, 'input'>>;
  createPTSession: Resolver<ResolversTypes['PTSession'], ParentType, ContextType, RequireFields<MutationCreatePtSessionArgs, 'input'>>;
  createPTSessionItem: Resolver<ResolversTypes['PTSessionItem'], ParentType, ContextType, RequireFields<MutationCreatePtSessionItemArgs, 'input'>>;
  createRequiredFunction: Resolver<ResolversTypes['RequiredFunction'], ParentType, ContextType, RequireFields<MutationCreateRequiredFunctionArgs, 'input'>>;
  createSession: Resolver<ResolversTypes['PTSession'], ParentType, ContextType, RequireFields<MutationCreateSessionArgs, 'input'>>;
  createTrainer: Resolver<ResolversTypes['Trainer'], ParentType, ContextType, RequireFields<MutationCreateTrainerArgs, 'input'>>;
  createTrainerProfile: Resolver<ResolversTypes['TrainerProfile'], ParentType, ContextType, RequireFields<MutationCreateTrainerProfileArgs, 'input'>>;
  createTrainingMenu: Resolver<ResolversTypes['TrainingMenu'], ParentType, ContextType, RequireFields<MutationCreateTrainingMenuArgs, 'input'>>;
  createTreatmentMenu: Resolver<ResolversTypes['TreatmentMenu'], ParentType, ContextType, RequireFields<MutationCreateTreatmentMenuArgs, 'input'>>;
  createUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createUserCredential: Resolver<ResolversTypes['UserCredential'], ParentType, ContextType, RequireFields<MutationCreateUserCredentialArgs, 'input'>>;
};

export type PtSessionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PTSession'] = ResolversParentTypes['PTSession']> = {
  archiveUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assignments: Resolver<Array<ResolversTypes['Assignment']>, ParentType, ContextType>;
  chatContents: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  client: Resolver<ResolversTypes['Client'], ParentType, ContextType>;
  clientId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items: Resolver<Array<ResolversTypes['PTSessionItem']>, ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memo: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  theme: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trainer: Resolver<ResolversTypes['Trainer'], ParentType, ContextType>;
  trainerComment: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trainerId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PtSessionItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PTSessionItem'] = ResolversParentTypes['PTSessionItem']> = {
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  memo: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ptSessionId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taskId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taskType: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trainerAdvice: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  assignments: Resolver<Array<ResolversTypes['Assignment']>, ParentType, ContextType, RequireFields<QueryAssignmentsArgs, 'ptSessionId'>>;
  bodyConditions: Resolver<Array<ResolversTypes['BodyCondition']>, ParentType, ContextType, RequireFields<QueryBodyConditionsArgs, 'clientId'>>;
  clientProfiles: Resolver<Array<ResolversTypes['ClientProfile']>, ParentType, ContextType, QueryClientProfilesArgs>;
  clientProfilesById: Resolver<Maybe<ResolversTypes['ClientProfile']>, ParentType, ContextType, RequireFields<QueryClientProfilesByIdArgs, 'id'>>;
  clients: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType, QueryClientsArgs>;
  clientsById: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<QueryClientsByIdArgs, 'id'>>;
  curriculumUnits: Resolver<Array<ResolversTypes['CurriculumUnit']>, ParentType, ContextType, QueryCurriculumUnitsArgs>;
  curriculumUnitsById: Resolver<Maybe<ResolversTypes['CurriculumUnit']>, ParentType, ContextType, RequireFields<QueryCurriculumUnitsByIdArgs, 'id'>>;
  hello: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  learningMaterials: Resolver<Array<ResolversTypes['LearningMaterial']>, ParentType, ContextType, QueryLearningMaterialsArgs>;
  midtermHealthPurposes: Resolver<Array<ResolversTypes['MidtermHealthPurpose']>, ParentType, ContextType, RequireFields<QueryMidtermHealthPurposesArgs, 'clientId'>>;
  ptSessionItems: Resolver<Array<ResolversTypes['PTSessionItem']>, ParentType, ContextType, QueryPtSessionItemsArgs>;
  ptSessionItemsById: Resolver<Maybe<ResolversTypes['PTSessionItem']>, ParentType, ContextType, RequireFields<QueryPtSessionItemsByIdArgs, 'id'>>;
  ptSessions: Resolver<Array<ResolversTypes['PTSession']>, ParentType, ContextType, QueryPtSessionsArgs>;
  ptSessionsById: Resolver<Maybe<ResolversTypes['PTSession']>, ParentType, ContextType, RequireFields<QueryPtSessionsByIdArgs, 'id'>>;
  requiredFunctions: Resolver<Array<ResolversTypes['RequiredFunction']>, ParentType, ContextType, RequireFields<QueryRequiredFunctionsArgs, 'curriculumUnitId'>>;
  sessions: Resolver<Array<ResolversTypes['PTSession']>, ParentType, ContextType, QuerySessionsArgs>;
  trainerProfiles: Resolver<Array<ResolversTypes['TrainerProfile']>, ParentType, ContextType, QueryTrainerProfilesArgs>;
  trainerProfilesById: Resolver<Maybe<ResolversTypes['TrainerProfile']>, ParentType, ContextType, RequireFields<QueryTrainerProfilesByIdArgs, 'id'>>;
  trainers: Resolver<Array<ResolversTypes['Trainer']>, ParentType, ContextType, QueryTrainersArgs>;
  trainersById: Resolver<Maybe<ResolversTypes['Trainer']>, ParentType, ContextType, RequireFields<QueryTrainersByIdArgs, 'id'>>;
  trainingMenus: Resolver<Array<ResolversTypes['TrainingMenu']>, ParentType, ContextType, QueryTrainingMenusArgs>;
  trainingMenusById: Resolver<Maybe<ResolversTypes['TrainingMenu']>, ParentType, ContextType, RequireFields<QueryTrainingMenusByIdArgs, 'id'>>;
  treatmentMenus: Resolver<Array<ResolversTypes['TreatmentMenu']>, ParentType, ContextType, QueryTreatmentMenusArgs>;
  treatmentMenusById: Resolver<Maybe<ResolversTypes['TreatmentMenu']>, ParentType, ContextType, RequireFields<QueryTreatmentMenusByIdArgs, 'id'>>;
  userCredentials: Resolver<Array<ResolversTypes['UserCredential']>, ParentType, ContextType, QueryUserCredentialsArgs>;
  userCredentialsById: Resolver<Maybe<ResolversTypes['UserCredential']>, ParentType, ContextType, RequireFields<QueryUserCredentialsByIdArgs, 'id'>>;
  users: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, QueryUsersArgs>;
  usersById: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersByIdArgs, 'id'>>;
};

export type RequiredFunctionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RequiredFunction'] = ResolversParentTypes['RequiredFunction']> = {
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  curriculumUnit: Resolver<Maybe<ResolversTypes['CurriculumUnit']>, ParentType, ContextType>;
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
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type TrainerProfileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TrainerProfile'] = ResolversParentTypes['TrainerProfile']> = {
  certifications: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  motivationStatement: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signatureMuscles: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  specializations: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trainerId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type TrainingMenuResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TrainingMenu'] = ResolversParentTypes['TrainingMenu']> = {
  commonErrors: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  learningMaterial: Resolver<Maybe<ResolversTypes['LearningMaterial']>, ParentType, ContextType>;
  learningMaterialId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requiredFunction: Resolver<Maybe<ResolversTypes['RequiredFunction']>, ParentType, ContextType>;
  requiredFunctionId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetMuscles: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tips: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TreatmentMenuResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TreatmentMenu'] = ResolversParentTypes['TreatmentMenu']> = {
  commonErrors: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  learningMaterial: Resolver<Maybe<ResolversTypes['LearningMaterial']>, ParentType, ContextType>;
  learningMaterialId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requiredFunction: Resolver<Maybe<ResolversTypes['RequiredFunction']>, ParentType, ContextType>;
  requiredFunctionId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetMuscles: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tips: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  activeFlag: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  birthDate: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  credentials: Resolver<Maybe<ResolversTypes['UserCredential']>, ParentType, ContextType>;
  deletedAt: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstNameKana: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastNameKana: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type UserCredentialResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserCredential'] = ResolversParentTypes['UserCredential']> = {
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  passwordDigest: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resetAt: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Assignment: AssignmentResolvers<ContextType>;
  AssignmentExecution: AssignmentExecutionResolvers<ContextType>;
  BodyCondition: BodyConditionResolvers<ContextType>;
  Client: ClientResolvers<ContextType>;
  ClientProfile: ClientProfileResolvers<ContextType>;
  CurriculumUnit: CurriculumUnitResolvers<ContextType>;
  LearningMaterial: LearningMaterialResolvers<ContextType>;
  MidtermHealthPurpose: MidtermHealthPurposeResolvers<ContextType>;
  MonthlyActionGoal: MonthlyActionGoalResolvers<ContextType>;
  MonthlyHealthMilestone: MonthlyHealthMilestoneResolvers<ContextType>;
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
  UserCredential: UserCredentialResolvers<ContextType>;
};


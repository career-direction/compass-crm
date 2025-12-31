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
  userId: Scalars['Int']['input'];
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
  evaluationCriteriaUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  overview: Scalars['String']['input'];
  overviewUrl?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type CreateHomeworkAssignmentInput = {
  clientId: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  durationDays: Scalars['Int']['input'];
  frequency: Scalars['String']['input'];
  homeworkType: Scalars['String']['input'];
  materialUrl?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  priority: Scalars['String']['input'];
  sessionId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  trainerId: Scalars['Int']['input'];
};

export type CreateHomeworkRecordInput = {
  clientId: Scalars['Int']['input'];
  completionStatus: Scalars['String']['input'];
  difficulties?: InputMaybe<Scalars['String']['input']>;
  durationMinutes?: InputMaybe<Scalars['Int']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  homeworkId: Scalars['Int']['input'];
  performedAt: Scalars['String']['input'];
  repetitions?: InputMaybe<Scalars['Int']['input']>;
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

export type CreateMonthlyActionGoalInput = {
  actionType?: InputMaybe<Scalars['String']['input']>;
  frequencyPerWeek: Scalars['Int']['input'];
  goal: Scalars['String']['input'];
  monthlyHealthMilestoneId: Scalars['Int']['input'];
  targetMonth: Scalars['String']['input'];
};

export type CreateMonthlyHealthMilestoneInput = {
  asIs: Scalars['String']['input'];
  clientId: Scalars['Int']['input'];
  midtermHealthGoalId: Scalars['Int']['input'];
  results?: InputMaybe<Scalars['String']['input']>;
  target: Scalars['String']['input'];
  toBe?: InputMaybe<Scalars['String']['input']>;
  yearMonth: Scalars['String']['input'];
};

export type CreateRequiredFunctionInput = {
  curriculumUnitId: Scalars['Int']['input'];
  evaluationCriteria: Scalars['String']['input'];
  evaluationCriteriaUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  overview: Scalars['String']['input'];
  overviewUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSessionInput = {
  clientId: Scalars['Int']['input'];
  kind: Scalars['String']['input'];
  performedAt: Scalars['String']['input'];
  theme?: InputMaybe<Scalars['String']['input']>;
  trainerId: Scalars['Int']['input'];
};

export type CreateTrainerInput = {
  userId: Scalars['Int']['input'];
};

export type CreateTrainingMenuInput = {
  commonErrors?: InputMaybe<Array<Scalars['String']['input']>>;
  learningMaterialId?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  requiredFunctionId: Scalars['Int']['input'];
  targetMuscles?: InputMaybe<Array<Scalars['String']['input']>>;
  tips?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTreatmentMenuInput = {
  commonErrors?: InputMaybe<Array<Scalars['String']['input']>>;
  learningMaterialId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  requiredFunctionId: Scalars['Int']['input'];
  targetMuscles?: InputMaybe<Array<Scalars['String']['input']>>;
  tips?: InputMaybe<Scalars['String']['input']>;
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
  evaluationCriteriaUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  overviewUrl?: Maybe<Scalars['String']['output']>;
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

export type HomeworkAssignment = {
  __typename?: 'HomeworkAssignment';
  clientId: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  durationDays: Scalars['Int']['output'];
  frequency: Scalars['String']['output'];
  homeworkType: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  materialUrl?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  priority: Scalars['String']['output'];
  records: Array<HomeworkRecord>;
  sessionId: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  trainerId: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type HomeworkRecord = {
  __typename?: 'HomeworkRecord';
  clientId: Scalars['Int']['output'];
  completionStatus: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  difficulties?: Maybe<Scalars['String']['output']>;
  durationMinutes?: Maybe<Scalars['Int']['output']>;
  feedback?: Maybe<Scalars['String']['output']>;
  homeworkId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  performedAt: Scalars['String']['output'];
  repetitions?: Maybe<Scalars['Int']['output']>;
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
  createClientWithProfile: Client;
  createCurriculumUnit: CurriculumUnit;
  createHomeworkAssignment: HomeworkAssignment;
  createHomeworkRecord: HomeworkRecord;
  createLearningMaterial: LearningMaterial;
  createMidtermHealthPurpose: MidtermHealthPurpose;
  createMonthlyActionGoal: MonthlyActionGoal;
  createMonthlyHealthMilestone: MonthlyHealthMilestone;
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


export type MutationCreateClientWithProfileArgs = {
  input: CreateClientWithProfileInput;
};


export type MutationCreateCurriculumUnitArgs = {
  input: CreateCurriculumUnitInput;
};


export type MutationCreateHomeworkAssignmentArgs = {
  input: CreateHomeworkAssignmentInput;
};


export type MutationCreateHomeworkRecordArgs = {
  input: CreateHomeworkRecordInput;
};


export type MutationCreateLearningMaterialArgs = {
  input: CreateLearningMaterialInput;
};


export type MutationCreateMidtermHealthPurposeArgs = {
  input: CreateMidtermHealthPurposeInput;
};


export type MutationCreateMonthlyActionGoalArgs = {
  input: CreateMonthlyActionGoalInput;
};


export type MutationCreateMonthlyHealthMilestoneArgs = {
  input: CreateMonthlyHealthMilestoneInput;
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
  theme?: Maybe<Scalars['String']['output']>;
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
  clients: Array<Client>;
  curriculumUnits: Array<CurriculumUnit>;
  hello?: Maybe<Scalars['String']['output']>;
  homeworkAssignments: Array<HomeworkAssignment>;
  homeworkRecords: Array<HomeworkRecord>;
  learningMaterials: Array<LearningMaterial>;
  midtermHealthPurposes: Array<MidtermHealthPurpose>;
  monthlyActionGoals: Array<MonthlyActionGoal>;
  monthlyHealthMilestones: Array<MonthlyHealthMilestone>;
  requiredFunctions: Array<RequiredFunction>;
  sessions: Array<PtSession>;
  trainers: Array<Trainer>;
  trainingMenus: Array<TrainingMenu>;
  trainingTasks: Array<TrainingTask>;
  treatmentMenus: Array<TreatmentMenu>;
  treatmentTasks: Array<TreatmentTask>;
  users: Array<User>;
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


export type QueryClientsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurriculumUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHomeworkAssignmentsArgs = {
  clientId: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHomeworkRecordsArgs = {
  homeworkId: Scalars['Int']['input'];
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


export type QueryMonthlyActionGoalsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  monthlyHealthMilestoneId: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMonthlyHealthMilestonesArgs = {
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
};


export type QueryTrainingTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTreatmentMenusArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTreatmentTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type RequiredFunction = {
  __typename?: 'RequiredFunction';
  createdAt: Scalars['String']['output'];
  curriculumUnit?: Maybe<CurriculumUnit>;
  curriculumUnitId: Scalars['Int']['output'];
  evaluationCriteria: Scalars['String']['output'];
  evaluationCriteriaUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  overviewUrl?: Maybe<Scalars['String']['output']>;
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
  commonErrors?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  learningMaterial?: Maybe<LearningMaterial>;
  learningMaterialId?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  requiredFunction?: Maybe<RequiredFunction>;
  requiredFunctionId: Scalars['Int']['output'];
  targetMuscles?: Maybe<Array<Scalars['String']['output']>>;
  tips?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type TrainingTask = {
  __typename?: 'TrainingTask';
  contentId: Scalars['Int']['output'];
  contentType: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  reps?: Maybe<Scalars['Int']['output']>;
  sec?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type TreatmentMenu = {
  __typename?: 'TreatmentMenu';
  commonErrors?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  learningMaterial?: Maybe<LearningMaterial>;
  learningMaterialId?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  requiredFunction?: Maybe<RequiredFunction>;
  requiredFunctionId: Scalars['Int']['output'];
  targetMuscles?: Maybe<Array<Scalars['String']['output']>>;
  tips?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type TreatmentTask = {
  __typename?: 'TreatmentTask';
  contentId: Scalars['Int']['output'];
  contentType: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  sec?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  activeFlag: Scalars['Boolean']['output'];
  birthDate: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  credentials?: Maybe<UserCredentials>;
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

export type UserCredentials = {
  __typename?: 'UserCredentials';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  passwordDigest: Scalars['String']['output'];
  resetAt: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  Trainer = 'TRAINER'
}

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
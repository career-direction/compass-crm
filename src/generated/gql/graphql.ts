/* eslint-disable */
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
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

export type CreateClientInput = {
  userId: Scalars['String']['input'];
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

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
  PreferNotToSay = 'PREFER_NOT_TO_SAY'
}

export type Mutation = {
  __typename?: 'Mutation';
  createClient: Client;
  createSession: PtSession;
  createTrainer: Trainer;
  createUser: User;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateTrainerArgs = {
  input: CreateTrainerInput;
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
  clients: Array<Client>;
  hello?: Maybe<Scalars['String']['output']>;
  sessions: Array<PtSession>;
  trainers: Array<Trainer>;
  users: Array<User>;
};


export type QueryClientsArgs = {
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


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
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

export type CreateClientInput = {
  userId: Scalars['String']['input'];
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

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
  PreferNotToSay = 'PREFER_NOT_TO_SAY'
}

export type Mutation = {
  __typename?: 'Mutation';
  createClient: Client;
  createSession: PtSession;
  createTrainer: Trainer;
  createUser: User;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateTrainerArgs = {
  input: CreateTrainerInput;
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
  clients: Array<Client>;
  hello?: Maybe<Scalars['String']['output']>;
  sessions: Array<PtSession>;
  trainers: Array<Trainer>;
  users: Array<User>;
};


export type QueryClientsArgs = {
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


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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

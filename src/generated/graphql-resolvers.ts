import { GraphQLResolveInfo } from 'graphql';
import { Context } from '@/graphql/types';
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

export type CreateClientInput = {
  userId: Scalars['String']['input'];
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
  clients: Array<Client>;
  hello: Maybe<Scalars['String']['output']>;
  sessions: Array<PtSession>;
  trainers: Array<Trainer>;
  users: Array<User>;
};


export type QueryClientsArgs = {
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


export type QueryUsersArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Client: ResolverTypeWrapper<Client>;
  ClientProfile: ResolverTypeWrapper<ClientProfile>;
  CreateClientInput: CreateClientInput;
  CreateSessionInput: CreateSessionInput;
  CreateTrainerInput: CreateTrainerInput;
  CreateUserInput: CreateUserInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Gender: Gender;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  PTSession: ResolverTypeWrapper<PtSession>;
  PTSessionItem: ResolverTypeWrapper<PtSessionItem>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  SessionStatus: SessionStatus;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Trainer: ResolverTypeWrapper<Trainer>;
  TrainerProfile: ResolverTypeWrapper<TrainerProfile>;
  User: ResolverTypeWrapper<User>;
  UserCredentials: ResolverTypeWrapper<UserCredentials>;
  UserRole: UserRole;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Client: Client;
  ClientProfile: ClientProfile;
  CreateClientInput: CreateClientInput;
  CreateSessionInput: CreateSessionInput;
  CreateTrainerInput: CreateTrainerInput;
  CreateUserInput: CreateUserInput;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Mutation: Record<PropertyKey, never>;
  PTSession: PtSession;
  PTSessionItem: PtSessionItem;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  Trainer: Trainer;
  TrainerProfile: TrainerProfile;
  User: User;
  UserCredentials: UserCredentials;
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

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createClient: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<MutationCreateClientArgs, 'input'>>;
  createSession: Resolver<ResolversTypes['PTSession'], ParentType, ContextType, RequireFields<MutationCreateSessionArgs, 'input'>>;
  createTrainer: Resolver<ResolversTypes['Trainer'], ParentType, ContextType, RequireFields<MutationCreateTrainerArgs, 'input'>>;
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
  clients: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType, QueryClientsArgs>;
  hello: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessions: Resolver<Array<ResolversTypes['PTSession']>, ParentType, ContextType, QuerySessionsArgs>;
  trainers: Resolver<Array<ResolversTypes['Trainer']>, ParentType, ContextType, QueryTrainersArgs>;
  users: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, QueryUsersArgs>;
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
  Client: ClientResolvers<ContextType>;
  ClientProfile: ClientProfileResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  PTSession: PtSessionResolvers<ContextType>;
  PTSessionItem: PtSessionItemResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Trainer: TrainerResolvers<ContextType>;
  TrainerProfile: TrainerProfileResolvers<ContextType>;
  User: UserResolvers<ContextType>;
  UserCredentials: UserCredentialsResolvers<ContextType>;
};


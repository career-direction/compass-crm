export const typeDefs = `
  type Query {
    hello: String
    users: [User!]!
    clients: [Client!]!
    trainers: [Trainer!]!
    sessions: [PTSession!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    createClient(input: CreateClientInput!): Client!
    createTrainer(input: CreateTrainerInput!): Trainer!
    createSession(input: CreateSessionInput!): PTSession!
  }

  type User {
    id: String!
    email: String!
    name: String
    role: UserRole!
    createdAt: String!
    updatedAt: String!
  }

  type Client {
    id: String!
    userId: String!
    user: User!
    profile: ClientProfile
    sessions: [PTSession!]!
    createdAt: String!
    updatedAt: String!
  }

  type ClientProfile {
    id: String!
    clientId: String!
    firstName: String
    lastName: String
    phoneNumber: String
    dateOfBirth: String
    gender: Gender
    address: String
    emergencyContactName: String
    emergencyContactPhone: String
    medicalHistory: String
    fitnessGoals: String
    createdAt: String!
    updatedAt: String!
  }

  type Trainer {
    id: String!
    userId: String!
    user: User!
    profile: TrainerProfile
    sessions: [PTSession!]!
    createdAt: String!
    updatedAt: String!
  }

  type TrainerProfile {
    id: String!
    trainerId: String!
    firstName: String
    lastName: String
    phoneNumber: String
    dateOfBirth: String
    gender: Gender
    bio: String
    certifications: String
    specializations: String
    experience: Int
    createdAt: String!
    updatedAt: String!
  }

  type PTSession {
    id: String!
    clientId: String!
    trainerId: String!
    client: Client!
    trainer: Trainer!
    scheduledAt: String!
    duration: Int!
    status: SessionStatus!
    notes: String
    items: [PTSessionItem!]!
    createdAt: String!
    updatedAt: String!
  }

  type PTSessionItem {
    id: String!
    sessionId: String!
    exerciseName: String!
    sets: Int
    reps: Int
    weight: Float
    duration: Int
    notes: String
    createdAt: String!
    updatedAt: String!
  }

  enum UserRole {
    ADMIN
    TRAINER
    CLIENT
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
    PREFER_NOT_TO_SAY
  }

  enum SessionStatus {
    SCHEDULED
    IN_PROGRESS
    COMPLETED
    CANCELLED
  }

  input CreateUserInput {
    email: String!
    name: String
    role: UserRole!
  }

  input CreateClientInput {
    userId: String!
  }

  input CreateTrainerInput {
    userId: String!
  }

  input CreateSessionInput {
    clientId: String!
    trainerId: String!
    scheduledAt: String!
    duration: Int!
    notes: String
  }
`;

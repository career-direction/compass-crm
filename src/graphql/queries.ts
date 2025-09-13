import { gql } from 'urql';

// クエリ定義
export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      name
      role
      createdAt
      updatedAt
    }
  }
`;

export const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      userId
      user {
        id
        email
        name
      }
      profile {
        id
        firstName
        lastName
        phoneNumber
        dateOfBirth
        gender
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_TRAINERS = gql`
  query GetTrainers {
    trainers {
      id
      userId
      user {
        id
        email
        name
      }
      profile {
        id
        firstName
        lastName
        phoneNumber
        bio
        certifications
        specializations
        experience
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_SESSIONS = gql`
  query GetSessions {
    sessions {
      id
      scheduledAt
      duration
      status
      notes
      client {
        id
        user {
          name
        }
        profile {
          firstName
          lastName
        }
      }
      trainer {
        id
        user {
          name
        }
        profile {
          firstName
          lastName
        }
      }
      items {
        id
        exerciseName
        sets
        reps
        weight
        duration
        notes
      }
      createdAt
      updatedAt
    }
  }
`;

// ミューテーション定義
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      name
      role
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation CreateClient($input: CreateClientInput!) {
    createClient(input: $input) {
      id
      userId
      user {
        id
        email
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_TRAINER = gql`
  mutation CreateTrainer($input: CreateTrainerInput!) {
    createTrainer(input: $input) {
      id
      userId
      user {
        id
        email
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_SESSION = gql`
  mutation CreateSession($input: CreateSessionInput!) {
    createSession(input: $input) {
      id
      scheduledAt
      duration
      status
      notes
      client {
        id
        user {
          name
        }
      }
      trainer {
        id
        user {
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`;

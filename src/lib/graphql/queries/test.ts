import { gql } from '@apollo/client';

// テスト用の簡単なクエリ
export const GET_USERS = gql`
  query GetUsers {
    usersCollection {
      edges {
        node {
          id
          first_name
          last_name
          created_at
        }
      }
    }
  }
`;

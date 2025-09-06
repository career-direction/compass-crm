"use client";

import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_USERS = gql`
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

export function ApolloTest() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Apollo Client Test</h2>
      <p>Users count: {data?.usersCollection?.edges?.length || 0}</p>
      {data?.usersCollection?.edges?.map((edge: any) => (
        <div key={edge.node.id}>
          {edge.node.first_name} {edge.node.last_name}
        </div>
      ))}
    </div>
  );
}

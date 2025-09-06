import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const httpLink = createHttpLink({
  uri: `${supabaseUrl}/graphql/v1`,
  headers: {
    'apiKey': supabaseAnonKey,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

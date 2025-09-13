import { Client, cacheExchange, fetchExchange } from 'urql';

const isServerSide = typeof window === 'undefined';

export const urqlClient = new Client({
  url: isServerSide 
    ? 'http://localhost:3000/api/graphql'
    : '/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
  // SSRサポートのための設定
  suspense: false,
  requestPolicy: 'cache-first',
});

export default urqlClient;

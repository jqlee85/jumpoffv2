import ApolloClient from "apollo-boost";
import 'cross-fetch/polyfill';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';

// Set up cache.
const cache = new InMemoryCache();

// Set up cache persistence.
if (typeof window !== 'undefined'){
  persistCache({
    cache,
    storage: window.localStorage,
  });
}

// Set API Host
const API_HOST =
  process.env.NODE_ENV !== 'production'
    ? 'https://jumpoff.io/graphql'
    : 'http://localhost:3010';

// Create Apollo Client
const client = new ApolloClient({
  uri: API_HOST,
  ssrMode: true,
  cache
});

export default client

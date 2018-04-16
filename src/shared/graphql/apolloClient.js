import ApolloClient from "apollo-boost";
import 'cross-fetch/polyfill';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';

// Set up your cache.
const cache = new InMemoryCache();

// Set up cache persistence.
if (typeof window !== 'undefined'){
  persistCache({
    cache,
    storage: window.localStorage,
  });
}

const client = new ApolloClient({
  uri: "https://jumpoff.io/graphql",
  cache
});



export default client

import ApolloClient from "apollo-boost";
import 'cross-fetch/polyfill';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Set up cache.
const cache = new InMemoryCache({
  cacheRedirects: {
    Query: { 
      postBy: (_, {args}, {getCacheKey} ) => getCacheKey({ 
        __typename: 'Post', slug: args.slug 
      }) 
    }
  }
});

// Set API Host
const API_HOST =
  process.env.NODE_ENV !== 'production'
    ? 'https://jumpoff.io/graphql'
    : 'https://jumpoff.io/graphql';

// Create Apollo Client
const client = new ApolloClient({
  uri: API_HOST,
  ssrMode: true,
  cache
});

export default client

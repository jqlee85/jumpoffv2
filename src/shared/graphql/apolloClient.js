import ApolloClient from "apollo-boost";
import 'cross-fetch/polyfill';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';

// Set up cache.
const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case 'Post': return object.slug; // use `slug` as the primary key
      default: return object.id || object._id; // fall back to `id` and `_id` for all other types
    }
  },
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
  cache
});

export default client

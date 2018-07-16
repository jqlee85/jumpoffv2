import "babel-polyfill";
import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import client from '../shared/graphql/apolloClient'
import { BrowserRouter } from "react-router-dom";
import configureStore from "../shared/configureStore";
import App from "../shared/App";

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

persistCache({
  cache,
  storage: window.localStorage,
});

const store = configureStore(window.__initialData__);

hydrate(
  <ApolloProvider client={client} >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

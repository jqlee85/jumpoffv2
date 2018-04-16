import "babel-polyfill";
import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";

// import { ApolloClient, createNetworkInterface } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import client from '../shared/graphql/apolloClient'

import { BrowserRouter } from "react-router-dom";
import configureStore from "../shared/configureStore";
import App from "../shared/App";

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

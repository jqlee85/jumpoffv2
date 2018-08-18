import "babel-polyfill";
import React from "react";
import { hydrate } from "react-dom";
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import client from '../shared/graphql/apolloClient'
import { BrowserRouter } from "react-router-dom";
import App from "../shared/App";

hydrate(
  <ApolloProvider client={client} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

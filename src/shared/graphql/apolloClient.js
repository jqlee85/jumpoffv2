import ApolloClient from "apollo-boost";
// import fetch from 'node-fetch';
// import { createHttpLink } from 'apollo-link-http';
import 'cross-fetch/polyfill';


const client = new ApolloClient({
  uri: "https://jumpoff.io/graphql"
});




// import { gql } from 'graphql-tag';
// import { createNetworkInterface } from 'react-apollo'
// import { ApolloClient } from 'apollo-client';

// // https://wordpress.org/plugins/wp-jwt-auth/
// const networkInterface = createNetworkInterface({
//   uri: 'https://jumpoff.io/graphql',
//   opts: {
//     credentials: 'include'
//   }
// })

// const client = new ApolloClient({
//   networkInterface: networkInterface
// })

// networkInterface.useAfter([
//   {
//     applyAfterware ({ response }, next) {
//       if (response.status === 401) {
//         throw new Error('Unauthorized')
//       }
//       next()
//     }
//   }
// ])

export default client

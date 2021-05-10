import React from 'react';
import ReactDOM from 'react-dom';

import { 
  ApolloProvider, 
  ApolloClient, 
  createHttpLink, 
  InMemoryCache, 
  makeVar, 
  gql, 
} from "@apollo/client";


import { BrowserRouter } from "react-router-dom";

import App from './App';




const httpLink = createHttpLink({
  uri: "https://gol06p5m.api.sanity.io/v1/graphql/production/default"
});

export const typeDefs = gql`
extend type Query {
  userIsLoggedIn: Boolean!
}
`
export const userIsLoggedInVar = makeVar(!!localStorage.getItem('token'));

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        userIsLoggedIn: {          
          read() {
              return userIsLoggedInVar();         
         }
                },
        launches: {
          // ...field policy definitions...
        }
      }
    }
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs
});


ReactDOM.render(
  <ApolloProvider client={client}>
<BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>
  ,
  document.getElementById('root')
);


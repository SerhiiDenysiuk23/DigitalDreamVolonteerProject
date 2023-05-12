import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.uadna.art/graphql',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

<<<<<<< HEAD
const client = new ApolloClient({
  uri: 'https://api.uadna.art/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
  resolvers: {},
});

root.render(
  <ApolloProvider client={client}>
  <Provider store={store}>
    <App />
  </Provider>
  </ApolloProvider>
=======
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
>>>>>>> 4bd5764b982f1cb07a37b040af697d1fbbe53208
);

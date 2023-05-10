import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const client = new ApolloClient({
//   uri: 'https://api.uadna.art/graphql',
//   cache: new InMemoryCache(),
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: 'cache-and-network',
//     },
//   },
//   resolvers: {},
// });

root.render(
  // <ApolloProvider client={client}>
  <Provider store={store}>
    <App />
  </Provider>
  // </ApolloProvider>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjdgbw4h34l7j0185k94go7w3'
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();

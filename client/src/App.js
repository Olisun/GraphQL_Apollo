// Node_Mods
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
// ApolloProvider works like Redux. Wrap the app component in the provider and pass in the store (state).
import { ApolloProvider } from 'react-apollo';
import Container from 'react-bootstrap/Container';

// From App
import './App.css';
import SpaceXLogo from './SpaceXLogo.png';
import Launches from './components/Launches';


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <img
            src={SpaceXLogo}
            alt="SpaceX"
            style={{
              width: 300,
              display: 'block',
              margin: 'auto'
            }}
          />
        </div>
        <Launches />
      </ApolloProvider>
    );
  }
}

export default App;





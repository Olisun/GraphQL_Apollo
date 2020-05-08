// Node_Mods
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
// ApolloProvider works like Redux. Wrap the app component in the provider and pass in the store (state).
import { ApolloProvider } from 'react-apollo';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// From App
import './App.css';
import SpaceXLogo from './SpaceXLogo.png';
import Launches from './components/Launches';
import Launch from './components/Launch';


const client = new ApolloClient({
  uri: '/graphql'
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <img
              src={SpaceXLogo}
              alt="SpaceX"
              style={{
                width: 400,
                display: 'block',
                margin: 'auto'
              }}
            />
          </div>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;





import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import List from './List';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact : []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/listeContact/')
    .then(result => result.json())
    .then(results => this.setState({
      contact : results
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Contact Simplon</h1>
        <MuiThemeProvider>
          <Form action="http://localhost:8080/listeContact/add"/>
          <List contacts={this.state.contact}/>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;

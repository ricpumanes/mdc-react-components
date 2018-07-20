import React, { Component } from 'react';

import './App.scss';

import Input from './components/Input';


class App extends Component {
  render() {
    return (
      <div>
        <h1>basta</h1>
        
        <Input
          labelText="Username"
          id="username"
          classNameKey=".username"
          type="text"
          required
        />

        <Input
          labelText="Password"
          id="password"
          classNameKey=".password"
          type="text"
          required
        />

      </div>
    );
  }
}

export default App;

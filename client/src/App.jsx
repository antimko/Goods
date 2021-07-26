import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <h1>Hello world!</h1>
        <div className='container'></div>

        <MyForm />
      </div>
    );
  }
}

export default App;

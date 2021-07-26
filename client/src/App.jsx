import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';
import axios from 'axios';

class App extends Component {
  state = {};
  // componentDidMount() {
  //   console.log('app mounted');
  //   axios
  //     .get('http://localhost:4000/test/new')
  //     .then((result) => console.log(result.data))
  //     .catch((err) => console.log(err));
  // }
  handleNewPoint = async (placeNewDataForm) => {
    console.log('handleNewPlace');
    console.log(placeNewDataForm);
    const sendedResult = await axios.post(
      'http://localhost:4000/newpoint',
      placeNewDataForm
    );
    console.log('sendedResult:', sendedResult);
    console.log(sendedResult.data);
  };
  render() {
    return (
      <div className='App'>
        <div className='container'></div>

        <MyForm onNewPoint={this.handleNewPoint} />
      </div>
    );
  }
}

export default App;

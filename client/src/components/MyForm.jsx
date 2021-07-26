import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: '',
    features: '',
    price: '',
    category: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('siunciam');
    const placeNewDataForm = {
      name: this.state.name,
      features: this.state.features,
      price: this.state.price,
      category: this.state.category,
    };
    console.log(placeNewDataForm);
    this.props.onNewPoint(placeNewDataForm);
  };

  handleInput = (element) => {
    this.setState({ [element.target.name]: element.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} action=''>
        <div>
          <h4>Put the name of article or service</h4>
          <input
            className='form-control'
            onChange={this.handleInput}
            value={this.state.name}
            type='text'
            placeholder='name'
            name='name'
          />
        </div>
        <div>
          <h4>Write extra features</h4>
          <input
            className='form-control'
            onChange={this.handleInput}
            value={this.state.features}
            type='text'
            placeholder='features'
            name='features'
          />
        </div>
        <div>
          <h4>Price</h4>
          <input
            className='form-control'
            onChange={this.handleInput}
            value={this.state.price}
            type='number'
            placeholder='price'
            name='price'
          />
        </div>
        <div>
          <h4>Article or Service</h4>
          <input
            className='form-control'
            onChange={this.handleInput}
            value={this.state.category}
            type='text'
            placeholder='category'
            name='category'
          />
        </div>
        <select name='category' className='custom-select'>
          <option value='article'>Article</option>
          <option value='service'>Service</option>
        </select>
        <button type='submit'>Send</button>
      </form>
    );
  }
}

export default MyForm;

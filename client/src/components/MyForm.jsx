import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: '',
    features: '',
    price: '',
    category: '',
  };
  render() {
    return (
      <form action=''>
        <div>
          <h4>Put the name of article or service</h4>
          <input type='text' placeholder='name' name='name' />
        </div>
        <div>
          <h4>Write extra features</h4>
          <input type='text' placeholder='features' name='features' />
        </div>
        <div>
          <h4>Price</h4>
          <input type='text' placeholder='price' name='price' />
        </div>
        <div>
          <h4>Article or Service</h4>
          <input type='text' placeholder='category' name='category' />
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

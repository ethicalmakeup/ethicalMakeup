import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  componentDidMount(){
    axios({
      method: 'get',
      url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
      responseType: 'json',
      params: {
        format: 'json',
        product_tags: 'vegan'
      }
      

    }).then(response => {
      console.log(response);
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>Ethical Makeup</h1>
        <h2>Testing</h2>
        <p>Luke's addition</p>
        <p>This is a test - Talita</p>
      </div>
    );
  }
}

export default App;

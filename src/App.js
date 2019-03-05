import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Landing from './components/landing/Landing.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      userProduct: ''
      }
  }
  
  handleChange = (event) => {
    this.setState({
      userProduct: event.target.value
    })
  } 



  componentDidMount(){
    axios({
      method: 'get',
      url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
      responseType: 'json',
      params: {
        format: 'json',
        product_tags: 'vegan',
        product_type: this.state.userProduct
      }
      

    }).then(response => {

      console.log(response);
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <Landing onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;

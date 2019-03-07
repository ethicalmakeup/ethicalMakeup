import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Landing from './components/landing/Landing.js';
import Gallery from './components/gallery/Gallery.js';
import Details from './components/Details/Details.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      userProduct: '',
      userResults: [],
      chosenProductObject: ''
    }
  }
  
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      userProduct: event.target.value
    },
    () => {
      axios({
        method: 'GET',
        url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
        responseType: 'json',
        params: {
          format: 'json',
          product_tags: 'vegan',
          product_type: this.state.userProduct
        }
      }).then(response => {
        response = response.data;
        if (response.length === 0) {
          alert('Sorry, no products were found in this category')
        }
        this.setState({
          userResults: response
        });
      }).catch(function(error){
        alert('Server error. Try again later')
      })
    })      
  }

  handleClick = (chosenId) => {
    const chosenProductObject = this.state.userResults.find(function(element) {
      return (element.id === chosenId);
    })
    this.setState({
       chosenProductObject: chosenProductObject
    })
    // console.log(this.state.chosenProductObject)
  }
  

  render() {
    return (
      <div className="App">
        <header>
          <Landing handleChange={this.handleChange}/>
        </header>
        <main>
          <Gallery userResults={this.state.userResults} handleClick={this.handleClick}/>
          {this.state.chosenProductObject ? (<Details chosenProductObject={this.state.chosenProductObject}/>) : (null)}
        </main>
      </div>
    );
  }
}

export default App;

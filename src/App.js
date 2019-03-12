import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Landing from './components/Landing/Landing.js';
import Gallery from './components/Gallery/Gallery.js';
import Details from './components/Details/Details.js';
import Reviews from './components/Reviews/Reviews.js';
import Loader from './components/Loader/Loader.js';
import firebase from './firebase.js';
import { animateScroll as scroll } from 'react-scroll';
import swal from 'sweetalert';

class App extends Component {
	constructor() {
		super();
		this.state = {
			userProduct: '',
			userResults: [],
			chosenProductObject: '',
			reviews: [],
			isLoading: false
		};
	}

	scrollToBottom = () => {
		scroll.scrollToBottom(
    {
      duration: 2000
    }
  )};
  
  scrollTo = () => {
    scroll.scrollTo(705,
    {
      delay: 800,
      duration: 1500
    }  
    )};

	handleChange = (event) => {
		event.preventDefault();
		this.setState(
			{
				userProduct: event.target.value,
				chosenProductObject: '',
				isLoading: true
			},
			() => {
				axios({
					method: 'GET',
					url: 'https://makeup-api.herokuapp.com/api/v1/products.json',
					responseType: 'json',
					params: {
						format: 'json',
						product_tags: 'vegan',
						product_type: this.state.userProduct
					}
				})
					.then((response) => {
						response = response.data;
						if (response.length === 0) {
							swal({
								text: 'Sorry, no products were found in this category',
								icon: 'error'
							});
						}
						this.setState({
							userResults: response,
							isLoading: false
						});
					})
					.catch(function(error) {
						swal({
							text: 'Server Error. Please try again later.',
							icon: 'error'
						});
					});
			}
		);
	};

	handleClick = (chosenId) => {
		const chosenProductObject = this.state.userResults.find(function(element) {
			return element.id === chosenId;
		});
		this.setState(
			{
				chosenProductObject: chosenProductObject
			},
			() => {
				const dbRef = firebase.database().ref();
				dbRef.on('value', (snapshot) => {
					let reviews = snapshot.val();
					let newState = [];
					for (let review in reviews) {
						newState.push({
							id: reviews[review].id,
							name: reviews[review].name,
							buyAgain: reviews[review].buyAgain,
							reviewText: reviews[review].reviewText,
							date: reviews[review].date
						});
					}
					this.setState({
						reviews: newState.filter((review) => review.id === this.state.chosenProductObject.id)
					});
				});
			}
		);

		// console.log(this.state.chosenProductObject)
  };
  
  	round = (price) => {
    	return Number.parseFloat(price).toFixed(2);
	};

	handleKeyPress = (event, id) => {
		console.log(event)
		console.log(id)
		// if (code === 13) { 
		// 	console.log(code);
		// 	this.handleClick(id);
		// } 
	}

	render() {
		return (
			<div className="App">
				<header>
					<Landing handleChange={this.handleChange} scrollTo={this.scrollTo}/>
					{this.state.isLoading ? <Loader /> : null}
				</header>
				<main>
					<Gallery userResults={this.state.userResults} handleClick={this.handleClick} round={this.round} handleKeyPress={this.handleKeyPress}/>
					<section id="details">
						{this.state.chosenProductObject ? (
							<Details round={this.round} chosenProductObject={this.state.chosenProductObject} />
						) : null}
					</section>
					{this.state.chosenProductObject ? (
						<Reviews
							scroll={this.scrollToBottom}
							chosenProductObject={this.state.chosenProductObject}
							reviews={this.state.reviews}
						/>
					) : null}
				</main>
			</div>
		);
	}
}

export default App;

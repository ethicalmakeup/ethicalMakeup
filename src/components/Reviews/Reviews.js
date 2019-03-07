import React, { Component } from 'react';
import Form from '../Form/Form.js';
import firebase from '../../firebase.js';

class Reviews extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews:[],
            openForm: false
        };
    }

    handleOpenForm = () => {
        this.setState({
            openForm: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let dt = new Date();
        let date = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
        console.log(date);
        this.setState({
            date: date
        }, () => {
            const dbRef = firebase.database().ref();

            const review = {
                id: this.props.chosenProductObject.id,
                name: this.state.reviewName,
                buyAgain: this.state.buyAgain,
                reviewText: this.state.reviewText,
                date: this.state.date
            }
            dbRef.push(review);
        })  
    }

    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on('value', snapshot => {
            let reviews = snapshot.val();
            let newState = [];
            for (let review in reviews) {
                newState.push({
                    id: review,
                    name: reviews[review].name,
                    buyAgain: reviews[review].buyAgain,
                    reviewText: reviews[review].reviewText,
                    date: reviews[review].date
                });
            }

            // const filteredState = newState.filter(review => review.id === this.props.chosenProductObject.id);

            this.setState({
                reviews: newState
                // reviews: newState.filter(review => review.id === this.props.chosenProductObject.id)
            })

        })
    }

    render() {
        return (
            <div>
                <h2>Reviews</h2>
                {this.state.reviews.map(review => {
                    return (
                        <div>
                            <h3>Name: {review.name}</h3>
                            <p>Date: {review.date} </p>
                            <p>Would buy again? {review.buyAgain} </p>
                            <p>Review: {review.reviewText}</p>
                        </div>
                    )
                })}
                <button onClick={this.handleOpenForm}>Add a review</button>
                { this.state.openForm === true ? (<Form handleSubmit={this.handleSubmit}
                                                        handleFormChange={this.handleFormChange}/>) : (null)}
            </div>
        )
    }
}

export default Reviews;
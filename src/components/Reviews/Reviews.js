import React, { Component } from 'react';
import Form from '../Form/Form.js';
import firebase from '../../firebase.js';
import './Reviews.css';

class Reviews extends Component {
    constructor(props){
        super(props);
        this.state = {
            openForm: false
        };
    }

    // function to open review form
    handleOpenForm = () => {
        this.setState({
            openForm: true
        })
    }

    // function to submit user product review and save in Firebase
    handleSubmit = (e) => {
        e.preventDefault();

        let dt = new Date();
        let date = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
        // console.log(date);
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
        e.target.reset(); 
    }

    // function to take user input in order to populate the review object above, which then gets pushed to Firebase
    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="reviews">
                <div className="wrapper">
                    <h2>reviews</h2>
                    {this.props.reviews.length === 0 ? 
                        (<div className="review"><p>Be the first to review this product!</p></div>) :
                    (
                    this.props.reviews.map(review => {
                        
                        return (
                            <div className="review clearfix">
                                <h3>{review.name}</h3>
                                <p className="date">{review.date} </p>
                                <p className="choice">{review.buyAgain} </p>
                                <p><strong>Review</strong>: {review.reviewText}</p>
                            </div>
                        )}
                    ))}
                    <button className="button" onClick={() => {
                        this.handleOpenForm();
                        this.props.scroll() }} 
                        > Add a review</button>
                </div>
                <section className="form">
                {this.state.openForm === true ? (<Form handleSubmit={this.handleSubmit} handleFormChange={this.handleFormChange}/>) : (null)}
                </section>
            </div>
        )
    }
}

export default Reviews;
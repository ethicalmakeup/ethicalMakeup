import React, { Component } from 'react';
import Form from '../Form/Form.js';
import firebase from '../../firebase.js';

class Reviews extends Component {
    constructor(){
        super();
        this.state = {
            reviews:[],
            reviewId: '',
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
        const dbRef = firebase.database().ref();
        console.log(dbRef);
    }

    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Reviews</h2>
                <div>
                    <div>
                        <h3>Name: </h3>
                        <p>Date: </p>
                        <p>Review: </p>
                    </div>
                </div>
                <button onClick={this.handleOpenForm}>Add a review</button>
                { this.state.openForm === true ? (<Form handleSubmit={this.handleSubmit}
                                                        handleFormChange={this.handleFormChange}/>) : (null)}
            </div>
        )
    }
}

export default Reviews;
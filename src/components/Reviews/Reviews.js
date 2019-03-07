import React, { Component } from 'react';
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
                <button>Add a review</button>
                <form>
                    <input type="text">This is a form</input>
                </form>) : (null)}
            </div>
        )
    }
}

export default Reviews;
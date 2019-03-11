import React from 'react';
import './Form.css';
import Clearfix from 'react-clearfix';

const Form = (props) => {
    return (
        <form className="formReview wrapper"  action="submit" onSubmit={props.handleSubmit}>
            <div className="formName">
                <label for="reviewName">Name:</label>
                <input required type="text" id="reviewName" name="reviewName" placeholder="Your name" onChange={props.handleFormChange}></input>
            </div>
            <div className="buyAgain">
                <p>Would you buy this product again?</p>

                <div className="buyAgainAnswer">
                    <input required type="radio" id="yes" name="buyAgain" value="Would buy again" onChange={props.handleFormChange}></input>
                    <label for="yes">Yes</label>
                </div>
                <div className="buyAgainAnswer">
                    <input required type="radio" id="no" name="buyAgain" value="Would not buy again" onChange={props.handleFormChange}></input>
                    <label for="no">No</label>
                </div>
            </div>
            <div className="formCommentField">
                <label for="reviewText">Review:</label>
                <textarea required id="reviewText" placeholder="Your review..." cols="20" rows="5" name="reviewText" 
                        onChange={props.handleFormChange}></textarea>
            </div>
            <div className="formButton">
                <input type="submit" value="Submit Review" className="button"></input>
            </div>
            <Clearfix />
        </form>
    )
}

export default Form;
import React from 'react';
import './Form.css';

const Form = (props) => {
    return (
        <form className="formReview wrapper clearfix" action="submit" onSubmit={props.handleSubmit}>
            <div className="formName">
                <label htmlFor="reviewName" className="visuallyHidden">Name:</label>
                <input required type="text" id="reviewName" name="reviewName" placeholder="Your name" onChange={props.handleFormChange}></input>
            </div>
            <div className="buyAgain">
                <p>Would you buy this product again?</p>
                <div className="buyAgainAnswer">
                    <input required type="radio" id="yes" name="buyAgain" value="Would buy again" onChange={props.handleFormChange}></input>
                    <label htmlFor="yes">Yes</label>
                    <input required type="radio" id="no" name="buyAgain" value="Would not buy again" onChange={props.handleFormChange}></input>
                    <label htmlFor="no">No</label>
                </div>
            </div>
            <div className="formCommentField">
                <label htmlFor="reviewText" className="visuallyHidden">Review:</label>
                <textarea required id="reviewText" placeholder="How was your experience with this product?" cols="20" rows="5" name="reviewText" 
                        onChange={props.handleFormChange}></textarea>
            </div>
            <div className="formButton">
                <input type="submit" value="Submit Review" className="button"></input>
            </div>
        </form>
    )
}

export default Form;
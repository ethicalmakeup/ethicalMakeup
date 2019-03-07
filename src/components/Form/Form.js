import React from 'react';

const Form = (props) => {
    return (
        <form action="submit" onSubmit={props.handleSubmit}>
            <label for="reviewName">Name:</label>
            <input type="text" id="reviewName" placeholder="Your name"></input>
            <div>
                <p>Would you buy this product again?</p>
                <input type="radio" id="yes" name="buyAgain" value="yes" checked></input>
                <label for="yes">Yes</label>
                <input type="radio" id="no" name="buyAgain" value="no"></input>
                <label for="no">No</label>
            </div>
            
            <label for="reviewText">Review:</label>
            <textarea id="reviewText" placeholder="Your review..." cols="20" rows="5"></textarea>
            <input type="submit" value="Submit Review"></input>
        </form>
    )
}

export default Form;
import React from 'react';
import './Details.css';
// import Reviews from '../Review/Review.js';

const Details = (props) => {

	return (
        <section key={props.chosenProductObject.id}>
            <div>
                <img src={props.chosenProductObject.image_link} alt={props.chosenProductObject.name}/>
            </div>
            <div>
                <h2>{props.chosenProductObject.name}</h2>
                <p>${props.chosenProductObject.price}</p>
                <p>{props.chosenProductObject.description}</p>
                {props.chosenProductObject.rating ? (<p>Rating: {props.chosenProductObject.rating}/5</p>):(<p>Rating: Not available</p>)}
                <a href={props.chosenProductObject.product_link} target="_blank">Buy Now</a>
            </div>
            <div>
                {props.chosenProductObject.product_colors.map(color => {
                    return (
                        <div>
                            <p>{color.colour_name}</p>
                            <span style={{background: color.hex_value}}></span>
                        </div>
                    )
                })}
            </div>
            {/* <Reviews /> */}
        </section>
    )
}
  

export default Details;

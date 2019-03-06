import React from 'react';
import './Details.css';

const Details = (props) => {

	return (
        <section>
            <div>
                <img src={props.chosenProductObject.image_link} alt={props.chosenProductObject.name}/>
            </div>
            <div>
                <h2>{props.chosenProductObject.name}</h2>
                <p>{props.chosenProductObject.price}</p>
                <p>{props.chosenProductObject.description}</p>
                <p>{props.chosenProductObject.rating}</p>
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
        </section>
    )
}
  

export default Details;

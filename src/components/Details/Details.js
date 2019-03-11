import React from 'react';
import './Details.css';
import Clearfix from 'react-clearfix';
import image1 from '../Gallery/image1.jpg';
import image2 from '../Gallery/image2.jpg';
// import Reviews from '../Review/Review.js';

const Details = (props) => {
	return (
        <div className='description-card' key={props.chosenProductObject.id}>
            <div className='image'>
                {props.chosenProductObject.id === 1043 ? 
                    ( <img src={image1} alt={props.chosenProductObject.name} />)
                        : props.chosenProductObject.id === 1042 ? 
                        ( <img src={image2} alt={props.chosenProductObject.name} /> ) 
                        :( <img src={props.chosenProductObject.image_link} alt={props.chosenProductObject.name}/>)}
            </div>
            <div className='description'>
                <div>
                    <h2>{props.chosenProductObject.name}</h2>
                    <p>${props.chosenProductObject.price}</p>
                    <p>{props.chosenProductObject.description}</p>
                    {props.chosenProductObject.rating ? (<p>Rating: {props.chosenProductObject.rating}/5</p>):(<p>Rating: Not available</p>)}
                    <a href={props.chosenProductObject.product_link} target="_blank" rel="noopener noreferrer">Buy Now</a>
                </div>
                <div>
                    {props.chosenProductObject.product_colors.map(color => {
                        return (
                            <div className='colors'>
                                <p className='colour-name'>{color.colour_name}</p>
                                <span className='colour' style={{background: color.hex_value}}></span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Clearfix />
        </div>
    )
}
  

export default Details;

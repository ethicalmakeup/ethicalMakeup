import React from 'react';
import './Details.css';
import Clearfix from 'react-clearfix';
import image1 from '../Gallery/image1.jpg';
import image2 from '../Gallery/image2.jpg';
// import Reviews from '../Review/Review.js';

const Details = (props) => {
	return (
        <div className='description-card clearfix wrapper' key={props.chosenProductObject.id}>
            <div className='image'>
                {props.chosenProductObject.id === 1043 ? 
                    ( <img src={image1} alt={props.chosenProductObject.name} />)
                        : props.chosenProductObject.id === 1042 ? 
                        ( <img src={image2} alt={props.chosenProductObject.name} /> ) 
                        :( <img src={props.chosenProductObject.image_link} alt={props.chosenProductObject.name}/>)}
            </div>
            <Clearfix />
            <div className='description'>
                <div>
                    <h2>{props.chosenProductObject.name}</h2>
                    {props.chosenProductObject.price > 0 ? (<p>${props.round(props.chosenProductObject.price)}</p>) : (<p className="none">Price is unavailable</p>)}
                    
                    <p className="descriptionText">{props.chosenProductObject.description}</p>
                    {props.chosenProductObject.rating ? (<p>Rating: {props.chosenProductObject.rating}/5</p>):(<p className="noRating">Rating: <span>Unavailable</span></p>)}
                    <div className="clearfix">
                        {props.chosenProductObject.product_colors.map(color => {
                            return (
                                <div className='colours'>
                                    <span className='colour' style={{ background: color.hex_value }}></span>
                                </div>
                            )
                        })}
                    </div>
                    <a href={props.chosenProductObject.product_link} target="_blank" rel="noopener noreferrer" className="button">Buy Now</a>
                </div>
            <Clearfix />
            </div>
        </div>
    )
}
  

export default Details;

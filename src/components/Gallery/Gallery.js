import React from 'react';
import './Gallery.css';
import Clearfix from 'react-clearfix';
import image1 from './image1.jpg';
import image2 from './image2.jpg';

const Gallery = (props) => {
    return (
        <section>
            <ul>
                {props.userResults.map(result => {
                    return (
                        <li key={result.id} onClick={() => {props.handleClick(result.id)}}>
                            {(result.id === 1043) ? (<img src={image1} alt={result.name} />)
                            : (result.id === 1042) ? <img src={image2} alt={result.name} />
                            : <img src={result.image_link} alt={result.name}/>}
                            <h2>{result.name}</h2>
                            {result.price > 0 ? (<p>${result.price}</p>) : (<p>Price not available</p>)}
                        </li> 
                    )
                })}
                <Clearfix />
            </ul>
        </section>
    )
}

export default Gallery;


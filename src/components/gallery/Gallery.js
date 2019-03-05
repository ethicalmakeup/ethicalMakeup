import React from 'react';

const Gallery = (props) => {
    return (
        <section>
            <ul>
                {props.userResults.map(result => {
                    return (
                        <li key={result.id} onClick={props.handleClick}>
                            <img src={result.image_link} alt={result.name} />
                            <h2>{result.name}</h2>
                            {result.price > 0 ? (<p>${result.price}</p>) : (<p>Price not available</p>)}
                        </li> 
                    )
                })}
            </ul>
        </section>
    )
}

export default Gallery;
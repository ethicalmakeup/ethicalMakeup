import React from 'react';
import './Gallery.css';
import Clearfix from 'react-clearfix';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import { Link, animateScroll as scroll } from 'react-scroll';

const round = (price) => {
	return Number.parseFloat(price).toFixed(2);
};

const Gallery = (props) => {
	return (
		<section className="gallery wrapper" id="gallery">
			<ul>
				{props.userResults.map((result) => {
					return (
						<li key={result.id}>
							<Link
								to="details"
								spy={true}
								smooth={true}
								offset={-30}
								duration={800}
								onClick={() => {
									props.handleClick(result.id);
								}}
							>
								{result.id === 1043 ? (
									<div className="imageContainer">
										<img src={image1} alt={result.name} />
									</div>
								) : result.id === 1042 ? (
									<div className="imageContainer">
										<img src={image2} alt={result.name} />
									</div>
								) : (
									<div className="imageContainer">
										<img src={result.image_link} alt={result.name} />
									</div>
								)}
								<div>
									<h2 className="title">{result.name}</h2>
									{result.price > 0 ? (
										<p className="price">${result.price}</p>
									) : (
										<p className="none">Price is unavailable</p>
									)}
								</div>
								{/* {result.price.split('.')[1].length ? (<p>${result.price.toFixed(2)}</p>) : (null)} */}
								{/* trying to make all the prices with only 1 decimal place display 2 decimal places */}
							</Link>
						</li>
					);
				})}
				<Clearfix />
			</ul>
		</section>
	);
};

export default Gallery;

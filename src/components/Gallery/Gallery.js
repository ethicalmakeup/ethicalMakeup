import React from 'react';
import './Gallery.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import { Link } from 'react-scroll';

const Gallery = (props) => {

	return (
		<section className="gallery wrapper" id="gallery">
			<ul className="clearfix">
				{props.userResults.map((result) => {
					return (
						<li key={result.id} tabIndex="0" onKeyPress={(e) => props.handleKeyPress(e, result.id)}>
							<Link
								to="details"
								spy={true}
								smooth={true}
								offset={-30}
								duration={1300}
								onClick={(event) => {
									props.handleClick(result.id)
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
										<p className="price">${props.round(result.price)}</p>
									) : (
										<p className="none">Price is unavailable</p>
									)}
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Gallery;

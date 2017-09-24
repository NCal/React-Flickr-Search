import React from 'react';

const Images = (props) => {
	return (
		<div className="photo_container">
			{props.images.map(function(image, i){
				return <div className="outer_image" key={i}>
					<a href={image.link} target="_blank">
						<img className="image" src={image.media.m} alt=""/>
					</a>
				</div>
			})}
		</div> 
	)
}	

export default Images;
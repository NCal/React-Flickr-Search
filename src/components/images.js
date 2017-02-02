import React, { Component } from 'react';

class Images extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		// console.log(this.props.name+' mounted');
	}
	render() {
		if (this.props.search !== ""){
			return (
				<div className="photo_container">
					{this.props.images.map(function(thang, i){
						return <div className="outer_image" key={i}>
							<a href={thang.link} target="_blank">
								<img className="image" src={thang.media.m} alt=""/>
							</a>
						</div>
					})}
				</div> 
				)
			}  
			else { return (
					<div>
						<div></div>
					</div>
					) 
				}
		}	
}

Images.defaultProps = {
	name: 'Images'
};


export default Images;
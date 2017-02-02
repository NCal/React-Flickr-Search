import React, { Component } from 'react';
// import $ from "jquery";

class My_input extends Component {
	constructor(props) {
		super(props);
			this.onFiddle = this.onFiddle.bind(this);
	}
	componentDidMount() {
		// console.log(this.props.name+' mounted');
	}
	onFiddle(e){
		// console.log(e.target.value);
		this.props.onChange(e.target.value);
	}
	render() {
		return (<div>
					<input 
						className="search_input" 
						onChange={this.onFiddle}type="text" 
						placeholder="Begin typing to search through Flickr's most recent uploads."/>
				</div>
		)
	}
}

My_input.defaultProps = {
	name: 'input'
};


export default My_input;
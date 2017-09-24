import React, { Component } from 'react';

export default class MyInput extends Component {
	constructor(props) {
		super(props);
	}
	onFiddle = (e) => {
		this.props.onChange(e.target.value);
	}
	render = () => {
		return (<div>
					<input 
						className="search_input" 
						onChange={this.onFiddle} type="text" 
						placeholder="Begin typing to search through Flickr's most recent uploads."/>
				</div>
		)
	}
}

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Column } from 'react-foundation';
// import axios from 'axios';
import Images from '../components/images.js';
import MyInput from '../components/input.js';


import {setSearch, setImages} from '../actions/index.js';

class App extends Component {
  constructor(props) {
      super(props);
  }

  handle_input = (e) => {
    this.props.setSearch(e)
    setTimeout(this.getJSON, 20);
  }

  getJSON = () => {
      var self = this;
        $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', 
          {tags: self.props.search, 
          format: "json"},
          function(results){
              var images = results.items;
              // self.setState({ images });
              self.props.setImages(images)
        });
  }

  render = () => {
      return (
        <div>
        <div className="application">
          <Row className="display">
            <Column  large={12}>
                <h4>Search: Flickr Public API</h4>
                <MyInput onChange={this.handle_input} />
                <h1 className="search_title">{this.props.search}</h1>
                <Images images={this.props.images} search={this.props.search}/>
            </Column>
          </Row>
          </div>
        </div>)
  }
}

function mapStateToProps(state) {
  return {search: state.search, images: state.images}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      setSearch: setSearch, 
      setImages: setImages
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(App);

// PROPS 
App.defaultProps = {
  name:'APP',
  kind: 'Parent'
};

App.propTypes = {
  name: React.PropTypes.string,
  kind: React.PropTypes.string.isRequired
}


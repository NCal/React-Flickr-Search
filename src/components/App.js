import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Row, Column } from 'react-foundation';
import Foundation from 'react-foundation';
import Images from './images.js';
import My_input from './input.js';

class App extends Component {
  constructor(props, context) {
      super(props, context);
      this.getJSON = this.getJSON.bind(this);
      this.handle_input = this.handle_input.bind(this);
      // STATE
      this.state = {
        name: 'public',
        words: '',
        images: [],
        search: ''
      };
  }

  componentDidMount() {
    // console.log('Component ' + this.props.name + ' Mounted');
  }

  handle_input(e){
    // console.log('handle input event!',e);
    this.setState({search: e });
    setTimeout(this.getJSON, 20);
  }

  getJSON(){
      var self = this;
        // console.log('in getjson',self.state.search);
        $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', 
          {tags: self.state.search, 
          format: "json"},
          function(results){
              var images = results.items;
              self.setState({images: images });
              // console.log(self.state);
        });
  }

  render(){
    return (
      <div>
      <div className="application">
        <Row className="display">
          <Column  large={12}>
              <h4>Search: Flickr Public API</h4>
              <My_input onChange={this.handle_input} />
              <h1 className="search_title">{this.state.search}</h1>
              <Images images={this.state.images} search={this.state.search}/>
          </Column>
        </Row>
        </div>
      </div>)
  }
}

// PROPS 
App.defaultProps = {
  name:'APP',
  kind: 'Parent'
};

App.propTypes = {
  name: React.PropTypes.string,
  kind: React.PropTypes.string.isRequired
}

export default App;
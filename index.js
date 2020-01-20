import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Parent} from './parent'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
     <Parent></Parent>
    );
  }
}

render(<App />, document.getElementById('root'));

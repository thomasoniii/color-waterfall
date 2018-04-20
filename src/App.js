import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Blob from './Blob';

class App extends Component {
  render() {
    return (
      <div>
        <div>This is a fast proof-of-concept to play around with changing HSV color values to show closeness of relationships
        of children in a tree.</div>
        <div>Click on the colored divs to add children, which{"'"}ll crack their hue values in half. Each step down
        also decreases the saturation by 10% down to a minimum of 10%.</div>
        <Blob start={0} end={360} saturation={100} brightness={100} width={1500} height={40} orientation={1}/>
      </div>
    );
  }
}

export default App;

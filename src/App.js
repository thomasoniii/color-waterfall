import React, { Component } from 'react';
import './App.css';

import Blob from './Blob';

class App extends Component {
  render() {
    return (
      <div>
        <p>This is a fast proof-of-concept to play around with changing HSV color values to show closeness of relationships
        of children in a tree.</p>
        <p>Click on the colored divs to add children, which{"'"}ll crack their hue values in half. Each step down
        also decreases the brightness by 5% down to a minimum of 15%.</p>
        <p>The hope is to create hierarchical structures which are grouped by color - so you can see the relationship of
        a child with a parent farther up its lineage, while simultaneously distinguishing neighbors - closer relatives (siblings,
        cousins) should be more closely colored.</p>
        <p>Note that colors are recycled - so you may end up with reddish children on two different parts of the hierarchy. The hope
        is that they are far enough distanced from each other that the user won't assume they're related. The only significant color
        relationships should be parental.</p>
        <Blob start={0} end={360} saturation={100} brightness={100} width={100} height={5} orientation={1}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Blob from './Blob';

class App extends Component {
  render() {
    return (
      <div>
        <div>Click on the colored divs to add children, which{"'"}ll crack their hue values in half. Each step down
        also decreases the brightness by 10% down to a darkest of 10%.</div>
        <Blob start={0} end={360} depth={100} width={1000} height={25}/>
      </div>
    );
  }
}

export default App;

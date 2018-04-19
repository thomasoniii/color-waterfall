import React, { Component } from 'react';

export default class Blob extends Component {

  state = { kids : 0 }

  constructor(props) {
    super();
    this.addKid = this.addKid.bind(this);
  }

  addKid() {
    this.setState({kids : this.state.kids + 1});
  }

  renderKids() {
    let ret = [];

    if (! this.state.kids) { return null };

    const slice = (this.props.end - this.props.start) / this.state.kids;
    
    for (let i = 0; i < this.state.kids; i++) {
      const start = this.props.start + i * slice;
      const end = start + slice;

      ret.push(
        <div style={{float:'left'}} key={i}>
          <Blob
            start={start}
            end={end}
            depth = {Math.max(this.props.depth - 10, 10)}
            width={this.props.width / this.state.kids}
            height={this.props.height}
          />
        </div>
      );
    }
    return ret;
  }

  render() {

    const { start, end, depth, width, height } = this.props;

    return (
      <div>
        <div onClick = { this.addKid }
          style={{boxSizing : 'border-box', width : `${width}px`, height : `${height}px`, backgroundColor : `hsl(${start + (end - start) / 2}, ${depth}%, 50%)`, border : '1px solid black'}}>
        </div>
        { this.renderKids() }
      </div>
    )
  }
}

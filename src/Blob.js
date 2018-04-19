import React, { Component } from 'react';

export default class Blob extends Component {

  state = { kids : 0 }

  constructor(props) {
    super();
    this.addKid = this.addKid.bind(this);
  }

  addKid() {
    this.setState({kids : Math.max(this.state.kids + 1, 2)});
  }

  renderKids() {
    let ret = [];

    if (! this.state.kids) { return null };

    const slice = (this.props.end - this.props.start) / this.state.kids;
    const sliceStart = slice * (this.state.kids > 1 ? .25 : 0);
    const sliceWidth = slice * (this.state.kids > 1 ? .75 : 1);
    const kidWidth = this.props.width / this.state.kids;

    if (kidWidth < 1 || 2 * this.state.kids > this.props.width ) { return null }

    for (let i = 0; i < this.state.kids; i++) {
      const start = this.props.start + sliceStart + i * sliceWidth;
      const end = start + sliceWidth;

      ret.push(
        <div style={{float:'left'}} key={i}>
          <Blob
            start={start}
            end={end}
            saturation={100}
            brightness = {Math.max(this.props.brightness - 5, 15)}
            width={kidWidth}
            height={this.props.height}
          />
        </div>
      );
    }
    return ret;
  }

  render() {

    const { start, end, saturation, brightness, width, height } = this.props;
    const hue = start + (end - start) / 2;

    return (
      <div>
        <div onClick = { this.addKid }
          style={{boxSizing : 'border-box', width : `${width}px`, height : `${height}px`, backgroundColor : `hsl(${hue}, ${saturation}%, ${brightness}%)`, border : '1px solid black'}}>
        </div>
        { this.renderKids() }
      </div>
    )
  }
}

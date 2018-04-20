import React, { Component } from 'react';

export default class Blob extends Component {

  state = { kids : 0 }

  constructor(props) {
    super();
    this.addKid = this.addKid.bind(this);
  }

  addKid() {
    this.setState({kids : Math.max(this.state.kids + 1, 1)});
  }

  nextSaturation(saturation, offset) {
    let next = saturation - 5 * offset;
    while (next < 55) { next += 50 };
    return next;
  }

  nextBrightness(brightness) {
    let next = Math.max( Math.min(brightness - 5, 75), 15);
    return next;
  }

  renderKids() {
    let ret = [];

    if (! this.state.kids) { return null };

    const slice = (this.props.end - this.props.start) / this.state.kids ;
    const sliceStart = 0;//slice * (this.state.kids > 1 ? .1 : 0);
    const sliceWidth = slice;//slice * (this.state.kids > 1 ? .9 : 1);
    const kidWidth = this.props.width / this.state.kids;

    if (kidWidth < 1 || 2 * this.state.kids > this.props.width ) { return null }

    for (let i = 0; i < this.state.kids; i++) {
      let start, end;

      if (this.props.orientation == 1) {
        start = this.props.start + sliceStart + i * sliceWidth;
        end = start + sliceWidth;
      }
      else {
        end = this.props.end - ( sliceStart + i * sliceWidth );
        start = end - sliceWidth;
      }

      ret.push(
        <div style={{float:'left'}} key={i}>
          <Blob
            start={start}
            end={end}
            saturation={ this.nextSaturation(this.props.saturation, i)}
            brightness = {this.nextBrightness(this.props.brightness)}
            width={kidWidth}
            height={this.props.height}
            orientation = { this.props.orientation === 1 ? -1 : 1 }
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
      <div style={{width : `${width}px`}}>
        <div onClick = { this.addKid }
          style={{boxSizing : 'border-box', width : `${width}px`, height : `${height}px`, backgroundColor : `hsl(${hue}, ${saturation}%, ${brightness}%)`, border : '1px solid black'}}>
        </div>
        { this.renderKids() }
      </div>
    )
  }
}

import React, { Component } from "react";

const style = {
  background: "transparent"
};

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draw: false,
      x: -10,
      y: -10
    };
    this.draw = false;
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineWidth = 10;
    console.log(this.ctx);
  }
  yesDraw = () => {
    // this.setState({ ...this.state, draw: true });
    this.draw = true;
  };

  mouseCoordinates = e => {
    // console.log(this.state.draw);
    // console.log(e);
    if (this.draw) {
      this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
      this.drawing();
    }
  };

  noDraw = () => {
    // this.setState({ ...this.state, draw: false });
    this.draw = false;
  };

  drawing = () => {
    // this.setState({ x, y, ...this.state });
    this.ctx.beginPath();
    this.ctx.arc(this.state.x, this.state.y, 10, 0, 2 * Math.PI);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
  };

  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          onMouseDown={this.yesDraw}
          onMouseMove={this.mouseCoordinates}
          onMouseOut={this.noDraw}
          onMouseUp={this.noDraw}
          style={style}
          width={640}
          height={425}
        />
      </div>
    );
  }
}

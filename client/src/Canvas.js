import React, { Component } from "react";
import circuitPhoto from "./photos/circuit.png";
const style = {
  canvas: {
    background: "transparent"
  },
  pic: {
    display: "none"
  },
  btn: {
    backgroundColor: "#b266b2",
    fontSize: "16px",
    fontWeight: 600,
    border: "none",
    width: "100px",
    height: "50px"
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "space-between"
  }
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
    console.log(this.refs.image);
    this.refs.image.onload = () => {
      this.ctx.drawImage(this.refs.image, 0, 0);
    };
  }
  yesDraw = () => {
    // this.setState({ ...this.state, draw: true });
    this.draw = true;
  };

  mouseCoordinates = e => {
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
    this.ctx.beginPath();
    this.ctx.arc(this.state.x, this.state.y, 10, 0, 2 * Math.PI);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
  };

  //returns: Location of Image!
  screenshot = () => {
    let imgData = this.canvas.toDataURL("image/png");
    return imgData;
  };

  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.refs.image, 0, 0);
    this.setState({ x: -10, y: -10 });
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
          style={style.canvas}
          width={700}
          height={425}
        />
        <img ref="image" src={circuitPhoto} alt="pic" style={style.pic} />
        <div style={style.btnWrapper}>
          <button style={style.btn} onClick={this.clear}>
            Clear
          </button>
          <button style={style.btn}>Submit</button>
        </div>
      </div>
    );
  }
}

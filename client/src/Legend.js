import React, { Component } from "react";
import diode from "./photos/diode.png";
import dcvolt from "./photos/dcvolt.png";
import inductor from "./photos/inductor.png";
import resistor from "./photos/resistor.png";
import capacitor from "./photos/capacitor.png";
import andgate from "./photos/andgate.png";
import orgate from "./photos/orgate.png";
import "./Legend.css";

const styles = {
  image: {
    position: "absolute",
    botton: "0",
    width: "100px"
  }
};

export class Legend extends Component {
  constructor(props) {
    super(props);
    this.icons = [
      diode,
      dcvolt,
      inductor,
      resistor,
      capacitor,
      andgate,
      orgate
    ];
    this.iconsName = [
      "Diode",
      "DC Volt",
      "Inductor",
      "Resistor",
      "Capacitor",
      "And Gate",
      "Or Gate "
    ];
    this.state = {};
  }

  onHover = () => {
    this.setState({});
  };
  render() {
    return (
      <div>
        {this.icons.map((val, i) => (
          <div onClick={this.onHover} className="dropdown">
            <img height={50} src={val} />
            <div>{this.iconsName[i]}</div>
          </div>
        ))}
      </div>
    );
  }
}

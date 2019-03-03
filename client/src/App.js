import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import "./App.css";

import { Canvas } from "./Canvas";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
      left: false
    };
  }

  handleButtonClick = () => {
    fetch("http://localhost:3001/test", {
      mode: "cors"
    })
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ test: data.message }));
  };

  toggleDrawer = bool => () => {
    this.setState({ left: bool });
  };

  render() {
    return (
      <div className="app">
        <button className="menu" onClick={this.toggleDrawer(true)}>
          Menu
        </button>
        <header className="kinnekt-header">
          <h1 className="app-title">Kinnekt</h1>
          <p>
            This webapp aims to help you learn about circuits without having to
            get the hardware yourself.
          </p>
        </header>

        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div class="side-bar">
            <ul>
              <li>Exercise #1</li>
              <li>Exercise #2</li>
              <li>Exercise #3</li>
            </ul>
          </div>
        </Drawer>
        <div className="centered-container">
          <div className="exercise-wrapper">
            <div className="exercise">
              {console.log(this.state.test)}
              <Canvas />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

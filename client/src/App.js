import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import "./App.css";
import Modal from "./Modal";
import { Canvas } from "./Canvas";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
      left: false,
      showModal: false
    };
    this.toggleModal.bind(this);
  }

  toggleModal = e => {
    this.setState({ showModal: !this.state.showModal });
  };

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
        <div>
          {this.state.showModal ? (
            <Modal>
              <button id="xbutton" onClick={this.toggleModal}>
                X
              </button>
              <h1>Exercise 1</h1>
              <p>
                Series vs Parallel Add an additional lightbulb and a second
                switch to control it. Remember, the lightbulb you added should
                work irrespective of whether the initial given switch is closed.{" "}
              </p>
            </Modal>
          ) : null}
        </div>
        <button className="btn-app menu" onClick={this.toggleDrawer(true)}>
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
              <Canvas
                showCanvas={this.state.showCanvas}
                handleInstru={this.toggleModal}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Card from "@material-ui/core/Card";
import "./App.css";
import Modal from "./Modal";
import { Canvas } from "./Canvas";
import { Legend } from "./Legend";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
      left: false,
      showModal: false,
      rightAnswer: null,
      rightAnswerCount: 0,
    };
    this.toggleModal.bind(this);
  }

  toggleModal = e => {
    this.setState({ showModal: !this.state.showModal });
  };

  toggleAnswerModal = () => {
    this.setState({ rightAnswer: null });
  }

  toggleModal = e => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleButtonClick = () => {
    if (this.state.rightAnswerCount % 2 == 0) {
      this.setState({ rightAnswer: true });
    } else {
      this.setState({ rightAnswer: false });
    }

    this.setState({ rightAnswerCount: this.state.rightAnswerCount + 1 });
    fetch("http://localhost:3001/test", {
      mode: "cors"
    })
      .then(response => {
        return response.json();
      });
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

          {(this.state.rightAnswer !== null) ? (
            this.state.rightAnswer ? (
              <Modal>
                <button className='answer-modal-x-button' id="xbutton" onClick={this.toggleAnswerModal}>
                  X
                </button>
                <div className='answer-text-container'>
                  Correct!
                </div>
              </Modal>
            ) : (
              <Modal>
                <button className='answer-modal-x-button' id="xbutton" onClick={this.toggleAnswerModal}>
                  X
                </button>
                <div className='answer-text-container'>
                  Incorrect. Try again!
                </div>
              </Modal>
            )
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
                handleSubmit={this.handleButtonClick}
              />
            </div>
            <Card>
              <Legend />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

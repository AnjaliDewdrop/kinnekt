import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import "./App.css";

import circuitPhoto from './photos/circuit-decorations.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
      left: false
    };
  }

  handleButtonClick = () => {
    fetch('http://localhost:3001/test', {
      mode: 'cors'
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
        <button onClick={this.toggleDrawer(true)}>
          <img
            height="30"
            width="30"
            src="https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png"
          />
        </button>
        <header className="kinnekt-header">
          <h1 className="app-title">Kinnekt</h1>
          <p>
            This webapp aims to help you learn about circuits
            without having to get the hardware yourself.
          </p>
        </header>

        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            bleeh
          </div>
          <div>Lesson1</div>
        </Drawer>

        <div className='centered-container'>
          <div className='side-bar'>
            <ul>
              <li>
                Exercise #1
              </li>
              <li>
                Exercise #2
              </li>
              <li>
                Exercise #3
              </li>
            </ul>
          </div>
          <div className='exercise-wrapper'>
            <div className="exercise">
              {console.log(this.state.test)}
              {/* {!(this.state.test) ? (
                <img id='circuit-photo' src={circuitPhoto}/>
              ) : <p>{this.state.test}</p>} */}
              <img id='circuit-photo' src={circuitPhoto}/>
            </div>
            <div className='button-wrapper'>
              <button id='submit-button' onClick={this.handleButtonClick} >
                  Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

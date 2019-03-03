import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
      left: false
    };
  }

  handleButtonClick = () => {
    console.log("GOT HERE");
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
        <button onClick={this.toggleDrawer(true)}>
          <img
            height="30"
            width="30"
            src="https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png"
          />
        </button>
        <header className="kinnekt-header">
          <h1 className="app-title">Kinnekt</h1>
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
        <div>
          <div className="exercise">
            <button className="button" onClick={this.handleButtonClick}>
              Click here
            </button>
            {console.log(this.state.test)}
            {!this.state.test ? <p>Got here</p> : <p>{this.state.test}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

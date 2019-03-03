import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
    };
  }

  handleButtonClick = () => {
    fetch('http://localhost:3001/test', {
      mode: 'cors'
    })
    .then(response => { return response.json() })
    .then(data => this.setState({ test: data.message }))
  }

  render() {
    return (
      <div className="app">
        <header className="kinnekt-header">
          <h1 className="app-title">Kinnekt</h1>
        </header>
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
              {!(this.state.test) ? (
                <p>Got here</p>
              ) : <p>{this.state.test}</p>}
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

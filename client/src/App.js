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
    console.log('GOT HERE')
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
        <div>
          <div className="exercise">
            <button className='button' onClick={this.handleButtonClick} >
              Click here
            </button>
            {console.log(this.state.test)}
            {!(this.state.test) ? (
              <p>Got here</p>
            ) : <p>{this.state.test}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

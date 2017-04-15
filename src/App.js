import React, { Component } from 'react';
import logo from './logo.svg';
import hexes from './hexes.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={hexes} className="App-logo" alt="logo"/>
          <h2>Coding With Davis Cook</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld/>
      </div>
    );
  }
}

class HelloWorld extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        name: 'Anonymous'
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    alert(`Hello ${this.state.name}!`);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <p className="App-intro">
          Hello {this.state.name}!
        </p>
      </div>
    )
  }
}

export default App;

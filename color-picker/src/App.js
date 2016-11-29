import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Color Picker</h2>
        </div>
        <p className="App-converter">
          <h3>Pick your favorite swatch</h3>
          
          <h4>or</h4>
          <h3>Enter a color code</h3>
          <form>
            <select>
              <option selected value="Hex">Hex</option>
              <option value="RGB">RGB</option>
            </select>
            <label>
              
               <input type="text" name="hex" />
            </label>
            <input type="Submit" value="Pick!" />
          </form>
        </p>
      </div>
    );
  }
}

export default App;

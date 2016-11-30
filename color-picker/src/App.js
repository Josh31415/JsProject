import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
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
        <div className="App-converter">
          <h3>Pick your favorite swatch</h3>
          <Grid>
            <Row className="show-grid App-swatch-grid">
              <Col className="App-swatch-col-1" xs={2} md={2}></Col>
              <Col className="App-swatch-col-2" xs={2} md={2}></Col>
              <Col className="App-swatch-col-3" xs={2} md={2}></Col>
              <Col className="App-swatch-col-4" xs={2} md={2}></Col>
              <Col className="App-swatch-col-5" xs={2} md={2}></Col>
            </Row>
          </Grid>
        </div>
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
      </div>
    );
  }
}

export default App;

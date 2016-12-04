import React, { Component } from 'react';
import {Button, Cell, Grid, Radio, RadioGroup, Textfield} from 'react-mdl';
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
              <Cell className="App-swatch-col-1" col={1.5} shadow={2} >#0000ff</Cell>
              <Cell className="App-swatch-col-2" col={1.5} shadow={2}>#008000</Cell>
              <Cell className="App-swatch-col-3" col={1.5} shadow={2}>#ffff00</Cell>
              <Cell className="App-swatch-col-4" col={1.5} shadow={2}>#ffa500</Cell>
              <Cell className="App-swatch-col-5" col={1.5} shadow={2}>#ff0000</Cell>
            </Grid>
          </div>
          <p>
            <Button raised accent ripple>Pick</Button>
          </p>
          <div>
            <h4>or</h4>
            <h3>Enter a color code</h3>
          </div>
          <div>
            <RadioGroup name="demo" value="opt1" >
              <Radio value="opt1" className="App-left-right-padding">Hex</Radio>
              <Radio value="opt2">RGB</Radio>
            </RadioGroup>
            <Textfield name="hex" label="Enter color value" floatingLabel  className="App-padded"/>
          </div>
          <p>
            <Button raised accent ripple>Pick</Button>
          </p>
        </div>
    );
  }
}

export default App;

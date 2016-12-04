import React, { Component } from 'react';
import {Button, Cell, Grid, Radio, RadioGroup, Textfield} from 'react-mdl';
import logo from './logo.png';
import './App.css';

function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Color Picker</h2>
    </div>
  )
}

function SubmitButton() {
  return (
    <p>
      <Button raised accent ripple>Pick</Button>
    </p>
  )
}

class SwatchPicker extends Component {
  render() {
    return (
      <div>
        <h3>Pick your favorite swatch</h3>
        <Grid>
          <Cell className="App-swatch-col-1" col={1.5} shadow={2}>Material Blue 500</Cell>
          <Cell className="App-swatch-col-2" col={1.5} shadow={2}>Material Green 500</Cell>
          <Cell className="App-swatch-col-3" col={1.5} shadow={2}>Material Yellow 500</Cell>
          <Cell className="App-swatch-col-4" col={1.5} shadow={2}>Material Orange 500</Cell>
          <Cell className="App-swatch-col-5" col={1.5} shadow={2}>Material Red 500</Cell>
        </Grid>
        <SubmitButton/>
      </div>
    )
  }
}

class ColorCodePicker extends Component {
  render() {
    return (
      <div>
        <h3>Enter a color code</h3>
        <RadioGroup name="demo" value="opt1" >
          <Radio className="App-left-right-padding" value="opt1">Hex</Radio>
          <Radio value="opt2">RGB</Radio>
        </RadioGroup>
        <Textfield name="hex" label="Enter color value" floatingLabel/>
        <SubmitButton/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <SwatchPicker/>
          <h4>or</h4>
          <ColorCodePicker/> 
        </div>
    );
  }
}

export default App;

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
  constructor() {
    super();
    this.state ={
      shadows: Array(5).fill(0)
    }
  }

  changeSelected(value) {
    const shadows = this.state.shadows.slice();
    // Only show a shadow on the selected Swatch
    for (let i = 0; i < shadows.length; i++) {
      if (i===value) {
        shadows[i]=5
      }else{
        shadows[i]=0
      }
    }
    this.setState({shadows: shadows});
  }

  renderSwatch(className, value, text) {
    if (this.state.shadows[value]===0) {
      //Return a Cell without a shadow property to work around a known bug with shadow={0} (see issue #364)
      return(
        <Cell
          className={className}
          col={1.5}
          onClick={() => {this.changeSelected(value)}}>
          {text}
        </Cell>
      )
    }else{
      return(
        <Cell 
          className={className}
          col={1.5} 
          shadow={this.state.shadows[value]}
          onClick={() => {this.changeSelected(value)}}>
            {text}
        </Cell>
      )
    }
  }

  render() {
    return (
      <div>
        <h3>Pick your favorite swatch</h3>
        <Grid>
          {this.renderSwatch("App-swatch-col-1", 0, "Material Blue 500")}
          {this.renderSwatch("App-swatch-col-2", 1, "Material Green 500")}
          {this.renderSwatch("App-swatch-col-3", 2, "Material Yellow 500")}
          {this.renderSwatch("App-swatch-col-4", 3, "Material Orange 500")}
          {this.renderSwatch("App-swatch-col-5", 4, "Material Red 500")}
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

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import logo from './logo.png';
import './App.css';

let red = 50;
let green = 50;
let blue = 50;

class App extends Component {

    constructor() {
        super();
        this.drawCanvas = this.drawCanvas.bind(this);
    }
    
    drawCanvas() {
        let ctx = this.refs.canvas.getDOMNode();
        ctx.save();
        ctx.clearRect(0, 0, 50,50);
        ctx.fillStyle = 'rgb(red,green,blue)';
        ctx.refresh();
        ctx.getDOMNode();
    }
       
    changeRed(event){
        red = {value: event.target.value};
    }
    
    changeGreen(event){ 
        green = {value: event.target.value}; 
    }
        
    changeBlue(event){
        blue = {value: event.target.value};
    }

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
              <Col className="App-swatch-col-1" xs={2} md={2}>#0000ff</Col>
              <Col className="App-swatch-col-2" xs={2} md={2}>#008000</Col>
              <Col className="App-swatch-col-3" xs={2} md={2}>#ffff00</Col>
              <Col className="App-swatch-col-4" xs={2} md={2}>#ffa500</Col>
              <Col className="App-swatch-col-5" xs={2} md={2}>#ff0000</Col>
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
                <input type="text" name="Red" style={{color: 'red'}} Width={50} onChange={this.changeRed} />
                <input type="text" name="Green" style={{color: 'green'}} onChange={this.changeGreen} />
                <input type="text" name="Blue" style={{color: 'blue'}} onChange={this.changeBlue} />
          </label>
          <input type="Submit" value="Pick!" />
            <canvas ref="canvas" draw={this.drawCanvas} width={400} height={400} realtime={true} className="App-ColorCanvas"></canvas>
        </form>
      </div>
    );
  }
}

export default App;

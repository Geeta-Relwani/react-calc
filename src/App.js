import React,{ Component} from 'react';
import './App.css';
import Button from './Components/Button.js'
import Input from './Components/Input.js'
import Clear from './Components/Clear'

class App extends Component{
constructor(props){
  super(props);
  this.state ={
    input: "",
    previousNumber: "",
    nextNumber: "",
    currentNumber: "",
    operator: "",
  }
}

addToInput = val =>{
  this.setState({
    input: this.state.input+val,
  })
}

addZeroToInput = val =>{
//if input is not empty that is there is a number before zero
if(this.state.input !== ""){
  this.setState({
    input: this.state.input+val,
  })
}
}

addDecimal = val =>{
  // add if there is no decimal already present
  if(this.state.input.indexOf(".") === -1){
    this.setState({
      input: this.state.input+val,
    })
  }
}

clearInput = ()=>{
  this.setState({
    input: "",
  })
}

add = ()=>{
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "plus";
};

sub = ()=>{
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "sub";
};

multiply = ()=>{
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "multiply";
};

divide = ()=>{
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "divide";
};
evaluate= ()=>{
  this.state.currentNumber = this.state.input;
  
  if(this.state.operator == "plus"){
    this.setState({
      input:
      parseInt(this.state.previousNumber)+
      parseInt(this.state.currentNumber)
    })
  }

  else if(this.state.operator == "sub"){
    this.setState({
      input:
      parseInt(this.state.previousNumber)-
      parseInt(this.state.currentNumber)
    })
  }

  if(this.state.operator == "multiply"){
    this.setState({
      input:
      parseInt(this.state.previousNumber)*
      parseInt(this.state.currentNumber)
    })
  }

  if(this.state.operator == "divide"){
    this.setState({
      input:
      parseInt(this.state.previousNumber)/
      parseInt(this.state.currentNumber)
    })
  }
}

  render(){
    return(
      <div className="App">
        <div className="calc-wraper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className ="row">
            <Button handleClick = {this.addToInput}>7</Button>
            <Button handleClick = {this.addToInput}>8</Button>
            <Button handleClick = {this.addToInput}>9</Button>
            <Button id="operator" handleClick={this.divide}>/</Button>
          </div>
          <div className ="row">
            <Button handleClick = {this.addToInput}>4</Button>
            <Button handleClick = {this.addToInput}>5</Button>
            <Button handleClick = {this.addToInput}>6</Button>
            <Button id="operator"handleClick={this.multiply}>*</Button>
          </div>
          <div className ="row">
            <Button handleClick = {this.addToInput}>1</Button>
            <Button handleClick = {this.addToInput}>2</Button>
            <Button handleClick = {this.addToInput}>3</Button>
            <Button id="operator" handleClick={this.add}>+</Button>
          </div>
          <div className ="row">
            <Button handleClick = {this.addDecimal}>.</Button>
            <Button handleClick= {this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button id="operator" handleClick={this.sub}>-</Button>
          </div>
          <div className="row">
            <Clear handleClear={this.clearInput}/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;

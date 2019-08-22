import React,{ Component} from 'react';
import './App.css';
import Button from './Components/Button.js'
import Input from './Components/Input.js'
import Clear from './Components/Clear'

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="calc-wraper">
          <div className="row">
            <Input></Input>
          </div>
          <div className ="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button id="operator">/</Button>
          </div>
          <div className ="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button id="operator">*</Button>
          </div>
          <div className ="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button id="operator">+</Button>
          </div>
          <div className ="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button id="operator">-</Button>
          </div>
          <div className="row">
            <Clear/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;

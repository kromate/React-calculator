import React, { Component } from 'react'
import Button from './Button';
import ClearButton from './ClearButton';

export class Calculator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input:''
    }
  }

   addInput = (val)=>{
    this.setState({
      input: this.state.input + val
    })
  }
   clear = (val)=>{
    this.setState({
      input: ''
    })
  }
   equal = ()=>{
    this.setState({
      input: eval(this.state.input)
    })
  }
  
  render() {
  const  {input} = this.state
    return (
      <div>
        <div className='screen'>{input}</div>
        <div className='row'>
          <Button handleClick={this.addInput}>7</Button>
          <Button handleClick={this.addInput}>8</Button>
          <Button handleClick={this.addInput}>9</Button>
          <Button handleClick={this.addInput}>/</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addInput}>4</Button>
          <Button handleClick={this.addInput}>5</Button>
          <Button handleClick={this.addInput}>6</Button>
          <Button handleClick={this.addInput}>x</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addInput}>1</Button>
          <Button handleClick={this.addInput}>2</Button>
          <Button handleClick={this.addInput}>3</Button>
          <Button handleClick={this.addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addInput}>0</Button>
          <Button handleClick={this.addInput}>.</Button>
          <Button handleClick={this.equal}>=</Button>
          <Button handleClick={this.addInput}>-</Button>
        </div>
        <div className='row'>
          <ClearButton handleClick={this.clear}/>
          {/* <Button className='clear' onClick={() => setInput('')}>clear</Button> */}
        </div>

      </div>
    );
  }
}

export default Calculator




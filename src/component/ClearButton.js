import React from 'react'
import './Button.css'

function ClearButton(props) {

  return (
    <button onClick={() => props.handleClick()}  className='clear'>
      Clear
    </button> 
  ) 
}

export default ClearButton

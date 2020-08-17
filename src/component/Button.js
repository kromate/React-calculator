import React from 'react'
import './Button.css'

function Button(props) {
  const isOperator = val => {
    return !isNaN(val) || val === '.' || val === "=";
  }

  return (
    <button onClick={()=>props.handleClick(props.children)}  className={isOperator(props.children) ? '' 
    : 'operator'}>
      {props.children}
    </button>
  )
}

export default Button

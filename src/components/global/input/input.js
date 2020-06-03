import React from 'react'
import './input.css'

export default function Input(props) {

  return (
    <input className={`specializedInput ${props.customClass}`} onChange={props.onChange} value={props.value} style={props.customStyle}>

    </input>
  )
}

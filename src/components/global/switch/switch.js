import React from 'react'
import './switch.css'

export default function Switch(props) {
  return (
    <div className='switchContainer' style={props.additionalStyles} onMouseDown={props.onSwitch}>
      <div className='switchSlider' style={{ left: props.switched ? 0 : 35 }} />
      <p className='switchX'>&#10003;</p>
      <p className='switchCheckmark'>&#10005;</p>
    </div>
  )
}
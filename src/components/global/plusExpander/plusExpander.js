import React from 'react'
import './plusExpander.css'

export default function PlusExpander(props) {
  return (
    <div className={`plusExpanderContainer ${props.customClass}`} onMouseDown={props.onClick}>
      <div className={`plusExpanderElement ${props.colorClass}`} style={props.expandedState ? null : { transform: 'translate(-50%, -50%) rotate(180deg)' }} />
      <div className={`plusExpanderElement ${props.colorClass}`} style={props.expandedState ? null : { transform: 'translate(-50%, -50%) rotate(90deg)' }} />
    </div>
  )
}

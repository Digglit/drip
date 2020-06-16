import React from 'react'
import './checkbox.css'

export default function Checkbox(props) {
  return (
    <div className={`checkboxContainer ${props.customClass}`} onMouseDown={props.onMouseDown}>
      <p className={`checkboxCheckmark ${props.checked ? '' : 'checkboxCheckmarkDisabled'}`}>&#10004;</p>
    </div>
  )
}

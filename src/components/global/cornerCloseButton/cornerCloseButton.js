import React from 'react'
import './cornerCloseButton.css'

export default function CornerCloseButton(props) {
  return (
    <div className='cornerCloseButtonContainer' onMouseDown={props.onClick} style={props.customStyle}>
      <p className='cornerCloseButtonText' style={props.customTextStyle}>&#10005;</p>
    </div>
  )
}

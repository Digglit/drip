import React from 'react'
import './cornerCloseButton.css'

export default function CornerCloseButton(props) {
  return (
    <div className='cornerCloseButtonContainer' onMouseDown={props.onClick}>
      <p className='cornerCloseButtonText'>&#10005;</p>
    </div>
  )
}

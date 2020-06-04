import React from 'react'
import './moduleHeader.css'

export default function ModuleHeader(props) {
  return (
    <div className='moduleHeaderContainer'>
      <h1 className='moduleHeaderText'>{props.header}</h1>
      <button className='switchX moduleHeaderCloseButton' onMouseDown={() => props.closeButton()}>&#10005;</button>
    </div>
  )
}

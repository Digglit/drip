import React from 'react'
import './numberIncrementer.css'

export default function NumberIncrementer(props) {
  return (
    <div className='numberIncrementerContainer'>
      <button className='numberIncrementerButton primaryButton' onMouseDown={() => props.adjustNumberHandler(0)}>&#8722;</button>
      <div className='numberIncrementerTextContainer'>
        <p className='numberIncrementerText'>{props.value}</p>
      </div>
      <button className='numberIncrementerButton primaryButton' onMouseDown={() => props.adjustNumberHandler(1)}>&#65291;</button>
    </div>
  )
}

import React from 'react'
import Input from '../../../../../../global/input/input'
import './itemModifierOption.css'

export default function ItemModifierOption(props) {
  return (
    <div className='itemModifierOptionContainer'>
      <p className='itemModifierOptionText'>{props.name}</p>
      <Input value={props.value} onChange={props.onChange} customClass={'itemModifierOptionInput'}/>
      <p className='cornerCloseButtonText itemModifierOptionX'>&#10005;</p>
    </div>
  )
}

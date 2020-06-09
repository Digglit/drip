import React from 'react'
import NumberInput from '../../../../../../global/numberInput/numberInput'
import './itemModifierOption.css'

export default function ItemModifierOption(props) {
  return (
    <div className='itemModifierOptionContainer'>
      <p className='itemModifierOptionText'>{props.name}</p>
      <NumberInput value={props.value} onChange={props.onChange} customClass={'itemModifierOptionInput'} />
      <p className='cornerCloseButtonText itemModifierOptionX'>&#10005;</p>
    </div>
  )
}

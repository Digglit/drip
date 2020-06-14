import React from 'react'
import './orderItemModule.css'

export default function OrderItemModule(props) {
  return (
    <div className='orderItemModuleContainer'>
      <h1 className='orderItemModuleQuantityText'>{props.quantity}x</h1>
      <div>
        <p className='orderItemModulePrimaryText' style={{ marginRight: '5px' }}>{props.name}</p>
        <p className='orderItemModulePrimaryText'>({props.section})</p>
        <p className='orderItemModuleSecondaryText'>Description: {props.description}</p>
      </div>
    </div>
  )
}

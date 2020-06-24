import React from 'react'
import './portalPageOrder.css'
import { connect } from 'react-redux'
import { displayConfirmAction } from '../../../../../../actions/portal'

function PortalPageOrder(props) {

  const confirmActionHandler = () => {
    let confirmation = {
      header: 'Confirm',
      body: 'Move order for Maria Meyer to working?',
      confirmFunction: null,
      confirmAction: true,
    }
    props.displayConfirmAction(confirmation)
  }

  return (
    <div className='portalPageOrderContainer'>
      <div className='portalPageOrderTitleContainer'>
        <p className='portalPageOrderTitleText'>{props.orderType ? 'Working Order' : 'New Order'}</p>
      </div>
      <div className='portalPageOrderHeaderContainer'>
        <p className='portalPageOrderText portalPageOrderTopText'>Name: Maria Meyer</p>
        <p className='portalPageOrderText'>Order Number: 100147</p>
      </div>
      <div className='portalPageOrderBodyContainer'>
        {props.items.map((value, index) => (
          <div className='portalPageOrderBodyItem' key={index} style={{top: `${index * 50}px`}}>
            <p className='portalPageOrderItemText'>{value}</p>
          </div>
        ))}
      </div>
      <div className='portalPageOrderFooterContainer'>
        <button className='portalPageOrderFooterButton secondaryButton'>View Details</button>
        <button className='portalPageOrderFooterButton primaryButton' onMouseDown={confirmActionHandler}>Move To Working</button>
      </div>
    </div>
  )
}

export default connect(null, { displayConfirmAction })(PortalPageOrder)
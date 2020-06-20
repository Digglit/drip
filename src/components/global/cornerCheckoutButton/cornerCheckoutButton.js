import React from 'react'
import { connect } from 'react-redux'
import './cornerCheckoutButton.css'

const CornerCheckoutButton = (props) => {
  return (
    <div className='cornerCheckoutButtonContainer' style={props.customStyle}>
      {/* <button className='cornerCheckoutButton' onMouseDown={props.checkout}>Checkout</button> */}
      <p className='cornerCheckoutCartTotal'>Cart (4): $35.50</p>
      <div className='cornerCheckoutDivider' />
      <p className='cornerCheckoutButtonText' style={props.customTextStyle} onMouseDown={props.onClick}>&#10005;</p>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CornerCheckoutButton)

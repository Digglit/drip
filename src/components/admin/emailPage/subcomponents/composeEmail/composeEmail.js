import React, { Component } from 'react'
import { connect } from 'react-redux'
import './composeEmail.css'
import { composeEmailHandler, displayCouponDetailsHandler } from '../../../../../actions'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import Input from '../../../../global/input/input'

class ComposeEmail extends Component {
  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.composeEmailHandler(0)} style={{ zIndex: this.props.zIndex }} />
        <div className={`composeEmailContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={'Compose New Message'} closeButton={() => this.props.composeEmailHandler(0)} />
          <div className='composeEmailInformationContainer'>
            <p className='composeEmailText'>From: </p>
            <Input placeholder={'Address'} customClass={'composeEmailInput'} />
            <button className='composeEmailButton primaryButton' onMouseDown={() => this.props.displayCouponDetailsHandler(this.props.zIndex + 10)}>Create New Coupon</button>
            <p className='composeEmailText'>To: </p>
            <Input placeholder={'Recipient'} customClass={'composeEmailInput'} />
            <p className='composeEmailText'>Subject: </p>
            <Input placeholder={'Ex: Exclusive discount'} customClass={'composeEmailInput'} />
            <p className='composeEmailText composeEmailBodyText'>Body: </p>
            <textarea className='composeEmailBodyArea' />
          </div>
          <div className='composeEmailFooterContainer'>
            <button className='secondaryButton composeEmailFooterButton' onMouseDown={() => this.props.composeEmailHandler(0)}>Cancel</button>
            <button className='primaryButton composeEmailFooterButton'>Send</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.composeEmail.open,
  zIndex: state.composeEmail.zIndex
})

export default connect(mapStateToProps, { composeEmailHandler, displayCouponDetailsHandler })(ComposeEmail)

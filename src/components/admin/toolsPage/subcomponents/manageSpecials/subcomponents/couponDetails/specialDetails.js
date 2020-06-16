import React, { Component } from 'react'
import './specialDetails.css'
import { connect } from 'react-redux'
import { displaySpecialDetailsHandler } from '../../../../../../../actions'
import ModuleHeader from '../../../../../../global/moduleHeader/moduleHeader'
import Input from '../../../../../../global/input/input'
import DropDown from '../../../../../../global/dropDown/dropDown'

class specialDetails extends Component {
  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displaySpecialDetailsHandler(10)} style={{ zIndex: this.props.zIndex }} />
        <div className={`couponDetailsContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={'Create New Special'} closeButton={() => this.props.displaySpecialDetailsHandler(10)} />
          <div className='couponDetailsBodyContainer'>
            <div className='couponDetailsBodyItemContainer'>
              <p className='couponDetailsBodyText'>Special Name:</p>
              <Input customClass={'couponDetailsBodyInput'} />
            </div>
            <div className='couponDetailsBodyItemContainer'>
              <p className='couponDetailsBodyText'>Special Type:</p>
              <Input customClass={'couponDetailsBodyInput'} />
            </div>
            <div className='couponDetailsBodyItemContainer'>
              <p className='couponDetailsBodyText'>Amount:</p>
              <Input customClass={'couponDetailsBodyInput'} />
            </div>
            <div className='couponDetailsBodyItemContainer'>
              <p className='couponDetailsBodyText'>Min Order Price:</p>
              <Input customClass={'couponDetailsBodyInput'} />
            </div>
            <div className='couponDetailsBodyItemContainer'>
              <p className='couponDetailsBodyText'>Min Order Quantity:</p>
              <Input customClass={'couponDetailsBodyInput'} />
            </div>
            <div className='couponDetailsBodyItemContainer'>
              <p className='couponDetailsBodyText'>Amount Reedemed: 0</p>
            </div>
            <div className='couponDetailsBodyItemContainer'>
              <p className='couponDetailsBodyText'>Start Date:</p>
              <Input customClass={'couponDetailsBodyInput'} />
            </div>
            <div className='couponDetailsBodyItemContainer'>
              <p className='couponDetailsBodyText'>Expiration Date:</p>
              <Input customClass={'couponDetailsBodyInput'} />
            </div>
            <div className='couponDetailsBodyItemContainer' style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
              <p className='couponDetailsBodyText' style={{ display: 'inline-block', marginRight: '10px' }}>Applies To Items:</p>
              <button className='secondaryButton couponDetailsAddItemButton'>Add Items</button>
            </div>
          </div>
          <div className='couponDetailsFooterContainer'>
            <button className='secondaryButton couponDetailsFooterButton' onMouseDown={() => this.props.displaySpecialDetailsHandler(10)}>Cancel</button>
            <button className='primaryButton couponDetailsFooterButton'>Save Special</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.specialDetails.open,
  zIndex: state.specialDetails.zIndex,

})

export default connect(mapStateToProps, { displaySpecialDetailsHandler })(specialDetails)

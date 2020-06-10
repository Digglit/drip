import React, { Component } from 'react'
import './couponDetails'
import { connect } from 'react-redux'
import { displayCouponDetailsHandler } from '../../../../../../../actions'

class CouponDetails extends Component {
  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displayCouponDetailsHandler(0)} style={{ zIndex: this.props.zIndex }} />
        <div className={`couponDetailsContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.couponDetails.open,
  zIndex: state.couponDetails.zIndex,

})

export default connect(mapStateToProps, { displayCouponDetailsHandler })(CouponDetails)

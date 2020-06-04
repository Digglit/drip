import React from 'react'
import { connect } from 'react-redux'
import { manageCouponsHandler } from '../../../../../actions'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import './manageCoupons.css'

const ManageCoupons = (props) => {
  return (
    <div className={props.open ? '' : 'hide'} >
      <div className={props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => props.manageCouponsHandler(0)} style={{ zIndex: props.zIndex }} />
      <div className={`manageCouponsContainer ${props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: props.zIndex + 1 }}>
        <ModuleHeader header={'Manage Coupons'} closeButton={() => props.manageCouponsHandler(0)} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  open: state.couponManager.open,
  zIndex: state.couponManager.zIndex,
})

export default connect(mapStateToProps, { manageCouponsHandler })(ManageCoupons)

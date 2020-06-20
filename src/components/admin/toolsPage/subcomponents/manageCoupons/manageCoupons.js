import React from 'react'
import { connect } from 'react-redux'
import { manageCouponsHandler, displayCouponDetailsHandler } from '../../../../../actions'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import './manageCoupons.css'
import Input from '../../../../global/input/input'
import { motion } from 'framer-motion'
import { modalTransition, transitionDuration } from '../../../../global/pageTransition'

const ManageCoupons = (props) => {
  console.log(props)
  return (
    <motion.div initial={modalTransition.initial} animate={modalTransition.in} exit={modalTransition.out} transition={{ duration: transitionDuration }}>
      <div className={props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => props.manageCouponsHandler(0)} style={{ zIndex: props.zIndex }} />
      <div className={`manageCouponsContainer ${props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: props.zIndex + 1 }}>
        <ModuleHeader header={'Manage Coupons'} closeButton={() => props.manageCouponsHandler(0)} />
        <div className='manageCouponsSearchContainer'>
          <Input customClass={'couponSearchInput'} placeholder={'Search'} onChange={null} />
          <button className='primaryButton createNewCouponButton' onMouseDown={() => props.displayCouponDetailsHandler(20)}>Create New Coupon</button>
        </div>
        <div className='couponCodeContainerWrapper'>
          <div className='couponCodeContainerHeader'>
            <p className='couponCodeContainerHeaderText' style={{ justifySelf: 'start', paddingLeft: '10px' }}>Coupon Code</p>
            <p className='couponCodeContainerHeaderText'>Start Date</p>
            <p className='couponCodeContainerHeaderText'>Exp Date</p>
            <p className='couponCodeContainerHeaderText'>Amount Reedemed</p>
          </div>
          <div className='couponCodeContainer'>
            <div className='couponContainer'>
              <p className='couponCodeName'>BOGOPIZZA</p>
              <p>5/19/20</p>
              <p>5/26/20</p>
              <p>0</p>
            </div>
          </div>
        </div>
        <div className='couponCodeFooterContainer'>
          <button className='primaryButton couponCodeFooterButton' onMouseDown={() => props.manageCouponsHandler(0)}>Close</button>
        </div>
      </div>
    </motion.div>
  )
}

const mapStateToProps = (state) => ({
  zIndex: 10,
  open: state.modalDisplay.modals.manageCoupons
})

export default connect(mapStateToProps, { manageCouponsHandler, displayCouponDetailsHandler })(ManageCoupons)

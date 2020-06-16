import React from 'react'
import { connect } from 'react-redux'
import { manageSpecialsHandler, displaySpecialDetailsHandler } from '../../../../../actions'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import './manageSpecials.css'
import Input from '../../../../global/input/input'

const ManageCoupons = (props) => {
  return (
    <div>
      <div className={props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => props.manageSpecialsHandler(0)} style={{ zIndex: props.zIndex }} />
      <div className={`manageCouponsContainer ${props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: props.zIndex + 1 }}>
        <ModuleHeader header={'Manage Specials'} closeButton={() => props.manageSpecialsHandler(0)} />
        <div className='manageCouponsSearchContainer'>
          <Input customClass={'couponSearchInput'} placeholder={'Search'} onChange={null} />
          <button className='primaryButton createNewCouponButton' onMouseDown={() => props.displaySpecialDetailsHandler(20)}>Create New Special</button>
        </div>
        <div className='couponCodeContainerWrapper'>
          <div className='couponCodeContainerHeader'>
            <p className='couponCodeContainerHeaderText' style={{ justifySelf: 'start', paddingLeft: '10px' }}>Special Name</p>
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
          <button className='primaryButton couponCodeFooterButton' onMouseDown={() => props.manageSpecialsHandler(0)}>Close</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  open: state.specialManager.open,
  zIndex: state.specialManager.zIndex,
})

export default connect(mapStateToProps, { manageSpecialsHandler, displaySpecialDetailsHandler })(ManageCoupons)

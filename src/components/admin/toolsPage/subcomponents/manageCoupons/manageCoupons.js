import React from 'react'
import { connect } from 'react-redux'
import { manageCouponsHandler } from '../../../../../actions'

const ManageCoupons = (props) => {
  return (
    <div>
      <div className={`menuOverlay ${props.open ? '' : 'hide'}`} onMouseDown={() => manageCouponsHandler()} style={{ zIndex: props.zIndex }} />

    </div>
  )
}

const mapStateToProps = (state) => ({
  zIndex: 10,
  open: state.open
})

export default connect(mapStateToProps, { manageCouponsHandler })(ManageCoupons)

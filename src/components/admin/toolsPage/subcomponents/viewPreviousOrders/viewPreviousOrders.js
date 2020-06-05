import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'

const viewPreviousOrders = (props) => {
  return (
    <div className={`viewPreviousOrdersContainer ${props.display ? '' : 'shrunkenContainer'}`}>
      <ModuleHeader header={'View Older Orders'} closeButton={null} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(viewPreviousOrders)

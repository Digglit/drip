import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalPageBody.css'
import logo from '../../../../assets/BIGmPIZZAredrevised.png'
import PortalPageOrder from './subcomponents/portalPageOrder/portalPageOrder'
import { motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../../global/pageTransition'

class PortalPageBody extends Component {
  constructor() {
    super()
    this.state = {
      orderItems: ['1x BigM Rolls', '2x Mozzarella Sticks', '1x Large Pizza', '3x Tater Tots', '1x Big M']
    }
  }


  render() {
    return (
      <motion.div className='portalPageBodyContainer' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
        <img className='portalPageBodyLogoImage' alt='Company Logo' src={logo} />
        <div className='portalPageBodyRowContainer'>
          <PortalPageOrder items={this.state.orderItems} orderType={0} />
          <PortalPageOrder items={this.state.orderItems} orderType={0} />
          <PortalPageOrder items={this.state.orderItems} orderType={0} />
        </div>
        <div className='portalPageBodyRowContainer'>
          <PortalPageOrder items={this.state.orderItems} orderType={1} />
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PortalPageBody)

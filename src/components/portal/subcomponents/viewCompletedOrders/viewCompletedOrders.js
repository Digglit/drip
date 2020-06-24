import React, { Component } from 'react'
import { connect } from 'react-redux'
import './viewCompletedOrders.css'
import { motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../../global/pageTransition'
import { changePage } from '../../../../actions/portal'
import CornerCloseButton from '../../../global/cornerCloseButton/cornerCloseButton'

class ViewCompletedOrders extends Component {
  render() {
    return (
      <motion.div className='viewCompletedOrdersPageContainer' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
        <CornerCloseButton onClick={() => this.props.changePage(0)} />
        <div className='viewCompletedOrdersHeaderContainer'>

        </div>
        <div className='viewCompletedOrdersOrdersContainer'>
          <div className='viewCompletedOrdersOrder'>
            <p className='viewCompletedOrdersOrderText'>Julia Michaels</p>
            <p className='viewCompletedOrdersOrderText'>Order Number: 100385</p>
            <p className='viewCompletedOrdersOrderText'>Order Time: 7:45 PM</p>
            <button className='viewCompletedOrderOrderButton secondaryButton'>View Customer</button>
          </div>
        </div>
        <div className='viewCompletedOrdersFooterContainer'>
          <p className='viewCompletedOrdersFooterText'>Total Orders Today: 6</p>
          <button className='viewCompletedOrdersFooterButton primaryButton'>View Older Orders</button>
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, { changePage })(ViewCompletedOrders)

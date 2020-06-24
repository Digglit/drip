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
          <div>
            <h2 className='viewCompletedOrdersHeader'>Today's Tips</h2>
            <p className='viewCompletedOrdersHeaderText'>Pickup: $4.80</p>
            <p className='viewCompletedOrdersHeaderText'>Delivery: $4.80</p>
            <h2 className='viewCompletedOrdersHeader' style={{position: 'absolute', bottom: 15,}}>Today's Tips</h2>
          </div>
          <div className='viewCompletedOrdersGraph' />
        </div>
        <div className='viewCompletedOrdersOrdersContainer'>
          <div className='viewCompletedOrdersOrdersHeader'>
            <p className='viewCompletedOrdersOrdersHeaderText'>Name</p>
            <p className='viewCompletedOrdersOrdersHeaderText'>Order Number</p>
            <p className='viewCompletedOrdersOrdersHeaderText'>Order Time</p>
            <p className='viewCompletedOrdersOrdersHeaderText' style={{justifySelf: 'center', marginLeft: 0}}>Customer Details</p>
          </div>
          <div className='viewCompletedOrdersOrdersBody'>
          <div className='viewCompletedOrdersOrder'>
            <p className='viewCompletedOrdersOrderText'>Julia Michaels</p>
            <p className='viewCompletedOrdersOrderText'>100385</p>
            <p className='viewCompletedOrdersOrderText'>7:45 PM</p>
            <button className='viewCompletedOrderOrderButton secondaryButton'>View Customer</button>
          </div>
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

export default connect(mapStateToProps, { changePage })(ViewCompletedOrders)

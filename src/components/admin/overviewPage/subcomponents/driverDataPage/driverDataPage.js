import React, { Component } from 'react'
import { connect } from 'react-redux'
import './driverDataPage.css'
import { changePage, displayDriverDetailsHandler } from '../../../../../actions'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'
import TimeframeBreakdownButtons from '../../../../global/timeframeBreakdownButtons/timeframeBreakdownButtons'
import Graph from '../../../../global/graph/graph'
import { motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../../../global/pageTransition'

class DriverDataPage extends Component {
  constructor() {
    super()
    this.state = {
      timeframeSelected: 2,
    }
  }

  render() {
    return (
      <motion.div className='driverDataPageContainer' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
        <CornerCloseButton onClick={() => this.props.changePage(0)} />
        <h1 className='breakdownPageHeader'>Driver Insights</h1>
        <TimeframeBreakdownButtons timeframeSelected={this.state.timeframeSelected} updateTimeframe={(newTime) => this.setState({ timeframeSelected: newTime })} />
        <div className='driverDataPageGraphContainer'>
          <Graph />
        </div>
        <div className='driverDataPageBreakdownContainer'>
          <div>
            <h1 className='breakdownPageHeader'>Total (5/17 - 5/23)</h1>
            <p className='driverDataPageText'>Hours Worked: 46.2</p>
            <p className='driverDataPageText'>Orders Completed: 90</p>
            <p className='driverDataPageText'>Average Delivery Time: 17 min 32 sec</p>
            <p className='driverDataPageText'>Orders Per Hour: 1.95</p>
          </div>
          <div>
            <h1 className='breakdownPageHeader'>Average Driver Rating</h1>
            <p>Stars</p>
            <h1 className='breakdownPageHeader'>Top Driver Rating</h1>
            <p className='driverDataPageText'>ZackG is doing a great job! With 26 deliveries this week, he is consistently receiving a 5-star rating!</p>
          </div>
        </div>
        <div className='driverDataPageTable'>
          <div className='popularDishesHeaderContainer'>
            <div className='customerDataHeaderContainer' style={{ justifySelf: 'start', marginLeft: '10px' }}>
              <p className='popularDishesHeaderText'>Name</p>
            </div>
            <div className='customerDataHeaderContainer'>
              <p className='popularDishesHeaderText'>Deliveries</p>
            </div>
            <div className='customerDataHeaderContainer'>
              <p className='popularDishesHeaderText'>Avg. Delivery Time</p>
            </div>
            <div className='customerDataHeaderContainer'>
              <p className='popularDishesHeaderText'>Rating</p>
            </div>
            <div className='customerDataHeaderContainer'>
              <p className='popularDishesHeaderText'>Hours</p>
            </div>
          </div>
          <div className='popularDishesBodyContainer'>
            {this.props.drivers.map((value, index) => (
              <div className='popularDishesItemContainer'>
                <div className='customerDataPageItemNameContainer' style={{ marginLeft: '0px' }}>
                  <p className='popularDishesItemText popularDishesItemNameText' onMouseDown={() => this.props.displayDriverDetailsHandler(10, index)}>{value.name}</p>
                </div>
                <p className='popularDishesItemText'>{value.deliveries}</p>
                <p className='popularDishesItemText'>{value.averageDeliveryTime}</p>
                <p className='popularDishesItemText'>{value.rating}</p>
                <p className='popularDishesItemText'>{value.totalHours}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({
  drivers: state.driverDetails.drivers
})

export default connect(mapStateToProps, { changePage, displayDriverDetailsHandler })(DriverDataPage)

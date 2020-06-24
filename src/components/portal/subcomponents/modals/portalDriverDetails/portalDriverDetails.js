import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalDriverDetails.css'
// import { displayDriverDetailsHandler, displayConfirmationPrompt, closeConfirmationPrompt } from '../../../../../actions'
import { displayDriverDetails } from '../../../../../actions/portal'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import { motion } from 'framer-motion'
import { modalTransition, transitionDuration } from '../../../../global/pageTransition'

class PortalDriverDetails extends Component {

  // removeDriverHandler = () => {
  //   let confirmationDetails = {
  //     open: true,
  //     zIndex: 20,
  //     confirmAction: true,
  //     confirmFunction: this.confirmDriverRemove,
  //     header: 'Remove Driver?',
  //     body: `Are you sure you want to remove driver ${this.props.driverDetails.name}? Deletion will take 48 hours and can be canceled at any time.`
  //   }
  //   this.props.displayConfirmationPrompt(confirmationDetails)
  // }

  // confirmDriverRemove = () => {
  //   this.props.closeConfirmationPrompt()
  //   this.props.displayDriverDetailsHandler(0)
  // }

  render() {
    return (
      <motion.div className='portalDriverDetailsContainer' style={{ zIndex: this.props.zIndex }} initial={modalTransition.initial} animate={modalTransition.in} exit={modalTransition.out} transition={{ duration: transitionDuration }}>
        <ModuleHeader header={`${this.props.driverDetails.name}'s Driver Details`} closeButton={() => this.props.displayDriverDetails(0)} />
        <div className='driverDetailsBodyContainer'>
          <h3 className='driverDetailsHeaderText'>Delivery Information</h3>
          <p className='driverDetailsBodyText'>Deliveries: {this.props.driverDetails.deliveries}</p>
          <p className='driverDetailsBodyText'>Average Delivery Time: {this.props.driverDetails.averageDeliveryTime}</p>
          <p className='driverDetailsBodyText'>Rating: {this.props.driverDetails.rating} Stars</p>
          <p className='driverDetailsBodyText'>Total Hours: {this.props.driverDetails.totalHours}</p>
          <p className='driverDetailsBodyText'>Revenue Facilitated: ${this.props.driverDetails.revenueFacilitated}</p>
          <p className='driverDetailsBodyText'>Tips Earned: ${this.props.driverDetails.tipsEarned}</p>
          <h3 className='driverDetailsHeaderText'>Driver Information</h3>
          <p className='driverDetailsBodyText'>Email: {this.props.driverDetails.email}</p>
          <p className='driverDetailsBodyText'>Phone Number: {this.props.driverDetails.phoneNumber}</p>
          <p className='driverDetailsBodyText'>Car Make: {this.props.driverDetails.carMake}</p>
          <p className='driverDetailsBodyText'>Car Model: {this.props.driverDetails.carModel}</p>
          <p className='driverDetailsBodyText'>Car Year: {this.props.driverDetails.carYear}</p>
          <p className='driverDetailsBodyText'>Car Color: {this.props.driverDetails.carColor}</p>
          <p className='driverDetailsBodyText'>License Plate Number: {this.props.driverDetails.licensePlateNumber}</p>
          <button className='primaryButton modifyDriverButton' onMouseDown={this.removeDriverHandler}>Remove Driver</button>
        </div>
        <div className='driverDetailsFooterContainer'>
          <button className='primaryButton driverDetailsFooterButton' onMouseDown={() => this.props.displayDriverDetails(0)}>Close</button>
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({
  driverSelected: state.driverDetails.driverSelected,
  driverDetails: state.driverDetails.drivers[state.driverDetails.driverSelected]
})
// { displayDriverDetailsHandler, displayConfirmationPrompt, closeConfirmationPrompt }
export default connect(mapStateToProps, { displayDriverDetails })(PortalDriverDetails)

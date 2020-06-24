import React, { Component } from 'react'
import { connect } from 'react-redux'
import './driverDetails.css'
import { displayDriverDetailsHandler, displayConfirmationPrompt, closeConfirmationPrompt } from '../../../../../actions'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'

class DriverDetails extends Component {

  removeDriverHandler = () => {
    let confirmationDetails = {
      open: true,
      zIndex: 20,
      confirmAction: true,
      confirmFunction: this.confirmDriverRemove,
      header: 'Remove Driver?',
      body: `Are you sure you want to remove driver ${this.props.driverDetails.name}? Deletion will take 48 hours and can be canceled at any time.`
    }
    this.props.displayConfirmationPrompt(confirmationDetails)
  }

  confirmDriverRemove = () => {
    this.props.closeConfirmationPrompt()
    this.props.displayDriverDetailsHandler(0)
  }

  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displayDriverDetailsHandler(0)} style={{ zIndex: this.props.zIndex }} />
        <div className={`driverDetailsContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={`${this.props.driverDetails.name}'s Driver Details`} closeButton={() => this.props.displayDriverDetailsHandler(0, 0)} />
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
            <button className='primaryButton driverDetailsFooterButton' onMouseDown={() => this.props.displayDriverDetailsHandler(0, 0)}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.driverDetails.open,
  zIndex: state.driverDetails.zIndex,
  driverSelected: state.driverDetails.driverSelected,
  driverDetails: state.driverDetails.drivers[state.driverDetails.driverSelected]
})

export default connect(mapStateToProps, { displayDriverDetailsHandler, displayConfirmationPrompt, closeConfirmationPrompt })(DriverDetails)

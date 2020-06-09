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
      body: `Are you sure you want to remove driver ${this.props.name}? Deletion will take 48 hours and can be canceled at any time.`
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
          <ModuleHeader header={`${this.props.name}'s Driver Details`} closeButton={() => this.props.displayDriverDetailsHandler(0)}/>
          <div className='driverDetailsBodyContainer'>
            <h3 className='driverDetailsHeaderText'>Delivery Information</h3>
            <p className='driverDetailsBodyText'>Deliveries: 162</p>
            <p className='driverDetailsBodyText'>Average Delivery Time: 16 min 50 sec</p>
            <p className='driverDetailsBodyText'>Rating: 4.7 Stars</p>
            <p className='driverDetailsBodyText'>Total Hours: 75</p>
            <p className='driverDetailsBodyText'>Revenue Facilitated: $5,142.50</p>
            <p className='driverDetailsBodyText'>Tips Earned: $956.40</p>
            <h3 className='driverDetailsHeaderText'>Driver Information</h3>
            <p className='driverDetailsBodyText'>Email: JMarella@gmail.com</p>
            <p className='driverDetailsBodyText'>Phone Number: (440)-214-2354</p>
            <p className='driverDetailsBodyText'>Car Make: Volvo</p>
            <p className='driverDetailsBodyText'>Car Model: S60</p>
            <p className='driverDetailsBodyText'>Car Year: 2009</p>
            <p className='driverDetailsBodyText'>Car Color: Black</p>
            <p className='driverDetailsBodyText'>License Plate Number: 3EA654F</p>
            <button className='primaryButton modifyDriverButton' onMouseDown={this.removeDriverHandler}>Remove Driver</button>
          </div>
          <div className='driverDetailsFooterContainer'>
            <button className='primaryButton driverDetailsFooterButton' onMouseDown={() => this.props.displayDriverDetailsHandler(0)}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.driverDetails.open,
  zIndex: state.driverDetails.zIndex,
  name: state.driverDetails.name,
})

export default connect(mapStateToProps, { displayDriverDetailsHandler, displayConfirmationPrompt, closeConfirmationPrompt })(DriverDetails)

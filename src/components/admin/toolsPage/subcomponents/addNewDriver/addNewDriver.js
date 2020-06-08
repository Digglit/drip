import React, { Component } from 'react'
import './addNewDriver.css'
import { connect } from 'react-redux'
import { displayAddDriverHandler, displayConfirmationPrompt, closeConfirmationPrompt } from '../../../../../actions'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import Input from '../../../../global/input/input'

class AddNewDriver extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  confirmAdditionHandler = () => {
    this.props.displayAddDriverHandler(0)
    this.props.closeConfirmationPrompt()
  }

  confirmActionHandler = () => {
    let confirmationInfo = {
      header: 'Confirm Action',
      body: `Would you like to add ${this.state.displayName} as a driver?`,
      open: true,
      confirmFunction: this.confirmAdditionHandler,
      zIndex: 20,
      confirmAction: true
    }
    this.props.displayConfirmationPrompt(confirmationInfo)
  }

  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displayAddDriverHandler(0)} style={{ zIndex: this.props.zIndex }} />
        <div className={`addNewDriverContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={'Add New Driver'} closeButton={() => this.props.displayAddDriverHandler(0)} />
          <div className='addNewDriverBodyContainer'>
            <div className='addNewDriverInputContainer'>
              <p className='addNewDriverText' >Display Name</p>
              <Input value={this.state.displayName} onChange={(e) => this.setState({ displayName: e.target.value })} />
            </div>
            <div className='addNewDriverInputContainer'>
              <p className='addNewDriverText' >Email</p>
              <Input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            </div>
            <div className='addNewDriverInputContainer'>
              <p className='addNewDriverText' >Password</p>
              <Input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
            </div>
            <div className='addNewDriverInputContainer'>
              <p className='addNewDriverText' >Confirm Password</p>
              <Input value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
            </div>
          </div>
          <div className='addNewDriverFooterContainer'>
            <button className='secondaryButton addNewDriverButton' onMouseDown={() => this.props.displayAddDriverHandler(0)}>Cancel</button>
            <button className='primaryButton addNewDriverButton' onMouseDown={this.confirmActionHandler}>Add Driver</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.displayAddNewDriver.open,
  zIndex: state.displayAddNewDriver.zIndex
})

export default connect(mapStateToProps, { displayAddDriverHandler, displayConfirmationPrompt, closeConfirmationPrompt })(AddNewDriver)

import React, { Component } from 'react'
import './toolsPage.css'
import { connect } from 'react-redux'
import {
  changePage,
  manageCouponsHandler,
  viewPreviousOrdersHandler,
  displayAddDriverHandler,
  closeConfirmationPrompt,
  displayConfirmationPrompt,
  displayDriverDetailsHandler,
  displayCustomTransactionHandler,
  displayHoursOfOperationHandler,
  manageSpecialsHandler,
} from '../../../actions'
import CornerCloseButton from '../../global/cornerCloseButton/cornerCloseButton'
import ToolsContainer from './subcomponents/toolsContainer/toolsContainer'
import Switch from '../../global/switch/switch'
import NumberInput from '../../global/numberInput/numberInput'

class ToolsPage extends Component {
  constructor() {
    super()
    this.state = {
      expandedArray: [true, true, true, true, true, true],
      deliveryEnabled: true,
      pickupEnabled: true,
      deliveryFee: '$',
      currentColor: 0,
      colors: ['rgb(22, 135, 143)', 'rgb(190, 37, 70)', 'rgb(66, 87, 32)', 'rgb(92, 21, 133)', 'rgb(2, 177, 129)', 'rgb(1, 32, 77)', 'rgb(167, 67, 0)', 'rgb(190, 37, 37)', 'rgb(202, 93, 29)'],
      currentMode: true,
      lightMode: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgb(235, 235, 235)', 'rgba(0, 0, 0, 0.5)'],
      darkMode: ['rgb(255, 255, 255)', 'rgb(35, 35, 35)', 'rgb(20, 20, 20)', 'rgba(0, 0, 0, 0.5)'],
      drivers: ['ZackG', 'Casey']
    }
  }

  confirmAdditionHandler = () => {
    this.props.closeConfirmationPrompt()
  }

  confirmActionHandler = (name) => {
    let confirmationInfo = {
      header: 'Log Out Driver',
      body: `Force ${name} to log off?`,
      open: true,
      confirmFunction: this.confirmAdditionHandler,
      zIndex: 20,
      confirmAction: true
    }
    this.props.displayConfirmationPrompt(confirmationInfo)
  }

  modifyExpandedHandler = (arrPosition) => {
    let arr = this.state.expandedArray
    arr[arrPosition] = !arr[arrPosition]
    this.setState({ expandedArray: arr })
  }

  changeColorHandler = () => {
    let colorAmount = this.state.colors.length - 1
    document.documentElement.style.setProperty('--primary-color', this.state.colors[this.state.currentColor])
    if (this.state.currentColor === colorAmount) {
      this.setState({ currentColor: 0 })
    } else {
      this.setState({ currentColor: this.state.currentColor + 1 })
    }
  }

  darkModeHandler = () => {
    let colorScheme
    if (this.state.currentMode) {
      colorScheme = [...this.state.darkMode]
    } else {
      colorScheme = [...this.state.lightMode]
    }
    document.documentElement.style.setProperty('--tertiary-color', colorScheme[0])
    document.documentElement.style.setProperty('--primary-background-color', colorScheme[1])
    document.documentElement.style.setProperty('--secondary-background-color', colorScheme[2])
    document.documentElement.style.setProperty('--backdrop-overlay-color', colorScheme[3])
    this.setState({ currentMode: !this.state.currentMode })
  }

  displayDriverDetailsHandler = () => {

  }

  render() {
    return (
      <div className='toolsPageContainer'>
        <div className='toolsPageWrapper'>
          <CornerCloseButton onClick={() => this.props.changePage(0)} />

          {/* Order Settings Container */}
          <ToolsContainer
            expandContainerHandler={() => this.modifyExpandedHandler(0)}
            expandedState={this.state.expandedArray[0]}
            toolTitle={'Order Settings'}
            height={'120px'}
            content={
              <div className={this.state.expandedArray[0] ? '' : 'hiddenContent'}>
                <div className='toolsPageSwitchContainer'>
                  <h3 className='toolsPageText'>Disable Delivery:</h3>
                  <Switch additionalStyles={{ justifySelf: 'end' }} onSwitch={() => this.setState({ deliveryEnabled: !this.state.deliveryEnabled })} switched={!this.state.deliveryEnabled} />
                </div>
                <div className='toolsPageSwitchContainer'>
                  <h3 className='toolsPageText'>Disable Pickup:</h3>
                  <Switch additionalStyles={{ justifySelf: 'end' }} onSwitch={() => this.setState({ pickupEnabled: !this.state.pickupEnabled })} switched={!this.state.pickupEnabled} />
                </div>
              </div>
            }
          />

          {/* Tools Container */}
          <ToolsContainer
            expandContainerHandler={() => this.modifyExpandedHandler(1)}
            expandedState={this.state.expandedArray[1]}
            toolTitle={'Tools'}
            height={''}
            content={
              <div className={this.state.expandedArray[1] ? '' : 'hiddenContent'} style={{ paddingBottom: '10px' }}>
                <button className='secondaryButton toolsPageButton'>Create Order</button>
                <button className='secondaryButton toolsPageButton' onMouseDown={() => this.props.displayCustomTransactionHandler(10)}>Custom Transaction</button>
                <button className='secondaryButton toolsPageButton' onMouseDown={this.changeColorHandler}>Change Color</button>
                <div className='toolsPageSwitchContainer'>
                  <h3 className='toolsPageText'>Mode:</h3>
                  <Switch additionalStyles={{ justifySelf: 'end' }} onSwitch={this.darkModeHandler} switched={!this.state.currentMode} />
                </div>
              </div>
            }
          />

          {/* Drivers Container */}
          <ToolsContainer
            expandContainerHandler={() => this.modifyExpandedHandler(2)}
            expandedState={this.state.expandedArray[2]}
            toolTitle={'Drivers'}
            height={''}
            content={
              <div className={`toolsPageDriversToolContainer ${this.state.expandedArray[2] ? '' : 'hiddenContent'}`}>
                <div className='toolsPageDriversHeaderTextContainer'>
                  <h2 className='toolsPageText'>Current Drivers:</h2>
                </div>
                <div className='toolsPageDriversContainer'>
                  {this.props.drivers.map((value, index) => (
                    <div className='toolsPageDriverContainer' key={index}>
                      <h4 className='toolsPageDriverText' onMouseDown={() => this.props.displayDriverDetailsHandler(10, index)}>{value.name}</h4>
                      <button className='secondaryButton toolsPageDriverButton' name={value.name} onMouseDown={(e) => this.confirmActionHandler(e.target.name)}>Log Out</button>
                    </div>
                  ))}
                </div>
                <div className='toolsPageDriverFooterContainer'>
                  <button className='secondaryButton toolsPageAddNewDriverButton' onMouseDown={() => this.props.displayAddDriverHandler(10)}>Add New Driver</button>
                </div>
              </div>
            }
          />

          {/* Site Settings Container */}
          <ToolsContainer
            expandContainerHandler={() => this.modifyExpandedHandler(3)}
            expandedState={this.state.expandedArray[3]}
            toolTitle={'Site Settings'}
            height={''}
            content={
              <div style={{ display: 'grid', paddingBottom: '10px' }} className={this.state.expandedArray[3] ? '' : 'hiddenContent'}>
                <div className='toolsPageSwitchContainer'>
                  <h3 className='toolsPageText'>Delivery Fee</h3>
                  <NumberInput customStyle={{ width: '70px', justifySelf: 'end' }} value={this.state.deliveryFee} onChange={(newFee) => this.setState({ deliveryFee: newFee })} />
                </div>
                <button className='secondaryButton toolsPageButton'>Adjust Delivery Region</button>
                <button className='secondaryButton toolsPageButton'>Launch Site Modifier</button>
                <button className='secondaryButton toolsPageButton' onMouseDown={() => this.props.displayHoursOfOperationHandler(10)}>Adjust Hours of Operation</button>
              </div>
            }
          />

          {/* Coupons & Specials Container */}
          <ToolsContainer
            expandContainerHandler={() => this.modifyExpandedHandler(4)}
            expandedState={this.state.expandedArray[4]}
            toolTitle={'Coupons & Specials'}
            height={''}
            content={
              <div style={{ display: 'grid', paddingBottom: '10px' }} className={this.state.expandedArray[4] ? '' : 'hiddenContent'}>
                <button className='secondaryButton toolsPageButton' onMouseDown={() => this.props.manageCouponsHandler(10)}>Manage Coupons</button>
                <button className='secondaryButton toolsPageButton' onMouseDown={() => this.props.manageSpecialsHandler(10)}>Manage Specials</button>
              </div>
            }
          />

          {/* Orders Container */}
          <ToolsContainer
            expandContainerHandler={() => this.modifyExpandedHandler(5)}
            expandedState={this.state.expandedArray[5]}
            toolTitle={'Orders'}
            height={''}
            content={
              <div style={{ display: 'grid', paddingBottom: '10px' }} className={this.state.expandedArray[5] ? '' : 'hiddenContent'}>
                <button className='secondaryButton toolsPageButton' onMouseDown={() => this.props.viewPreviousOrdersHandler(10)}>View Past Orders</button>
              </div>
            }
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  drivers: state.driverDetails.drivers
})

export default connect(mapStateToProps, {
  changePage,
  manageCouponsHandler,
  viewPreviousOrdersHandler,
  displayAddDriverHandler,
  closeConfirmationPrompt,
  displayConfirmationPrompt,
  displayDriverDetailsHandler,
  displayCustomTransactionHandler,
  displayHoursOfOperationHandler,
  manageSpecialsHandler,
})(ToolsPage)

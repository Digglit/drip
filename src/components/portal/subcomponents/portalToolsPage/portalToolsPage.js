import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalToolsPage.css'
import { motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../../global/pageTransition'
import { changePage, displayDriverDetails, createOrderHandler, displayCustomTransaction } from '../../../../actions/portal'
import ToolsContainer from '../../../admin/toolsPage/subcomponents/toolsContainer/toolsContainer'
import Switch from '../../../global/switch/switch'
import CornerCloseButton from '../../../global/cornerCloseButton/cornerCloseButton'

class PortalToolsPage extends Component {
  constructor() {
    super()
    this.state = {
      deliveryEnabled: true,
      pickupEnabled: true,
      expandedArray: [true, true, true],
      currentColor: 0,
      colors: ['rgb(22, 135, 143)', 'rgb(190, 37, 70)', 'rgb(66, 87, 32)', 'rgb(92, 21, 133)', 'rgb(2, 177, 129)', 'rgb(1, 32, 77)', 'rgb(167, 67, 0)', 'rgb(190, 37, 37)', 'rgb(202, 93, 29)'],
      currentMode: true,
      lightMode: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgb(235, 235, 235)', 'rgba(0, 0, 0, 0.5)'],
      darkMode: ['rgb(255, 255, 255)', 'rgb(35, 35, 35)', 'rgb(20, 20, 20)', 'rgba(0, 0, 0, 0.5)'],
    }
  }

  modifyExpandedHandler = (index) => {
    let expandedArray = this.state.expandedArray
    expandedArray[index] = !expandedArray[index]
    this.setState({ expandedArray })
  }

  placeOrderHandler = () => {
    this.props.createOrderHandler()
    this.props.changePage(1)
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

  render() {
    return (
      <motion.div className='portalToolsPageContainer' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
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
              <button className='secondaryButton toolsPageButton' onMouseDown={this.placeOrderHandler}>Create Order</button>
              <button className='secondaryButton toolsPageButton' onMouseDown={this.props.displayCustomTransaction}>Custom Transaction</button>
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
            <div className={`portalToolsPageDriversToolContainer ${this.state.expandedArray[2] ? '' : 'hiddenContent'}`}>
              <div className='toolsPageDriversHeaderTextContainer'>
                <h2 className='toolsPageText'>Current Drivers:</h2>
              </div>
              <div className='toolsPageDriversContainer'>
                {this.props.drivers.map((value, index) => (
                  <div className='toolsPageDriverContainer' key={index}>
                    <h4 className='toolsPageDriverText' onMouseDown={() => this.props.displayDriverDetails(10, index)}>{value.name}</h4>
                    <button className='secondaryButton toolsPageDriverButton' name={value.name} onMouseDown={(e) => this.confirmActionHandler(e.target.name)}>Log Out</button>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({
  drivers: state.driverDetails.drivers
})

export default connect(mapStateToProps, { changePage, displayDriverDetails, createOrderHandler, displayCustomTransaction })(PortalToolsPage)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalToolsPage.css'
import { motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../../global/pageTransition'
import { changePage, displayDriverDetails, createOrderHandler } from '../../../../actions/portal'
import ToolsContainer from '../../../admin/toolsPage/subcomponents/toolsContainer/toolsContainer'
import Switch from '../../../global/switch/switch'
import CornerCloseButton from '../../../global/cornerCloseButton/cornerCloseButton'

class PortalToolsPage extends Component {
  constructor() {
    super()
    this.state = {
      deliveryEnabled: true,
      pickupEnabled: true,
      expandedArray: [true, true, true]
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
              <button className='secondaryButton toolsPageButton' onMouseDown={() => this.props.displayCustomTransactionHandler(10)}>Custom Transaction</button>
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

export default connect(mapStateToProps, { changePage, displayDriverDetails, createOrderHandler })(PortalToolsPage)

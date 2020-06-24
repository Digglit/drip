import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalPageHeader.css'
import DropDown from '../../../global/dropDown/dropDown'

export class PortalPageHeader extends Component {

  constructor() {
    super()
    this.state = {
      deliveryTimeSelected: 0,
      pickupTimeSelected: 0,
      deliveryTimes: ['15 min', '30 min', '45 min', '60 min', '60+ min'],
      pickupTimes: ['15 min', '30 min', '45 min', '60 min', '60+ min']
    }
  }

  render() {
    return (
      <div className='portalPageHeaderContainer'>
        <div className='portalPageTimeContainer'>
          <p className='portalPageHeaderText'>Current Delivery Time: </p>
          <DropDown items={this.state.deliveryTimes} itemSelected={this.state.deliveryTimeSelected} width={175} changeOption={(newTime) => this.setState({ deliveryTimeSelected: newTime })} />
        </div>
        <div className='portalPageTimeContainer'>
          <p className='portalPageHeaderText'>Current Pickup Time: </p>
          <DropDown items={this.state.pickupTimes} itemSelected={this.state.pickupTimeSelected} width={175} changeOption={(newTime) => this.setState({ pickupTimeSelected: newTime })} />
        </div>
        <button className='portalPageHeaderButton secondaryButton'>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PortalPageHeader)

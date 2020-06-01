import React, { Component } from 'react'
import './sideBar.css'
import logo from '../../../assets/BIGmPIZZAredrevised.png'

export default class SideBar extends Component {
  render() {
    return (
      <div className='sideBarContainer'>
        <div className='sideBarHeader'>
          <h3 className='whiteText'>Good Morning John</h3>
          <h3 className='whiteText'>Monday, June 1st</h3>
        </div>
        <div className='notificationContainer'>
          <div className='notificationHeaderContainer'>
            <h3 className='primaryTextColor' style={{ marginLeft: '5px' }}>Notification Center</h3>
          </div>
          <div className='notificationBodyContainer'>
            <img src={logo} className='logo'></img>
          </div>
        </div>
        <div className='notificationFooter'>
          <button className='sideBarButton secondaryButton'>Modify Menu</button>
          <button className='sideBarButton secondaryButton'>Email</button>
          <button className='sideBarButton secondaryButton'>Tools</button>
          <button className='sideBarButton primaryButton'>Logout</button>
        </div>
      </div>
    )
  }
}

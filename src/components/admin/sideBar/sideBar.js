import React, { Component } from 'react'
import './sideBar.css'
import logo from '../../../assets/BIGmPIZZAredrevised.png'
import { connect } from 'react-redux'
import { changePage } from '../../../actions'



class SideBar extends Component {
  changePageHandler = () => {
    if (this.props.pageDisplayed === 0) {
      this.props.changePage(1)
    } else {
      this.props.changePage(0)
    }
  }

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
          <button className={`sideBarButton ${this.props.pageDisplayed === 1 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={this.changePageHandler}>Modify Menu</button>
          <button className={`sideBarButton secondaryButton`}>Email</button>
          <button className={`sideBarButton secondaryButton`}>Tools</button>
          <button className='sideBarButton primaryButton'>Logout</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pageDisplayed: state.pageDisplayed
})

export default connect(mapStateToProps, { changePage })(SideBar)
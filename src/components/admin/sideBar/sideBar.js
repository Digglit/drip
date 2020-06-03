import React, { Component } from 'react'
import './sideBar.css'
import logo from '../../../assets/BIGmPIZZAredrevised.png'
import { connect } from 'react-redux'
import { changePage } from '../../../actions'



class SideBar extends Component {
  changePageHandler = (newPage) => {
    if (this.props.pageDisplayed === newPage) {
      this.props.changePage(0)
    } else {
      this.props.changePage(newPage)
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
          <button className={`sideBarButton ${this.props.pageDisplayed === 1 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.changePageHandler(1)}>Modify Menu</button>
          <button className={`sideBarButton ${this.props.pageDisplayed === 2 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.changePageHandler(2)}>Email</button>
          <button className={`sideBarButton ${this.props.pageDisplayed === 3 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.changePageHandler(3)}>Tools</button>
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
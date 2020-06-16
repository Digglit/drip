import React, { Component } from 'react'
import './sideBar.css'
import logo from '../../../assets/BIGmPIZZAredrevised.png'
import { connect } from 'react-redux'
import { changePage } from '../../../actions'



class SideBar extends Component {
  constructor() {
    super()
    this.state = {
      notifications: [
        {
          open: true,
          message: 'People are abandoning Quesadilla most often. Find out why',
          key: 'oidaufs90suaf98032jr'
        },
        {
          open: true,
          message: 'Veggie Plate has been 86\'d for 11 days now. Consider removing this item from the menu.',
          key: '9a8sfuy-j30w2irj0-j'
        }
      ]
    }
  }

  changePageHandler = (newPage) => {
    if (this.props.pageDisplayed === newPage) {
      this.props.changePage(0)
    } else {
      this.props.changePage(newPage)
    }
  }

  closeNotificationHandler = (index, key) => {
    let notifications = this.state.notifications
    notifications[index].open = false
    this.setState({ notifications })
    let updatedNotifications = notifications.filter((value, index) => {
      return key !== value.key
    })
    setTimeout(() => this.setState({ notifications: updatedNotifications }), 350)
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
            {this.state.notifications.map((value, index) => (
              <div className={`notificationItemContainer ${value.open ? '' : 'notificationItemContainerClosed'}`}>
                <div className='notificationItemTextContainer'>
                  <p className='notificationItemText'>{value.message}</p>
                </div>
                <button className='notificationCloseButton primaryButton' onMouseDown={() => this.closeNotificationHandler(index, value.key)}>&#10005;</button>
              </div>
            ))}
            <img src={logo} alt='Restaurant logo' className='logo'></img>
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
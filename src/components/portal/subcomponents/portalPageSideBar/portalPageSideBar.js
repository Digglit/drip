import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalPageSideBar.css'
import { changePage } from '../../../../actions/portal'
import { createOrderHandler } from '../../../../actions/portal'

class PortalPageSideBar extends Component {
  constructor() {
    super()
    this.state = {
      items: ['Stuffed Mushroom Heads', 'BigM House Salad', 'Chicken Tenders', 'Hawaiian Pizza', 'Mozzarella Sticks'],
      sideBarExpanded: false
    }
  }

  viewItemsHandler = () => {
    if (this.props.pageDisplayed === 1 && !this.props.creatingOrder) {
      this.props.changePage(0)
    } else if (this.props.pageDisplayed !== 1 && this.props.creatingOrder) {
      this.props.changePage(1)
      this.props.createOrderHandler()
    } else if (this.props.pageDisplayed === 1 && this.props.creatingOrder) {
      this.props.createOrderHandler()
    } else {
      this.props.changePage(1)
    }
  }

  render() {
    return (
      <div className='portalPageSideBarContainer'>
        <div className='portalPageSideBarHeaderContainer'>
          <p className='portalPageSideBarHeader'>Currently 86'd</p>
        </div>
        <div className='portalPageSideBarBody'>
          {this.state.items.map((value, index) => (
            <div className='portalPageSideBarBodyItem' key={index}>
              <p className='portalPageSideBarBodyText'>{value}</p>
              <button className='portalPageSideBarBodyCloseButton'>&#10005;</button>
            </div>
          ))}
        </div>
        <div className='portalPageSideBarFooter' style={this.state.sideBarExpanded ? {bottom: 0} : {bottom: '-187px'}}>
          <div className='portalPageSideBarFooterOpenButton' onMouseDown={() => this.setState({sideBarExpanded: !this.state.sideBarExpanded})}>
            {/* <p className='portalPageSideBarFooterOpenButtonText'>^</p> */}
            <div className='portalPageSideBarFooterOpenArrow' style={this.state.sideBarExpanded ? {transform: 'rotate(180deg)'} : null}/>
          </div>
          <button className={`portalPageSideBarFooterButton ${this.props.pageDisplayed === 1 && !this.props.creatingOrder ? 'primaryButton' : 'secondaryButton'}`} style={{ marginTop: 3 }} onMouseDown={this.viewItemsHandler}>View All Items</button>
          <button className={`portalPageSideBarFooterButton ${this.props.pageDisplayed === 2 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.props.pageDisplayed === 2 ? this.props.changePage(0) : this.props.changePage(2)}>Tools</button>
          <button className={`portalPageSideBarFooterButton ${this.props.pageDisplayed === 3 ? 'primaryButton' : 'secondaryButton'}`} style={{ marginBottom: 3 }} onMouseDown={() => this.props.pageDisplayed === 3 ? this.props.changePage(0) : this.props.changePage(3)}>View Completed Orders</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pageDisplayed: state.pageDisplay.currentPage,
  creatingOrder: state.createOrder
})

export default connect(mapStateToProps, { changePage, createOrderHandler })(PortalPageSideBar)

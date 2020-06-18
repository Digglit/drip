import React, { Component } from 'react'
import { connect } from 'react-redux'
import './menuItemBreakdown.css'
import { displayMenuItemBreakdownHandler } from '../../../../../../../actions'
import CornerCloseButton from '../../../../../../global/cornerCloseButton/cornerCloseButton'
import foodImage from '../../../../../../../assets/wings.jpg'
import TimeframeBreakdownButtons from '../../../../../../global/timeframeBreakdownButtons/timeframeBreakdownButtons'

class MenuItemBreakdown extends Component {
  constructor() {
    super()
    this.state = {
      timeframeSelected: 1,
      currentTimeframe: 'weekly'
    }
  }

  updateTimeframeHandler = (newTime) => {
    this.setState({ timeframeSelected: newTime })
    switch (newTime) {
      case 0:
        return this.setState({ currentTimeframe: 'daily' })
      case 1:
        return this.setState({ currentTimeframe: 'weekly' })
      case 2:
        return this.setState({ currentTimeframe: 'monthly' })
      case 3:
        return this.setState({ currentTimeframe: 'threeMonths' })
      case 4:
        return this.setState({ currentTimeframe: 'sixMonths' })
      case 5:
        return this.setState({ currentTimeframe: 'yearly' })
      case 6:
        return this.setState({ currentTimeframe: 'allTime' })
      default:
        return this.setState({ currentTimeframe: 'daily' })
    }
  }


  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displayMenuItemBreakdownHandler(0, null)} style={{ zIndex: this.props.zIndex }} />
        <div className={`menuItemBreakdownContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <CornerCloseButton onClick={() => this.props.displayMenuItemBreakdownHandler(0, null)} />
          <div className='menuItemBreakdownHeaderContainer'>
            <img className='menuItemBreakdownHeaderImage' alt='Menu Item Breakdown Header' src={foodImage} />
            <div className='menuItemBreakdownHeaderTextContainer'>
              <h2 className='menuItemBreakdownHeaderText'>Online Wings Sales Breakdown</h2>
            </div>
          </div>
          <div className='menuItemBreakdownBodyContainer'>
            <h2 className='menuItemBreakdownHeader' style={{ marginBottom: '15px' }}>Sales</h2>
            <TimeframeBreakdownButtons timeframeSelected={this.state.timeframeSelected} updateTimeframe={(newTime) => this.updateTimeframeHandler(newTime)} />
            <p className='menuItemBreakdownText'>Total Revenue: ${this.props.breakdownData[this.state.currentTimeframe].totalRevenue}</p>
            <p className='menuItemBreakdownText'>Added To Cart: {this.props.breakdownData[this.state.currentTimeframe].addedToCart}</p>
            <p className='menuItemBreakdownText'>Removed From Cart: {this.props.breakdownData[this.state.currentTimeframe].removedFromCart}</p>
            <p className='menuItemBreakdownText'>Total Sold: {this.props.breakdownData[this.state.currentTimeframe].totalSold}</p>
            <h2 className='menuItemBreakdownHeader'>Week to Week</h2>
            <p className='menuItemBreakdownText'>Sales Increase: {this.props.breakdownData[this.state.currentTimeframe].salesIncrease}%</p>
            <p className='menuItemBreakdownText'>Add To Cart Increase: {this.props.breakdownData[this.state.currentTimeframe].addToCartIncrease}%</p>
            <p className='menuItemBreakdownText'>Remove From Cart Increase: {this.props.breakdownData[this.state.currentTimeframe].removeFromCartIncrease}%</p>
          </div>
          <div className='menuItemBreakdownFooterContainer'>
            <button className='primaryButton menuItemBreakdownFooterButton' onMouseDown={() => this.props.displayMenuItemBreakdownHandler(0, null)}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.menuItemBreakdownDetails.open,
  zIndex: state.menuItemBreakdownDetails.zIndex,
  breakdownData: state.menuItemBreakdownDetails.breakdownData
})

export default connect(mapStateToProps, { displayMenuItemBreakdownHandler })(MenuItemBreakdown)

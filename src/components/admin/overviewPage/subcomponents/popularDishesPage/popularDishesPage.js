import React, { Component } from 'react'
import { connect } from 'react-redux'
import './popularDishesPage.css'
import { changePage, displayMenuItemBreakdownHandler } from '../../../../../actions'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'
import TimeframeBreakdownButtons from '../../../../global/timeframeBreakdownButtons/timeframeBreakdownButtons'
import menuItems from './subcomponents/menuItemBreakdown/menuItems.json'

class PopularDishesPage extends Component {
  constructor() {
    super()
    this.state = {
      timeframeSelected: 2,
      menuItems: menuItems
    }
  }

  render() {
    return (
      <div className='popularDishesPageContainer'>
        <CornerCloseButton onClick={() => this.props.changePage(0)} />
        <h1 className='breakdownPageHeader'>Online Sales Breakdown</h1>
        <TimeframeBreakdownButtons timeframeSelected={this.state.timeframeSelected} updateTimeframe={(newTime) => this.setState({ timeframeSelected: newTime })} />
        <div className='popularDishesInterfaceContainer'>
          <div className='popularDishesHeaderContainer'>
            <div style={{ justifySelf: 'start', marginLeft: '10px' }}>
              <p className='popularDishesHeaderText'>Name</p>
            </div>
            <div>
              <p className='popularDishesHeaderText'>Section</p>
            </div>
            <div>
              <p className='popularDishesHeaderText'>Quantity Sold</p>
            </div>
            <div>
              <p className='popularDishesHeaderText'>Total Revenue</p>
            </div>
            <div>
              <p className='popularDishesHeaderText'>Cart Remove</p>
            </div>
          </div>
          <div className='popularDishesBodyContainer'>
            {this.state.menuItems.map((value, index) => (
              <div className='popularDishesItemContainer'>
                <p className='popularDishesItemText popularDishesItemNameText' onMouseDown={() => this.props.displayMenuItemBreakdownHandler(10, value.breakdownData)}>{value.name}</p>
                <p className='popularDishesItemText'>{value.section}</p>
                <p className='popularDishesItemText'>{value.quantitySold}</p>
                <p className='popularDishesItemText'>${value.totalRevenue}.00</p>
                <p className='popularDishesItemText'>{value.cartRemove}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { changePage, displayMenuItemBreakdownHandler })(PopularDishesPage)

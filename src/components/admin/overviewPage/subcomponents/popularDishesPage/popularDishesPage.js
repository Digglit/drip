import React, { Component } from 'react'
import { connect } from 'react-redux'
import './popularDishesPage.css'
import { changePage } from '../../../../../actions'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'
import TimeframeBreakdownButtons from '../../../../global/timeframeBreakdownButtons/timeframeBreakdownButtons'

class PopularDishesPage extends Component {
  constructor() {
    super()
    this.state = {
      timeframeSelected: 2,
      menuItems: [
        {
          name: 'Quesadilla',
          section: 'Appetizers',
          quantitySold: 28,
          totalRevenue: 252,
          cartRemove: 11,
        },
        {
          name: 'Chicken Tenders',
          section: 'Appetizers',
          quantitySold: 24,
          totalRevenue: 168,
          cartRemove: 6,
        },
        {
          name: 'Wings',
          section: 'Appetizers',
          quantitySold: 22,
          totalRevenue: 224,
          cartRemove: 7,
        },
        {
          name: 'Fries',
          section: 'Appetizers',
          quantitySold: 20,
          totalRevenue: 100,
          cartRemove: 5,
        },
        {
          name: 'Chicken Philly',
          section: 'Specialty Pies',
          quantitySold: 20,
          totalRevenue: 320,
          cartRemove: 7,
        },
        {
          name: 'Buffalo Chicken',
          section: 'Subs & Wraps',
          quantitySold: 19,
          totalRevenue: 133,
          cartRemove: 5,
        },
      ]
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
            <div style={{justifySelf: 'start', marginLeft: '10px'}}>
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
                <p className='popularDishesItemText popularDishesItemNameText'>{value.name}</p>
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

export default connect(mapStateToProps, { changePage })(PopularDishesPage)

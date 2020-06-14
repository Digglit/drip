import React, { Component } from 'react'
import { connect } from 'react-redux'
import './customerDataPage.css'
import { changePage, viewCustomerDetailsHandler } from '../../../../../actions'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'
import TimeframeBreakdownButtons from '../../../../global/timeframeBreakdownButtons/timeframeBreakdownButtons'

class CustomerDataPage extends Component {
  constructor() {
    super()
    this.state = {
      timeframeSelected: 2
    }
  }

  render() {
    return (
      <div className='customerDataPageContainer'>
        <CornerCloseButton onClick={() => this.props.changePage(0)} />
        <h1 className='breakdownPageHeader'>Online Customer Breakdown</h1>
        <TimeframeBreakdownButtons timeframeSelected={this.state.timeframeSelected} updateTimeframe={(newTime) => this.setState({ timeframeSelected: newTime })} />
        <div className='popularDishesInterfaceContainer'>
          <div className='popularDishesHeaderContainer'>
            <div style={{ justifySelf: 'start', marginLeft: '10px' }}>
              <p className='popularDishesHeaderText'>Name</p>
            </div>
            <div>
              <p className='popularDishesHeaderText'>Orders</p>
            </div>
            <div>
              <p className='popularDishesHeaderText'>Latest Order</p>
            </div>
            <div>
              <p className='popularDishesHeaderText'>Total Spent</p>
            </div>
            <div>
              <p className='popularDishesHeaderText'>Average Order</p>
            </div>
          </div>
          <div className='popularDishesBodyContainer'>
            <div className='popularDishesItemContainer'>
              <p className='popularDishesItemText popularDishesItemNameText' onMouseDown={() => this.props.viewCustomerDetailsHandler(10, null)}>Angela Michaels</p>
              <p className='popularDishesItemText'>1</p>
              <p className='popularDishesItemText'>4/23/20</p>
              <p className='popularDishesItemText'>$67.50</p>
              <p className='popularDishesItemText'>$67.50</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { changePage, viewCustomerDetailsHandler })(CustomerDataPage)

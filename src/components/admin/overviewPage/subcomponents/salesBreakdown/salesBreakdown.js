import React, { Component } from 'react'
import { connect } from 'react-redux'
import './salesBreakdown.css'
import { changePage } from '../../../../../actions'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'
import TimeframeBreakdownButtons from '../../../../global/timeframeBreakdownButtons/timeframeBreakdownButtons'
import Graph from '../../../../global/graph/graph'

class SalesBreakdown extends Component {
  constructor() {
    super()
    this.state = {
      timeframeSelected: 2,
    }
  }

  render() {
    return (
      <div className='salesBreakdownPageContainer'>
        <CornerCloseButton onClick={() => this.props.changePage(0)} />
        <h1 className='breakdownPageHeader'>Online Sales Overview</h1>
        <TimeframeBreakdownButtons timeframeSelected={this.state.timeframeSelected} updateTimeframe={(newTime) => this.setState({ timeframeSelected: newTime })} />
        <div className='salesBreakdownPageGraphContainer'>
          <Graph />
        </div>
        <div className='salesBreakdownPageTextContainer'>
          <div>
            <h1 className='breakdownPageHeader'>Sales</h1>
            <p className='salesBreakdownPageText'>Total Sales: $1,950.50</p>
            <p className='salesBreakdownPageText'>Delivery: $1,230.50</p>
            <p className='salesBreakdownPageText'>Pickup: $720.00</p>
          </div>
          <div>
            <h1 className='breakdownPageHeader'>Tips</h1>
            <p className='salesBreakdownPageText'>Total: $230.00</p>
            <p className='salesBreakdownPageText'>Delivery: $165.60</p>
            <p className='salesBreakdownPageText'>Pickup: $64.40</p>
          </div>
          <div>
            <h1 className='breakdownPageHeader'>Orders</h1>
            <p className='salesBreakdownPageText'>Total: 92</p>
            <p className='salesBreakdownPageText'>Delivery: 59</p>
            <p className='salesBreakdownPageText'>Pickup: 33</p>
          </div>
        </div>
        <button className='primaryButton salesBreakdownPageViewMoreButton' onMouseDown={() => this.props.changePage(5)}>View Breakdown</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, { changePage })(SalesBreakdown)

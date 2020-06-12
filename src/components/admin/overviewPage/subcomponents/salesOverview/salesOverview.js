import React, { Component } from 'react'
import './salesOverview.css'
import { connect } from 'react-redux'
import { changePage } from '../../../../../actions'

class SalesOverview extends Component {
  render() {
    return (
      <div className='salesOverviewContainer'>
        <div className='textContainer'>
          <h1 className='overviewPageHeader'>Weekly Sales Overview</h1>
          <p className='overviewPageBody'>From Sunday, May 10th to Saturday, May 16th, you've totaled $1950.50 in online sales. Online sales are up 16% from the week prior - nice work!</p>
          <button className='salesOverviewButton primaryButton' onMouseDown={() => this.props.changePage(4)}>View More</button>
        </div>
        <div className='salesOverviewGraph'>

        </div>
      </div>
    )
  }
}

export default connect(null, { changePage })(SalesOverview)
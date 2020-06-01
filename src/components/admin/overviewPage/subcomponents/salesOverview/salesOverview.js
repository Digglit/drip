import React, { Component } from 'react'
import './salesOverview.css'

export default class SalesOverview extends Component {
  render() {
    return (
      <div className='salesOverviewContainer'>
        <div className='textContainer'>
          <h1 className='overviewPageHeader'>Weekly Sales Overview</h1>
          <p className='overviewPageBody'>From Sunday, May 10th to Saturday, May 16th, you've totaled $1950.50 in online sales. Online sales are up 16% from the week prior - nice work!</p>
          <button className='salesOverviewButton primaryButton'>View More</button>
        </div>
        <div className='salesOverviewGraph'>
          
        </div>
      </div>
    )
  }
}

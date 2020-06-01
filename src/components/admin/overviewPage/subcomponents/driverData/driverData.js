import React, { Component } from 'react'
import './driverData.css'

export default class DriverData extends Component {
  render() {
    return (
      <div className='driverDataContainer'>
        <div className='textContainer'>
          <h1 className='overviewPageHeader'>Drivers & Delivery</h1>
          <p className='overviewPageBody'>Drivers have averaged 6% less deliveries per hour this week. Consider sending out a promotion or cutting delivery hours to increase profits.</p>
          <button className='salesOverviewButton primaryButton'>View More</button>
        </div>
        <div className='salesOverviewGraph'>
          
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './customerData.css'

export default class CustomerData extends Component {
  render() {
    return (
      <div className='customerDataContainer'>
        <div className='textContainer' style={{height: '70%'}}>
          <h1 className='overviewPageHeader'>Customer Data</h1>
          <p className='overviewPageBody'>Out of the 90 orders placed in the last week, 13 were placed by repeat customers. Learn more about what your customers like about you and reward them with some juicy discounts!</p>
          <button className='salesOverviewButton primaryButton'>View More</button>
        </div>
        <div className='salesOverviewGraph'>
          
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import SalesOverview from './subcomponents/salesOverview/salesOverview'
import PopularDishes from './subcomponents/popularDishes/popularDishes'
import CustomerData from './subcomponents/customerData/customerData'
import DriverData from './subcomponents/driverData/driverData'
import './overviewPage.css'

export default class OverviewPage extends Component {
  render() {
    return (
      <div className='overviewPageContainer'>
        <SalesOverview />
        <PopularDishes />
        <CustomerData />
        <DriverData />
      </div>
    )
  }
}

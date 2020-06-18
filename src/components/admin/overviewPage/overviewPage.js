import React, { Component } from 'react'
import SalesOverview from './subcomponents/salesOverview/salesOverview'
import PopularDishes from './subcomponents/popularDishes/popularDishes'
import CustomerData from './subcomponents/customerData/customerData'
import DriverData from './subcomponents/driverData/driverData'
import './overviewPage.css'
import { motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../global/pageTransition'

export default class OverviewPage extends Component {
  render() {
    return (
      <motion.div className='overviewPageContainer' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }} >
        <SalesOverview />
        <PopularDishes />
        <CustomerData />
        <DriverData />
      </motion.div>
    )
  }
}

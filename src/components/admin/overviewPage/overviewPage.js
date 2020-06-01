import React, { Component } from 'react'
import SalesOverview from './subcomponents/salesOverview'

export default class OverviewPage extends Component {
  render() {
    return (
      <div className='overviewPageContainer'>
        <SalesOverview />
      </div>
    )
  }
}

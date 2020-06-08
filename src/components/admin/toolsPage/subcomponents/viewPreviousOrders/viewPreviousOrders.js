import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewPreviousOrdersHandler } from '../../../../../actions'
import './viewPreviousOrders.css'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import DropDown from '../../../../global/dropDown/dropDown'
import PlusExpander from '../../../../global/plusExpander/plusExpander'

class ViewPreviousOrders extends Component {
  constructor() {
    super()
    this.state = {
      days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      years: ['2020', '2019', '2018', '2017', '2016', '2015', '2014'],
      daySelected: -1,
      monthSelected: -1,
      yearSelected: -1,
      previousOrders: [],
      nameArray: ['Bryan Cranston'],
      orderNumberArray: ['100211'],
      orderTimeArray: ['6:15 PM']
    }
  }

  changeDayHandler = (newDay) => {
    this.setState({ daySelected: newDay })
  }

  changeMonthHandler = (newMonth) => {
    this.setState({ monthSelected: newMonth })
  }

  changeYearHandler = (newYear) => {
    this.setState({ yearSelected: newYear })
  }

  searchHandler = () => {
    let previousOrders = this.state.previousOrders
    previousOrders.push('')
    this.setState({ previousOrders })
  }

  removePreviousOrderHandler = (index) => {
    console.log(index)
  }

  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.viewPreviousOrdersHandler(0)} style={{ zIndex: this.props.zIndex }} />
        <div className={`viewPreviousOrdersContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={'View Older Orders'} closeButton={null} closeButton={() => this.props.viewPreviousOrdersHandler(0)} />
          <div className='previousOrdersSearchContainer'>
            <p>Enter Date to Search:</p>
            <DropDown items={this.state.days} changeOption={this.changeDayHandler} itemSelected={this.state.daySelected} width={100} />
            <DropDown items={this.state.months} changeOption={this.changeMonthHandler} itemSelected={this.state.monthSelected} width={200} />
            <DropDown items={this.state.years} changeOption={this.changeYearHandler} itemSelected={this.state.yearSelected} width={150} />
            <button className='primaryButton previousOrdersSearchButton' onMouseDown={this.searchHandler}>Search</button>
          </div>
          <div className='previousOrdersBody'>
            {this.state.previousOrders.length === 0 ?
              <p className='noPreviousOrdersText'>Enter Date To Search</p>
              :
              this.state.previousOrders.map((value, index) => (
                <div className='previousOrderContainer' key={index}>
                  <PlusExpander onClick={() => this.removePreviousOrderHandler(index)} customClass={'previousOrderPlusExpander'} colorClass={'previousOrderPlusExpanderColor'} />
                  <p>{this.state.nameArray[index]}</p>
                  <p>Order Number: {this.state.orderNumberArray[index]}</p>
                  <p>Order Time: {this.state.orderTimeArray[index]}</p>
                </div>
              ))
            }
          </div>
          <div className='previousOrdersFooter'>
            <button className='primaryButton previousOrdersFooterButton' onMouseDown={() => this.props.viewPreviousOrdersHandler(0)}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  zIndex: state.pastOrdersDisplay.zIndex,
  open: state.pastOrdersDisplay.open
})

export default connect(mapStateToProps, { viewPreviousOrdersHandler })(ViewPreviousOrders)

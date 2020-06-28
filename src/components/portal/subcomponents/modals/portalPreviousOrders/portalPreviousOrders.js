import React, { Component } from 'react'
import { connect } from 'react-redux'
import { displayPreviousOrders, displayCustomerDetails } from '../../../../../actions/portal'
import './portalPreviousOrders.css'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import DropDown from '../../../../global/dropDown/dropDown'
import { modalTransition, transitionDuration } from '../../../../global/pageTransition'
import { motion } from 'framer-motion'

class PortalPreviousOrders extends Component {
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
      orders: [
        {
          orderTotal: 0,
          orderNumber: 100356,
          name: "Jack Stevens",
          orderItemQuantity: 0,
          tip: 0,
          orderDate: "",
          orderTime: "6:15 PM",
          driver: "",
          orderType: "",
          address: "",
          lat: 0,
          lng: 0,
          orderItems: [
            {
              itemName: "",
              itemKey: "",
              itemSection: "",
              itemDescription: "",
              quantity: 0
            }
          ]
        },
        {
          orderTotal: 0,
          orderNumber: 100355,
          name: "Angela Michaels",
          orderItemQuantity: 0,
          tip: 0,
          orderDate: "",
          orderTime: "5:38 PM",
          driver: "",
          orderType: "",
          address: "",
          lat: 0,
          lng: 0,
          orderItems: [
            {
              itemName: "",
              itemKey: "",
              itemSection: "",
              itemDescription: "",
              quantity: 0
            }
          ]
        },
        {
          orderTotal: 0,
          orderNumber: 100354,
          name: "Leonardo Diogini",
          orderItemQuantity: 0,
          tip: 0,
          orderDate: "",
          orderTime: "5:12 PM",
          driver: "",
          orderType: "",
          address: "",
          lat: 0,
          lng: 0,
          orderItems: [
            {
              itemName: "",
              itemKey: "",
              itemSection: "",
              itemDescription: "",
              quantity: 0
            }
          ]
        },
      ],
      customers: [
        {
          selected: false,
          customerData: {
            name: 'Angela Michaels',
            email: 'Dmarting@gmail.com',
            phoneNumber: '4406223278',
            address: '1270 Angel View Drive',
            totalSpending: 36,
            averageOrderPrice: 36,
            ordersPlaced: 1,
            itemsOrdered: 4,
            latestOrder: '3/22/20',
            preferredOrderMethod: 'Pickup',
            orders: [
              {
                date: '3/22/20',
                orderNumber: 100364,
                orderTotal: 36,
                tip: 3.3,
                time: '5:36 PM',
                orderQuantity: 4,
                orderType: 'Pickup',
                driver: '',
                address: '1270 Angel View Drive',
                orderItems: [
                  {
                    quantity: 2,
                    name: 'Fries',
                    section: 'Appetizers',
                    description: 'Traditional'
                  },
                  {
                    quantity: 1,
                    name: 'Wings',
                    section: 'Appetizers',
                    description: 'Garlic Parmesan, Ranch, 12-Piece'
                  },
                  {
                    quantity: 1,
                    name: 'Chicken Parmesan',
                    section: 'Subs & Wraps',
                    description: 'Sub, 6-Inch, Fries'
                  }
                ]
              }
            ]
          }
        },
        {

          selected: false,
          customerData: {
            name: 'Jack Stevens',
            email: 'JackS@gmail.com',
            phoneNumber: '4406223278',
            address: '6480 anywhere street',
            totalSpending: 72,
            averageOrderPrice: 36,
            ordersPlaced: 2,
            itemsOrdered: 8,
            latestOrder: '3/22/20',
            preferredOrderMethod: 'Pickup',
            orders: [
              {
                date: '3/22/20',
                orderNumber: 100364,
                orderTotal: 36,
                tip: 3.3,
                time: '5:36 PM',
                orderQuantity: 4,
                orderType: 'Pickup',
                driver: '',
                address: '1270 Angel View Drive',
                orderItems: [
                  {
                    quantity: 2,
                    name: 'Fries',
                    section: 'Appetizers',
                    description: 'Traditional'
                  },
                  {
                    quantity: 1,
                    name: 'Wings',
                    section: 'Appetizers',
                    description: 'Garlic Parmesan, Ranch, 12-Piece'
                  },
                  {
                    quantity: 1,
                    name: 'Chicken Parmesan',
                    section: 'Subs & Wraps',
                    description: 'Sub, 6-Inch, Fries'
                  }
                ]
              },
              {
                date: '1/27/20',
                orderNumber: 100107,
                orderTotal: 36,
                tip: 3.3,
                time: '7:22 PM',
                orderQuantity: 4,
                orderType: 'Delivery',
                driver: 'ZackG',
                address: '1270 Angel View Drive',
                orderItems: [
                  {
                    quantity: 2,
                    name: 'Fries',
                    section: 'Appetizers',
                    description: 'Traditional'
                  },
                  {
                    quantity: 1,
                    name: 'Wings',
                    section: 'Appetizers',
                    description: 'Garlic Parmesan, Ranch, 12-Piece'
                  },
                  {
                    quantity: 1,
                    name: 'Chicken Parmesan',
                    section: 'Subs & Wraps',
                    description: 'Sub, 6-Inch, Fries'
                  }
                ]
              }
            ]
          }
        },
        {

          selected: false,
          customerData: {
            name: 'Bryan Mallop',
            email: 'BryGuy622@gmail.com',
            phoneNumber: '4406223278',
            address: '31155 Brown Road',
            totalSpending: 36,
            averageOrderPrice: 36,
            ordersPlaced: 1,
            itemsOrdered: 4,
            latestOrder: '3/22/20',
            preferredOrderMethod: 'Pickup',
            orders: [
              {
                date: '3/22/20',
                orderNumber: 100364,
                orderTotal: 36,
                tip: 3.3,
                time: '5:36 PM',
                orderQuantity: 4,
                orderType: 'Pickup',
                address: '1270 Angel View Drive',
                orderItems: [
                  {
                    quantity: 2,
                    name: 'Fries',
                    section: 'Appetizers',
                    description: 'Traditional'
                  },
                  {
                    quantity: 1,
                    name: 'Wings',
                    section: 'Appetizers',
                    description: 'Garlic Parmesan, Ranch, 12-Piece'
                  },
                  {
                    quantity: 1,
                    name: 'Chicken Parmesan',
                    section: 'Subs & Wraps',
                    description: 'Sub, 6-Inch, Fries'
                  }
                ]
              }
            ]
          }
        },
        {
          selected: false,
          customerData: {
            name: 'Leonardo Diogini',
            email: 'LeonardoD88@gmail.com',
            phoneNumber: '4406223278',
            address: '1270 Angel View Drive',
            totalSpending: 36,
            averageOrderPrice: 36,
            ordersPlaced: 1,
            itemsOrdered: 4,
            latestOrder: '3/22/20',
            preferredOrderMethod: 'Pickup',
            orders: [
              {
                date: '3/22/20',
                orderNumber: 100364,
                orderTotal: 36,
                tip: 3.3,
                time: '5:36 PM',
                orderQuantity: 4,
                orderType: 'Pickup',
                address: '1270 Angel View Drive',
                orderItems: [
                  {
                    quantity: 2,
                    name: 'Fries',
                    section: 'Appetizers',
                    description: 'Traditional'
                  },
                  {
                    quantity: 1,
                    name: 'Wings',
                    section: 'Appetizers',
                    description: 'Garlic Parmesan, Ranch, 12-Piece'
                  },
                  {
                    quantity: 1,
                    name: 'Chicken Parmesan',
                    section: 'Subs & Wraps',
                    description: 'Sub, 6-Inch, Fries'
                  }
                ]
              }
            ]
          }
        }
      ]
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
    this.setState({ previousOrders: this.state.orders })
  }

  findCustomerHandler = (name) => {
    for (let i = 0; i < this.state.customers.length; ++i) {
      if (this.state.customers[i].customerData.name === name) {
        return this.props.displayCustomerDetails(this.state.customers[i].customerData)
      }
    }
  }

  render() {
    return (
      <motion.div className='portalPreviousOrdersContainer' style={{ zIndex: this.props.zIndex + 1 }} initial={modalTransition.initial} animate={modalTransition.in} exit={modalTransition.out} transition={{ duration: transitionDuration }}>
        <ModuleHeader header={'View Older Orders'} closeButton={this.props.displayPreviousOrders} />
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
                <p style={{ justifySelf: 'start' }}>{value.name}</p>
                <p>Order Number: {value.orderNumber}</p>
                <p>Order Time: {value.orderTime}</p>
                <button className='previousOrdersViewOrderButton secondaryButton' onMouseDown={() => this.findCustomerHandler(value.name)}>View Customer</button>
              </div>
            ))
          }
        </div>
        <div className='previousOrdersFooter'>
          <button className='primaryButton previousOrdersFooterButton' onMouseDown={this.props.displayPreviousOrders}>Close</button>
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { displayPreviousOrders, displayCustomerDetails })(PortalPreviousOrders)

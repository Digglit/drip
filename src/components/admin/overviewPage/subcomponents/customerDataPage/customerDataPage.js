import React, { Component } from 'react'
import { connect } from 'react-redux'
import './customerDataPage.css'
import { changePage, viewCustomerDetailsHandler, composeEmailHandler } from '../../../../../actions'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'
import TimeframeBreakdownButtons from '../../../../global/timeframeBreakdownButtons/timeframeBreakdownButtons'
import Checkbox from '../../../../global/checkbox/checkbox'
import { motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../../../global/pageTransition'
import Input from '../../../../global/input/input'

class CustomerDataPage extends Component {
  constructor() {
    super()
    this.state = {
      timeframeSelected: 2,
      selectAllCustomers: false,
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

  sendEmailHandler = () => {
    this.props.composeEmailHandler(10, '')
  }

  selectCustomerHandler = (index) => {
    let customers = this.state.customers
    customers[index].selected = !customers[index].selected
    this.setState({ customers })
  }

  render() {
    return (
      <motion.div className='customerDataPageContainer' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
        <CornerCloseButton onClick={() => this.props.changePage(0)} />
        <h1 className='breakdownPageHeader'>Online Customer Breakdown</h1>
        <div className='customerDataPageButtonsContainer'>
          <TimeframeBreakdownButtons timeframeSelected={this.state.timeframeSelected} updateTimeframe={(newTime) => this.setState({ timeframeSelected: newTime })} />
          <button className='customerDataPageEmailButton primaryButton' onMouseDown={this.sendEmailHandler}>Send Email</button>
        </div>
        <div className='customerDataPageInterfaceContainer'>
          <div className='customerDataPageSearchContainer'>
            <Input customClass={'customerDataPageSearchInput'} placeholder={'Name, Order Number, Date...'}/>
            <button className='customerDataPageSearchButton primaryButton'>Search</button>
          </div>
          <div className='popularDishesHeaderContainer'>
            <div className='customerDataHeaderContainer' style={{ justifySelf: 'start', marginLeft: '10px' }}>
              <Checkbox customClass={'customerDataPageCheckbox'} checked={this.state.selectAllCustomers} onMouseDown={() => this.setState({ selectAllCustomers: !this.state.selectAllCustomers })} />
              <p className='popularDishesHeaderText' style={{marginLeft: '10px'}}>Name</p>
            </div>
            <div className='customerDataHeaderContainer'>
              <p className='popularDishesHeaderText'>Orders</p>
            </div>
            <div className='customerDataHeaderContainer'>
              <p className='popularDishesHeaderText'>Latest Order</p>
            </div>
            <div className='customerDataHeaderContainer'>
              <p className='popularDishesHeaderText'>Total Spent</p>
            </div>
            <div className='customerDataHeaderContainer'>
              <p className='popularDishesHeaderText'>Average Order</p>
            </div>
          </div>
          <div className='popularDishesBodyContainer'>
            {this.state.customers.map((value, index) => (
              <div className='popularDishesItemContainer'>
                <div className='customerDataPageItemNameContainer'>
                  <Checkbox customClass={'customerDataPageCheckbox'} checked={this.state.customers[index].selected} onMouseDown={() => this.selectCustomerHandler(index)} />
                  <p className='popularDishesItemText popularDishesItemNameText' onMouseDown={() => this.props.viewCustomerDetailsHandler(10, value.customerData)}>{value.customerData.name}</p>
                </div>
                <p className='popularDishesItemText'>{value.customerData.ordersPlaced}</p>
                <p className='popularDishesItemText'>{value.customerData.latestOrder}</p>
                <p className='popularDishesItemText'>{value.customerData.totalSpending}</p>
                <p className='popularDishesItemText'>{value.customerData.averageOrderPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { changePage, viewCustomerDetailsHandler, composeEmailHandler })(CustomerDataPage)

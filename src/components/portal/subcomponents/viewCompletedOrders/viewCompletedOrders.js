import React, { Component } from 'react'
import { connect } from 'react-redux'
import './viewCompletedOrders.css'
import { motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../../global/pageTransition'
import { changePage, displayCustomerDetails } from '../../../../actions/portal'
import CornerCloseButton from '../../../global/cornerCloseButton/cornerCloseButton'

class ViewCompletedOrders extends Component {
  constructor() {
    super()
    this.state = {
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

  render() {
    return (
      <motion.div className='viewCompletedOrdersPageContainer' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
        <CornerCloseButton onClick={() => this.props.changePage(0)} />
        <div className='viewCompletedOrdersHeaderContainer'>
          <div>
            <h2 className='viewCompletedOrdersHeader'>Today's Tips</h2>
            <p className='viewCompletedOrdersHeaderText'>Pickup: $4.80</p>
            <p className='viewCompletedOrdersHeaderText'>Delivery: $4.80</p>
            <h2 className='viewCompletedOrdersHeader' style={{position: 'absolute', bottom: 15}}>Today's Tips</h2>
          </div>
          <div className='viewCompletedOrdersGraph' />
        </div>
        <div className='viewCompletedOrdersOrdersContainer'>
          <div className='viewCompletedOrdersOrdersHeader'>
            <p className='viewCompletedOrdersOrdersHeaderText'>Name</p>
            <p className='viewCompletedOrdersOrdersHeaderText'>Order Number</p>
            <p className='viewCompletedOrdersOrdersHeaderText'>Order Time</p>
            <p className='viewCompletedOrdersOrdersHeaderText' style={{justifySelf: 'center', marginLeft: 0}}>Customer Details</p>
          </div>
          <div className='viewCompletedOrdersOrdersBody'>
          {this.state.customers.map((value, index) => (
            <div className='viewCompletedOrdersOrder'>
              <p className='viewCompletedOrdersOrderText'>{value.customerData.name}</p>
              <p className='viewCompletedOrdersOrderText'>{value.customerData.orders[0].orderNumber}</p>
              <p className='viewCompletedOrdersOrderText'>{value.customerData.orders[0].time}</p>
              <button className='viewCompletedOrderOrderButton secondaryButton' onMouseDown={() => this.props.displayCustomerDetails(value.customerData)}>View Customer</button>
            </div>
          ))}
          </div>
        </div>
        <div className='viewCompletedOrdersFooterContainer'>
          <p className='viewCompletedOrdersFooterText'>Total Orders Today: 6</p>
          <button className='viewCompletedOrdersFooterButton primaryButton'>View Older Orders</button>
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { changePage, displayCustomerDetails })(ViewCompletedOrders)

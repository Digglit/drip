import React, { Component } from 'react'
import { connect } from 'react-redux'
import './customerDetails.css'
import { viewCustomerDetailsHandler, composeEmailHandler, changePage, closeCustomerDetailsHandler } from '../../../../../../../actions'
import ModuleHeader from '../../../../../../global/moduleHeader/moduleHeader'
import PlusExpander from '../../../../../../global/plusExpander/plusExpander'
import OrderItemModule from '../../../../../../global/orderItemModule/orderItemModule'

class CustomerDetails extends Component {
  constructor() {
    super()
    this.state = {
      orderData: [
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
              itemName: 'Fries',
              itemSection: 'Appetizers',
              itemDescription: 'Traditional',
              itemQuantity: 2
            },
            {
              itemName: 'Wings',
              itemSection: 'Appetizers',
              itemDescription: 'Garlic Parmesan, Ranch, 12-Piece',
              itemQuantity: 1
            },
            {
              itemName: 'Chicken Parmesan',
              itemSection: 'Subs & Wraps',
              itemDescription: 'Sub, 6-inch, fries',
              itemQuantity: 1
            }
          ]
        },
      ],
      orderHistory: [
        {
          itemName: 'Fries',
          itemSection: 'Appetizers',
          itemDescription: 'Traditional',
          itemQuantity: 2
        },
        {
          itemName: 'Wings',
          itemSection: 'Appetizers',
          itemDescription: 'Garlic Parmesan, Ranch, 12-Piece',
          itemQuantity: 1
        },
        {
          itemName: 'Chicken Parmesan',
          itemSection: 'Subs & Wraps',
          itemDescription: 'Sub, 6-inch, fries',
          itemQuantity: 1
        }
      ],
      expandedStates: [false, false, false, false]
    }
  }

  expandContainerHandler = (index) => {
    let expandedStates = this.state.expandedStates
    expandedStates[index] = !expandedStates[index]
    this.setState({ expandedStates })
  }

  sendEmailHandler = () => {
    this.props.composeEmailHandler(this.props.zIndex + 10, '')
  }

  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.closeCustomerDetailsHandler()} style={{ zIndex: this.props.zIndex }} />
        <div className={`customerDetailsContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={'Customer Details'} closeButton={() => this.props.closeCustomerDetailsHandler()} />
          <div className='customerDetailsBodyContainer'>
            <h2 className='customerDetailsHeader'>User Information</h2>
            <p className='customerDetailsText'>Name: {this.props.customerData.name}</p>
            <p className='customerDetailsText'>Email: {this.props.customerData.email}</p>
            <p className='customerDetailsText'>Phone Number: {this.props.customerData.phoneNumber}</p>
            <p className='customerDetailsText'>Address: {this.props.customerData.address}</p>
            <h2 className='customerDetailsHeader'>Sales Data</h2>
            <p className='customerDetailsText'>Total Spending: ${this.props.customerData.totalSpending}</p>
            <p className='customerDetailsText'>Average Order Price: ${this.props.customerData.averageOrderPrice}</p>
            <p className='customerDetailsText'>Orders Placed: {this.props.customerData.ordersPlaced}</p>
            <p className='customerDetailsText'>Items Ordered: {this.props.customerData.itemsOrdered}</p>
            <p className='customerDetailsText'>Latest Order: {this.props.customerData.latestOrder}</p>
            <p className='customerDetailsText'>Preferred Order Method: {this.props.customerData.preferredOrderMethod}</p>
            <h2 className='customerDetailsHeader' style={{ marginBottom: '15px' }}>Order Data</h2>
            {this.props.customerData.orders.map((value, index) => (
              <div className={`customerDetailsOrderDataItemContainer ${index === this.props.customerData.orders.length - 1 ? 'customerDetailsOrderDataItemEndBorder' : ''} ${index === 0 ? 'customerDetailsOrderDataItemStartBorder' : ''}`} key={index}>
                <PlusExpander onClick={() => this.expandContainerHandler(index)} expandedState={this.state.expandedStates[index]} customClass={'customerDetailsOrderDataPlusExpander'} colorClass={'customerDetailsOrderDataPlusColor'} />
                <h2 className='customerDetailsOrderDataDateText'>{value.date}</h2>
                <p className='customerDetailsOrderDataOrderNumberText'>Order Number: {value.orderNumber}</p>
                <div className='customerDetailsOrderDataDetailsContainer' style={this.state.expandedStates[index] ? { height: `${370 + 70 * value.orderItems.length}px`, opacity: '1' } : { height: '0px', opacity: '0', pointerEvents: 'none' }}>
                  <p className='customerDetailsText'>Order Total: ${value.orderTotal}</p>
                  <p className='customerDetailsText'>Tip: ${value.tip}</p>
                  <p className='customerDetailsText'>Time: {value.time}</p>
                  <p className='customerDetailsText'>Order Quantity: {value.orderQuantity}</p>
                  <p className='customerDetailsText'>Order Type: {value.orderType}</p>
                  <p className='customerDetailsText'>Driver: {value.driver}</p>
                  <p className='customerDetailsText'>Address: {value.address}</p>
                  <h2 className='customerDetailsHeader'>Order Items</h2>
                  {value.orderItems.map((value, index) => (
                    <OrderItemModule quantity={value.quantity} name={value.name} section={value.section} description={value.description} key={index} />
                  ))}
                  <button className='customerDetailsRefundButton primaryButton'>Refund Order</button>
                </div>
              </div>
            ))}
            <h2 className='customerDetailsHeader'>All Items Ordered</h2>
            {this.state.orderHistory.map((value, index) => (
              <OrderItemModule quantity={value.itemQuantity} name={value.itemName} section={value.itemSection} description={value.itemDescription} key={index} />
            ))}
            <button className='customerDetailsEmailCustomerButton primaryButton' onMouseDown={this.sendEmailHandler}>Send Email</button>
          </div>
          <div className='customerDetailsFooterContainer'>
            <button className='primaryButton customerDetailsFooterButton' onMouseDown={() => this.props.closeCustomerDetailsHandler()}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.customerDetails.open,
  zIndex: state.customerDetails.zIndex,
  customerData: state.customerDetails.customerData
})

export default connect(mapStateToProps, { viewCustomerDetailsHandler, composeEmailHandler, changePage, closeCustomerDetailsHandler })(CustomerDetails)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './customerDetails.css'
import { viewCustomerDetailsHandler } from '../../../../../../../actions'
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
      expandedStates: [false]
    }
  }

  expandContainerHandler = (index) => {
    let expandedStates = this.state.expandedStates
    expandedStates[index] = !expandedStates[index]
    this.setState({ expandedStates })
  }

  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.viewCustomerDetailsHandler(0)} style={{ zIndex: this.props.zIndex }} />
        <div className={`customerDetailsContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={'Customer Details'} closeButton={() => this.props.viewCustomerDetailsHandler(0)} />
          <div className='customerDetailsBodyContainer'>
            <h2 className='customerDetailsHeader'>User Information</h2>
            <p className='customerDetailsText'>Email: Dmarting@gmail.com</p>
            <p className='customerDetailsText'>Phone Number: (440)-622-3278</p>
            <p className='customerDetailsText'>Address: 1270 Angel View Drive</p>
            <h2 className='customerDetailsHeader'>Sales Data</h2>
            <p className='customerDetailsText'>Total Spending: $36.00</p>
            <p className='customerDetailsText'>Average Order Price: $36.00</p>
            <p className='customerDetailsText'>Orders Placed: 1</p>
            <p className='customerDetailsText'>Items Ordered: 4</p>
            <p className='customerDetailsText'>Latest Order: 3/22/20</p>
            <p className='customerDetailsText'>Preferred Order Method: Pickup</p>
            <h2 className='customerDetailsHeader'>Order Data</h2>
            {this.state.orderData.map((value, index) => (
              <div className={`customerDetailsOrderDataItemContainer ${index === this.state.orderData.length - 1 ? 'customerDetailsOrderDataItemEndBorder' : ''} ${index === this.state.orderData.length - 1 ? 'customerDetailsOrderDataItemStartBorder' : ''}`}>
                <PlusExpander onClick={() => this.expandContainerHandler(index)} expandedState={this.state.expandedStates[index]} customClass={'customerDetailsOrderDataPlusExpander'} colorClass={'customerDetailsOrderDataPlusColor'} />
                <h2 className='customerDetailsOrderDataDateText'>{value.date}</h2>
                <p className='customerDetailsOrderDataOrderNumberText'>Order Number: 100364</p>
                <div className='customerDetailsOrderDataDetailsContainer' style={this.state.expandedStates[index] ? { height: `${335 + 70 * value.orderItems.length}px`, opacity: '1' } : { height: '0px', opacity: '0', pointerEvents: 'none' }}>
                  <p className='customerDetailsText'>Order Total: ${value.orderTotal}</p>
                  <p className='customerDetailsText'>Tip: ${value.tip}</p>
                  <p className='customerDetailsText'>Time: {value.time}</p>
                  <p className='customerDetailsText'>Order Quantity: {value.orderQuantity}</p>
                  <p className='customerDetailsText'>Order Type: {value.orderType}</p>
                  <p className='customerDetailsText'>Address: {value.address}</p>
                  <h2 className='customerDetailsHeader'>Order Items</h2>
                  {value.orderItems.map((value, index) => (
                    <OrderItemModule quantity={value.itemQuantity} name={value.itemName} section={value.itemSection} description={value.itemDescription} />
                  ))}
                  <button className='customerDetailsRefundButton primaryButton'>Refund Order</button>
                </div>
              </div>
            ))}
            <h2 className='customerDetailsHeader'>All Items Ordered</h2>
            {this.state.orderHistory.map((value, index) => (
              <OrderItemModule quantity={value.itemQuantity} name={value.itemName} section={value.itemSection} description={value.itemDescription} />
            ))}
            <button className='customerDetailsEmailCustomerButton primaryButton'>Send Email</button>
          </div>
          <div className='customerDetailsFooterContainer'>
            <button className='primaryButton customerDetailsFooterButton' onMouseDown={() => this.props.viewCustomerDetailsHandler(0)}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.customerDetails.open,
  zIndex: state.customerDetails.zIndex
})

export default connect(mapStateToProps, { viewCustomerDetailsHandler })(CustomerDetails)

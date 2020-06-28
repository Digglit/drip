import React, { Component } from 'react'
import { connect } from 'react-redux'
import './viewOrderDetails.css'
import { motion } from 'framer-motion'
import { modalTransition, transitionDuration } from '../../../../global/pageTransition'
import { displayOrderDetails, changePage, modifyOrderHandler, displayConfirmAction } from '../../../../../actions/portal'
import DropDown from '../../../../global/dropDown/dropDown'

class ViewOrderDetails extends Component {
  constructor() {
    super()
    this.state = {
      modifyOrder: false,
      drivers: [
        'ZackG',
        'Casey',
        'Bryan'
      ],
      driverSelected: 0,
      orderItems: [
        {
          quantity: 2,
          name: 'Mozzarella Sticks',
          description: '',
          notes: 'No Marinara if included',
          price: 14
        },
        {
          quantity: 1,
          name: 'BigM Rolls',
          description: '',
          notes: '',
          price: 7
        },
        {
          quantity: 1,
          name: 'Large Pizza',
          description: 'Toppings: Cheese, Pepperoni, Sausage, White Onions',
          notes: 'Food Allergy with red sauce so please use no sauce. Also if you could cook the pizza just a minute or two longer we\'d really appreciate it!',
          price: 24
        },
        {
          quantity: 1,
          name: 'Small Pizza',
          description: 'Toppings: Cheese',
          notes: '',
          price: 10
        }
      ],
      unmodifiedOrder: [
        {
          quantity: 2,
          name: 'Mozzarella Sticks',
          description: '',
          notes: 'No Marinara if included',
          price: 14
        },
        {
          quantity: 1,
          name: 'BigM Rolls',
          description: '',
          notes: '',
          price: 7
        },
        {
          quantity: 1,
          name: 'Large Pizza',
          description: 'Toppings: Cheese, Pepperoni, Sausage, White Onions',
          notes: 'Food Allergy with red sauce so please use no sauce. Also if you could cook the pizza just a minute or two longer we\'d really appreciate it!',
          price: 24
        },
        {
          quantity: 1,
          name: 'Small Pizza',
          description: 'Toppings: Cheese',
          notes: '',
          price: 10
        }
      ]
    }
  }

  removePrice = 0

  numberToCashPriceHandler = (number) => {
    return `$${number.toFixed(2)}`
  }

  addItemHandler = () => {
    if (!this.props.modifyOrder) {
      this.props.modifyOrderHandler()
    }
    this.props.displayOrderDetails()
    this.props.changePage(1)
  }

  removeItemHandler = (index) => {
    this.removePrice += this.state.orderItems[index].price
    let orderItems = this.state.orderItems.slice(0, index).concat(this.state.orderItems.slice(index + 1, this.state.orderItems.length))
    this.setState({ orderItems })
  }

  confirmRemoveItem = (name, index) => {
    let confirmation = {
      header: 'Remove Item?',
      body: `Are you sure you want to remove ${name} from this order? Changes will not take affect until they are saved.`,
      confirmFunction: () => this.removeItemHandler(index),
      confirmAction: true
    }
    this.props.displayConfirmAction(confirmation)
  }

  cancelModificationHandler = () => {
    this.removePrice = 0
    this.setState({ orderItems: this.state.unmodifiedOrder, modifyOrder: false })
  }

  confirmSaveModification = () => {
    if (this.removePrice === 0) {
      this.saveModificationsHandler()
    } else {
      let confirmation = {
        header: 'Confirm Order Modification',
        body: `A Refund of ${this.numberToCashPriceHandler(this.removePrice)} will be made to Joseph Marella. This will show up as a seperate credit on Joseph's bank statement. Are you sure?`,
        confirmFunction: this.saveModificationsHandler,
        confirmAction: true
      }
      this.props.displayConfirmAction(confirmation)
    }
  }

  saveModificationsHandler = () => {
    this.removePrice = 0
    this.setState({ unmodifiedOrder: this.state.orderItems, modifyOrder: false })
  }

  render() {
    return (
      <motion.div className='portalViewOrderDetailsContainer' style={{ zIndex: this.props.zIndex + 1 }} initial={modalTransition.initial} animate={modalTransition.in} exit={modalTransition.out} transition={{ duration: transitionDuration }}>
        <div className='portalViewOrderDetailsHeaderContainer'>
          <div className='portalViewOrderDetailsHeaderTextContainer'>
            <p className='portalViewOrderDetailsHeaderText'>Name: Joseph Marella</p>
            <p className='portalViewOrderDetailsHeaderText'>Address: 153 Lear Road</p>
          </div>
          <div className='portalViewOrderDetailsHeaderTextContainer'>
            <p className='portalViewOrderDetailsHeaderText'>Phone Number: 440-622-3278</p>
            <p className='portalViewOrderDetailsHeaderText'>Order Number: 100147</p>
          </div>
          <div className='portalViewOrderDetailsHeaderTextContainer' style={{ borderRight: 'none' }}>
            <p className='portalViewOrderDetailsHeaderText'>Type: Delivery</p>
          </div>
          <button className='portalViewOrderDetailsHeaderCloseButton' onMouseDown={this.props.displayOrderDetails}>&#10005;</button>
        </div>
        <div className='portalViewOrderDetailsBodyContainer'>
          {this.state.orderItems.map((value, index) => (
            <div className='portalViewOrderDetailsItemContainer' key={index}>
              <div className='portalViewOrderDetailsItemContentsContainer'>
                <div>
                  <p className='portalViewOrderDetailsItemContentsText'>{value.quantity}x {value.name}</p>
                  {value.description !== '' ? <p className='portalViewOrderDetailsItemContentsDescriptionText'>{value.description}</p> : null}
                </div>
              </div>
              {
                this.state.modifyOrder ?
                  <div className='portalViewOrderDetailsModificationButtonsContainer'>
                    <button className='portalViewOrderDetailsModificationButton secondaryButton'>Modify</button>
                    <button className='portalViewOrderDetailsModificationButton primaryButton' onMouseDown={() => this.confirmRemoveItem(value.name, index)}>Remove</button>
                  </div>
                  :
                  <div className='portalViewOrderDetailsItemNotesContainer'>
                    <div className='portalViewOrderDetailsItemNotesHeaderContainer'>
                      <p className='portalViewOrderDetailsItemNotesHeaderText'>Notes</p>
                    </div>
                    <p className='portalViewOrderDetailsItemNotesText'>{value.notes}</p>
                  </div>
              }
            </div>
          ))}
          {this.state.modifyOrder ? <button className='portalViewOrderDetailsModificationAddItemButton secondaryButton' onMouseDown={this.addItemHandler}>Add Item</button> : null}
        </div>
        <div className='portalViewOrderDetailsFooterContainer'>
          <div className='portalViewOrderDetailsFooterDropdownContainer'>
            <p className='portalViewOrderDetailsFooterText'>Current Driver: </p>
            <DropDown items={this.state.drivers} itemSelected={this.state.driverSelected} width={200} changeOption={(newDriver) => this.setState({ driverSelected: newDriver })} />
          </div>
          <button className='portalViewOrderDetailsFooterButton secondaryButton' onMouseDown={this.state.modifyOrder ? this.cancelModificationHandler : () => this.setState({ modifyOrder: !this.state.modifyOrder })}>{this.state.modifyOrder ? 'Cancel' : 'Modify Order'}</button>
          <button className='portalViewOrderDetailsFooterButton primaryButton' onMouseDown={this.state.modifyOrder ? this.confirmSaveModification : this.props.displayOrderDetails}>{this.state.modifyOrder ? 'Save Changes' : 'Close'}</button>
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({
  modifyOrder: state.modifyOrder
})

export default connect(mapStateToProps, { displayOrderDetails, changePage, modifyOrderHandler, displayConfirmAction })(ViewOrderDetails)

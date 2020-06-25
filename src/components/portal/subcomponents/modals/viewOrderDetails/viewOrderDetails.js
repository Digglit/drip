import React, { Component } from 'react'
import { connect } from 'react-redux'
import './viewOrderDetails.css'
import { motion } from 'framer-motion'
import { modalTransition, transitionDuration } from '../../../../global/pageTransition'
import { displayOrderDetails } from '../../../../../actions/portal'
import DropDown from '../../../../global/dropDown/dropDown'

class ViewOrderDetails extends Component {
  constructor() {
    super()
    this.state = {
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
          notes: 'No Marinara if included'
        },
        {
          quantity: 1,
          name: 'BigM Rolls',
          description: '',
          notes: ''
        },
        {
          quantity: 1,
          name: 'Large Pizza',
          description: 'Toppings: Cheese, Pepperoni, Sausage, White Onions',
          notes: 'Food Allergy with red sauce so please use no sauce. Also if you could cook the pizza just a minute or two longer we\'d really appreciate it!'
        },
        {
          quantity: 1,
          name: 'Small Pizza',
          description: 'Toppings: Cheese',
          notes: ''
        }
      ]
    }
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
            <div className='portalViewOrderDetailsItemContainer'>
              <div className='portalViewOrderDetailsItemContentsContainer'>
                <div>
                  <p className='portalViewOrderDetailsItemContentsText'>{value.quantity}x {value.name}</p>
                  {value.description !== '' ? <p className='portalViewOrderDetailsItemContentsDescriptionText'>{value.description}</p> : null}
                </div>
              </div>
              <div className='portalViewOrderDetailsItemNotesContainer'>
                <div className='portalViewOrderDetailsItemNotesHeaderContainer'>
                  <p className='portalViewOrderDetailsItemNotesHeaderText'>Notes</p>
                </div>
                <p className='portalViewOrderDetailsItemNotesText'>{value.notes}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='portalViewOrderDetailsFooterContainer'>
          <div className='portalViewOrderDetailsFooterDropdownContainer'>
            <p className='portalViewOrderDetailsFooterText'>Current Driver: </p>
            <DropDown items={this.state.drivers} itemSelected={this.state.driverSelected} width={200} changeOption={(newDriver) => this.setState({ driverSelected: newDriver })} />
          </div>
          <button className='portalViewOrderDetailsFooterButton secondaryButton'>Modify Order</button>
          <button className='portalViewOrderDetailsFooterButton primaryButton' onMouseDown={this.props.displayOrderDetails}>Close</button>
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { displayOrderDetails })(ViewOrderDetails)

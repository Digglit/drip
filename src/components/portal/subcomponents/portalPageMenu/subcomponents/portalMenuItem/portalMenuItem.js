import React, { Component } from 'react'
import './portalMenuItem.css'
import foodImage from '../../../../../../assets/wings.jpg'
import { connect } from 'react-redux'
import { displayItemAvailability, displayItemDrawer } from '../../../../../../actions/portal'


class PortalMenuItem extends Component {
  itemClickHandler = () => {
    if (this.props.modifyOrder || this.props.createOrder) {
      this.props.displayItemDrawer()
    } else {
      this.props.displayItemAvailability()
    }
  }

  foodDetails = {
    open: true,
    switched: true,
    sections: [
      'Appetizers',
      'Specialty Pies',
      'Subs & Wraps',
      'Burgers'
    ],
    sectionSelected: 0,
    name: 'Wings',
    price: '$7.50',
    itemDescription: 'These are the wings!',
    modifiers: [
      {
        modifierName: 'Your Choice of Sauce',
        selectAmount: 1,
        allowMultipleSelected: false,
        options: [
          {
            modifier: 'Garlic Parmesan',
            price: 0.00
          },
          {
            modifier: 'BBQ',
            price: 0.00
          },
          {
            modifier: 'Hot',
            price: 0.00
          },
          {
            modifier: 'Mild',
            price: 0.00
          },
          {
            modifier: 'Dry Rub',
            price: 0.00
          },
          {
            modifier: 'Buffalo',
            price: 0.00
          },
          {
            modifier: 'Honey Mustard',
            price: 0.00
          },
        ]
      },
      {
        modifierName: 'Celery and Dip?',
        selectAmount: 1,
        allowMultipleSelected: false,
        options: []
      },
      {
        modifierName: 'Size',
        selectAmount: 1,
        allowMultipleSelected: false,
        options: []
      }
    ],
    image: foodImage,
  }

  render() {
    return (
      <div className='menuItem' style={{ left: `${this.props.position}px` }} onMouseDown={this.itemClickHandler}>
        <img src={this.foodDetails.image} alt={this.foodDetails.name} className='menuItemImage'></img>
        <div className='menuItemNameBackground'>
          <h2 className='menuItemName'>{this.foodDetails.name}</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modifyOrder: state.modifyOrder,
    createOrder: state.createOrder
  }
}

export default connect(mapStateToProps, { displayItemAvailability, displayItemDrawer })(PortalMenuItem)
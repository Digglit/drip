import React, { Component } from 'react'
import './menuItem.css'
import foodImage from '../../../../../../assets/wings.jpg'
import { displayBackdrop, openMenuItemDrawerWithDetails } from '../../../../../../actions'
import { connect } from 'react-redux'


class MenuItem extends Component {
  itemClickHandler = () => {
    this.props.displayBackdrop()
    this.props.openMenuItemDrawerWithDetails(this.foodDetails)
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
    modifiers: ['1) Your Choice of Sauce', '2) Celery and Dip?', '3) Size'],
    image: foodImage,
  }

  render() {
    return (
      <div className='menuItem' style={{ left: `${this.props.position}px` }} onMouseDown={this.itemClickHandler}>
        <img src={foodImage} className='menuItemImage'></img>
        <div className='menuItemNameBackground'>
          <h1 className='menuItemName'>Wings</h1>
        </div>
      </div>
    )
  }
}

export default connect(null, { displayBackdrop, openMenuItemDrawerWithDetails })(MenuItem)
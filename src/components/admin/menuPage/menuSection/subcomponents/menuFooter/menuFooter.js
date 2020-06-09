import React, { Component } from 'react'
import './menuFooter.css'
import { connect } from 'react-redux'
import { displayBackdrop, openMenuItemDrawerWithDetails, displayEditModifiersHandler } from '../../../../../../actions'

class MenuFooter extends Component {

  newItemHandler = () => {
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
    sectionSelected: -1,
    name: '',
    price: '$',
    itemDescription: '',
    modifiers: [],
    image: null,
  }

  render() {
    return (
      <div className='menuFooterContainer'>
        <button className='primaryButton menuFooterButton' onMouseDown={this.newItemHandler}>Create New Item</button>
        <button className='secondaryButton menuFooterButton' onMouseDown={() => this.props.displayEditModifiersHandler(10)}>Edit Modifiers</button>
      </div>
    )
  }
}

export default connect(null, { displayBackdrop, openMenuItemDrawerWithDetails, displayEditModifiersHandler })(MenuFooter)
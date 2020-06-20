import React, { Component } from 'react'
import './menuFooter.css'
import { connect } from 'react-redux'
import { displayBackdrop, openMenuItemDrawerWithDetails, displayEditModifiersHandler, changePage, displayCheckoutHandler, placeOrderHandler } from '../../../../../../actions'

class MenuFooter extends Component {

  newItemHandler = () => {
    this.props.displayBackdrop()
    this.props.openMenuItemDrawerWithDetails(this.foodDetails)
  }

  closeMenuHandler = () => {
    if (this.props.placingOrder) {
      this.props.placeOrderHandler(0)
      this.props.changePage(3)
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
        {this.props.placingOrder ?
          <button className='primaryButton menuFooterButton' onMouseDown={() => this.props.displayCheckoutHandler(10)}>Checkout</button>
          :
          <button className='primaryButton menuFooterButton' onMouseDown={this.newItemHandler}>Create New Item</button>
        }
        {this.props.placingOrder ?
          <button className='secondaryButton menuFooterButton' onMouseDown={() => this.props.changePage(3)}>Cancel</button>
          :
          <button className='secondaryButton menuFooterButton' onMouseDown={() => this.props.displayEditModifiersHandler(10, 'edit', null)}>Edit Modifiers</button>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  placingOrder: state.menuPageState
})

export default connect(mapStateToProps, { displayBackdrop, openMenuItemDrawerWithDetails, displayEditModifiersHandler, changePage, displayCheckoutHandler, placeOrderHandler })(MenuFooter)
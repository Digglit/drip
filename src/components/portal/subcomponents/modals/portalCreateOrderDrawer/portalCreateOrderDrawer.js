import React, { Component } from 'react'
import './portalCreateOrderDrawer.css'
import { connect } from 'react-redux'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'
import NumberIncrementer from '../../../../global/numberIncrementer/numberIncrementer'
import { displayItemDrawer } from '../../../../../actions/portal'
import { motion } from 'framer-motion'
import { drawerTransition, drawerTransitionDuration } from '../../../../global/pageTransition'
import foodImage from '../../../../../assets/wings.jpg'

class PortalCreateOrderDrawer extends Component {

  constructor() {
    super()
    this.state = {
      drawerPosition: window.innerWidth,
      modifierSelected: [-1, -1, -1],
      quantity: 1,
      modifiers: [
        {
          title: 'Your Choice Of Sauce',
          options: [
            { name: 'BBQ' },
            { name: 'Garlic Parmesan' },
            { name: 'Hot' },
            { name: 'Mild' },
            { name: 'Dry Rub' },
            { name: 'Buffalo' },
            { name: 'Honey Mustard' },
            { name: 'Plain' },
          ]
        },
        {
          title: 'Add Celery and Dip for $1.50?',
          options: [
            { name: 'Ranch' },
            { name: 'Blue Cheese' },
            { name: 'No Dip' },
            { name: 'No Thanks' },
          ]
        },
        {
          title: 'Size',
          options: [
            { name: '6-Piece' },
            { name: '12-Piece' },
          ]
        }
      ]
    }
  }

  selectModifierHandler = (modifier, modifierOption) => {
    let modifierSelected = this.state.modifierSelected
    modifierSelected[modifier] = modifierOption
    this.setState({ modifierSelected })
  }

  adjustQuantityHandler = (button) => {
    if (button) this.setState({ quantity: this.state.quantity + 1 })
    else if (this.state.quantity > 1) this.setState({ quantity: this.state.quantity - 1 })
  }

  render() {
    return (
      <motion.div className='portalItemDrawerContainer' initial={drawerTransition.initial} animate={drawerTransition.in} exit={drawerTransition.out} transition={{ duration: drawerTransitionDuration }} style={{ zIndex: this.props.zIndex }}>
        <CornerCloseButton onClick={this.props.displayItemDrawer} />
        <div className='itemDrawerHeaderContainer'>
          <img className='itemDrawerHeaderImage' alt='Food Item' src={foodImage} />
          <div className='createOrderDrawerHeaderTextContainer'>
            <h1 className='createOrderDrawerHeaderText'>Wings</h1>
          </div>
        </div>
        <div className='createOrderDrawerBody'>
          <div className='createOrderBodyModifierHeaderContainer'>
            <h2 className='createOrderBodyModifierHeaderText'>Modifiers</h2>
          </div>
          {this.state.modifiers.map((value, index) => (
            <div className='createOrderBodyModifierContainer' key={index}>
              <h3 className='createOrderBodyModifierTitle'>{value.title}</h3>
              <br />
              {value.options.map((item, i) => (
                <button className={`createOrderBodyModifierButton ${this.state.modifierSelected[index] === i ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.selectModifierHandler(index, i)}>{item.name}</button>
              ))}
            </div>
          ))}
          <br />
          <p className='createOrderBodyText'>Quantity: </p>
          <NumberIncrementer value={this.state.quantity} adjustNumberHandler={this.adjustQuantityHandler} />
          <br />
          <h3 className='createOrderBodyModifierTitle'>Additional Notes</h3>
          <br />
          <textarea className='createOrderBodyTextArea' placeholder='Ex: Seafood allergy, No red sauce, No cheese' />
        </div>
        <div className='itemDrawerFooter'>
          <button className='secondaryButton itemDrawerFooterButton' onMouseDown={this.props.displayItemDrawer}>Cancel</button>
          <button className='primaryButton itemDrawerFooterButton'>Add To Order</button>
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps, { displayItemDrawer })(PortalCreateOrderDrawer)

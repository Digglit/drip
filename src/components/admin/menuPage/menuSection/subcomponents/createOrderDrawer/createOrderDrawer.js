import React, { Component } from 'react'
import './createOrderDrawer.css'
import { connect } from 'react-redux'
import { openMenuItemDrawer, displayBackdrop, displayConfirmationPrompt, closeConfirmationPrompt } from '../../../../../../actions'
import CornerCloseButton from '../../../../../global/cornerCloseButton/cornerCloseButton'

class CreateOrderDrawer extends Component {

  constructor() {
    super()
    this.state = {
      drawerPosition: window.innerWidth,
      modifierSelected: [-1, -1, -1],
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
    this.drawerRef = React.createRef()
  }

  componentDidMount() {
    this.setState({ drawerPosition: this.drawerRef.current.offsetWidth })
  }

  confirmedFunction = () => {
    this.props.closeConfirmationPrompt()
    this.props.displayBackdrop()
    this.props.openMenuItemDrawer()
  }

  selectModifierHandler = (modifier, modifierOption) => {
    let modifierSelected = this.state.modifierSelected
    modifierSelected[modifier] = modifierOption
    this.setState({ modifierSelected })
  }

  render() {
    return (
      <div>
        <div className={`menuOverlay ${this.props.backdropDisplay ? '' : 'hide'}`} onMouseDown={this.confirmedFunction} />
        <div className='itemDrawerContainer' id='drawerContainer' ref={this.drawerRef} style={{ right: `-${this.props.drawerOpen ? 0 : this.state.drawerPosition}px` }}>
          <CornerCloseButton onClick={this.confirmedFunction} />
          <div className='itemDrawerHeaderContainer'>
            <img className='itemDrawerHeaderImage' alt='Food Item' src={this.props.image} />
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
          </div>
          <div className='itemDrawerFooter'>
            <button className='secondaryButton itemDrawerFooterButton' onMouseDown={this.confirmedFunction}>Cancel</button>
            <button className='primaryButton itemDrawerFooterButton'>Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    drawerOpen: state.menuDrawerOpenStatus.open,
    image: state.menuDrawerOpenStatus.image,
    backdropDisplay: state.backdropDisplay,
  }
}

export default connect(mapStateToProps, { openMenuItemDrawer, displayBackdrop, displayConfirmationPrompt, closeConfirmationPrompt })(CreateOrderDrawer)

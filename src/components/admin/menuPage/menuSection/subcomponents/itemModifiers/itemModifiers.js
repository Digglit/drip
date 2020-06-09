import React, { Component } from 'react'
import './itemModifiers.css'
import { connect } from 'react-redux'
import { displayItemModifiersHandler, displayConfirmationPrompt, closeConfirmationPrompt } from '../../../../../../actions'
import ModuleHeader from '../../../../../global/moduleHeader/moduleHeader'
import Input from '../../../../../global/input/input'
import Switch from '../../../../../global/switch/switch'
import ItemModifierOption from './subcomponents/itemModifierOption'
import WholeNumberInput from '../../../../../global/wholeNumberInput/wholeNumberInput'

export class ItemModifiers extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      modifierName: '',
      allowMultipleSelected: false,
      selectAmount: 1,
      options: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.itemData.open !== state.open)
      return {
        open: props.itemData.open,
        modifierName: props.itemData.modifierName,
        allowMultipleSelected: props.itemData.allowMultipleSelected,
        selectAmount: props.itemData.selectAmount,
        options: props.itemData.options
      }
    else
      return null
  }

  saveChangesHandler = () => {
    let confirmationInfo = {
      open: true,
      zIndex: 50,
      header: 'Save Changes?',
      body: <p style={{ margin: '0px' }}>Save changes to <strong>{this.props.itemData.modifierName}</strong>?</p>,
      confirmAction: true,
      confirmFunction: this.confirmSaveHandler
    }
    this.props.displayConfirmationPrompt(confirmationInfo)
  }

  confirmSaveHandler = () => {
    this.props.closeConfirmationPrompt()
    this.props.displayItemModifiersHandler(0)
  }

  updateModifierPriceHandler = (newValue, index) => {
    let modifierOptions = this.state.options
    modifierOptions[index].price = newValue
    this.setState({ options: modifierOptions })
  }

  render() {
    return (
      <div>
        <div className={this.props.itemData.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displayItemModifiersHandler(0)} style={{ zIndex: this.props.itemData.zIndex }} />
        <div className={`manageItemModifiersContainer ${this.props.itemData.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.itemData.zIndex + 1 }}>
          <ModuleHeader header={`Editing Modifier "${this.props.itemData.modifierName}"`} closeButton={() => this.props.displayItemModifiersHandler(0)} />
          <div className='manageItemModifiersBodyContainer'>
            <div className='manageItemModifiersInputContainer'>
              <p className='manageItemModifiersText'>Modifier Name:</p>
              <Input value={this.state.modifierName} onChange={(e) => this.setState({ modifierName: e.target.value })} />
            </div>
            <div>
              <div className='manageItemModifiersInputContainer' style={{ marginRight: '20px' }}>
                <p className='manageItemModifiersText'>Allow Multiple Selected: </p>
                <Switch switched={this.state.allowMultipleSelected} onSwitch={() => this.setState({ allowMultipleSelected: !this.state.allowMultipleSelected })} />
              </div>
              <div className='manageItemModifiersInputContainer'>
                <p className='manageItemModifiersText'>Max Selection Amount: </p>
                <WholeNumberInput value={this.state.selectAmount} onChange={(newValue) => this.setState({ selectAmount: newValue })} />
              </div>
            </div>
            <div>
              <p className='manageItemModifiersText'>Options</p>
              {this.state.options.map((value, index) => (
                <ItemModifierOption name={value.modifier} value={value.price} key={index} onChange={(newValue) => this.updateModifierPriceHandler(newValue, index)} />
              ))}
              <button className='secondaryButton manageItemModifiersAddNewButton'>Add New Modifier</button>
            </div>
          </div>
          <div className='manageItemModifiersFooterContainer'>
            <button className='secondaryButton manageItemModifiersFooterButton' style={{ gridColumn: 2 }} onMouseDown={() => this.props.displayItemModifiersHandler(0)}>Cancel</button>
            <button className='primaryButton manageItemModifiersFooterButton' style={{ gridColumn: 3 }} onMouseDown={this.saveChangesHandler}>Save Changes</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  itemData: state.itemModifiers
})

export default connect(mapStateToProps, { displayItemModifiersHandler, displayConfirmationPrompt, closeConfirmationPrompt })(ItemModifiers)

import React, { Component } from 'react'
import './itemDrawerBody.css'
import { connect } from 'react-redux'
import Switch from '../../../../../../../global/switch/switch'
import DropDown from '../../../../../../../global/dropDown/dropDown'
import Input from '../../../../../../../global/input/input'
import NumberInput from '../../../../../../../global/numberInput/numberInput'
import { displayConfirmationPrompt, closeConfirmationPrompt, displayItemModifiersHandler } from '../../../../../../../../actions'

class ItemDrawerBody extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
      rendering: true,
      displayAddModifier: false,
      newModifierName: '',
    }
  }

  initialState = {
    switched: this.props.itemDetails.switched,
    sections: this.props.itemDetails.sections,
    sectionSelected: this.props.itemDetails.sectionSelected,
    name: this.props.itemDetails.name,
    price: this.props.itemDetails.price,
    itemDescription: this.props.itemDetails.itemDescription,
    modifiers: this.props.itemDetails.modifiers,
  }

  componentDidUpdate(prevProps) {
    console.log('Component Updated')
    if (prevProps !== this.props && this.props !== this.initialState) {
      this.setState({
        switched: this.props.itemDetails.switched,
        sections: this.props.itemDetails.sections,
        sectionSelected: this.props.itemDetails.sectionSelected,
        name: this.props.itemDetails.name,
        price: this.props.itemDetails.price,
        itemDescription: this.props.itemDetails.itemDescription,
        modifiers: this.props.itemDetails.modifiers,
      })
    }
  }

  updateName = (e) => {
    this.setState({ name: e.target.value })
  }

  updateBasePrice = (newValue) => {
    this.setState({ price: newValue })
  }

  updateTextDescription = (e) => {
    this.setState({ itemDescription: e.target.value })
  }

  switchHandler = () => {
    this.setState({ switched: !this.state.switched })
  }

  changeDropdownSelectionHandler = (newSelection) => {
    this.setState({ sectionSelected: newSelection })
  }

  addModifierHandler = () => {
    let modifiers = this.state.modifiers
    let newModifier = {
      modifierName: this.state.newModifierName,
      selectAmount: 1,
      allowMultipleSelected: false,
      options: []
    }
    modifiers.push(newModifier)
    this.setState({ modifiers, displayAddModifier: false })
  }

  removeModifierHandler = (i) => {
    let modifiers = this.state.modifiers
    modifiers = modifiers.slice(0, i).concat(modifiers.slice(i + 1, modifiers.length))
    this.setState({ modifiers })
  }

  confirmRemovalHandler = (index) => {
    this.removeModifierHandler(index)
    this.props.closeConfirmationPrompt()
  }

  confirmActionHandler = (index, name) => {
    let confirmationInfo = {
      header: 'Remove Modifier?',
      body: <p style={{ margin: '0px' }}>Remove <strong>{name}</strong> as a modifier?</p>,
      open: true,
      confirmFunction: () => this.confirmRemovalHandler(index),
      zIndex: 20,
      confirmAction: true,
    }
    this.props.displayConfirmationPrompt(confirmationInfo)
  }

  render() {
    return (
      <div className='itemDrawerBody'>
        <div className='itemDetailsContainer'>

          {/* Input Container for Item Name */}
          <div style={{ marginLeft: '10px' }}>
            <p>Name</p>
            <Input
              onChange={this.updateName}
              value={this.state.name}
              customStyle={null}
              customClass={null}
            />
          </div>

          {/* Input Container for Base Price */}
          <div>
            <p>Base-Price</p>
            <NumberInput
              onChange={this.updateBasePrice}
              value={this.state.price}
              customStyle={{ width: '80px' }}
              customClass={null}
            />
          </div>

          {/* Input Container for Item Description */}
          <div style={{ gridColumnStart: 1, gridColumnEnd: 3, height: '100%', marginLeft: '10px' }} className='itemDescriptionTextAreaContainer' >
            <p style={{ margin: '0px' }}>Description</p>
            <textarea className='itemDescriptionTextArea' value={this.state.itemDescription} onChange={this.updateTextDescription} />
          </div>

          {/* Container for Availability Switch */}
          <div style={{ gridColumn: 3, gridRow: 1, marginLeft: '10px' }}>
            <p>Item Available</p>
            <Switch
              switched={this.state.switched}
              onSwitch={this.switchHandler}
              additionalStyles={null}
            />
          </div>

          {/* Container for Dropdown Menu */}
          <div>
            <p>Section</p>
            <DropDown
              items={this.state.sections}
              itemSelected={this.state.sectionSelected}
              changeOption={this.changeDropdownSelectionHandler}
              width={200}
            />
          </div>
        </div>

        {/* Start Modifiers Container */}
        <div className='itemDrawerItemModifiersContainer'>
          <h1 className='itemDrawerItemModifiersHeader'>Modifiers:</h1>
          <div className='itemDrawerItemModifiersWrapper'>
            {this.state.modifiers.map((value, index) => (
              <div className='itemDrawerItemModifier' key={index}>
                <p className='itemDrawerItemModifierText'>{index + 1}) {value.modifierName}</p>
                <button className='itemDrawerModifierButton primaryButton' onMouseDown={() => this.confirmActionHandler(index, value.modifierName)}>Remove</button>
                <button className='itemDrawerModifierButton secondaryButton' onMouseDown={() => this.props.displayItemModifiersHandler(10, value)}>Edit Option</button>
              </div>
            ))}
            {this.state.displayAddModifier ?
              <div className='itemDrawerAddNewModifierContainer'>
                <Input value={this.state.newModifierName} onChange={(e) => this.setState({ newModifierName: e.target.value })} customClass={'itemDrawerAddModifierInput'} placeholder={'Modifier Title'} />
                <button className='secondaryButton itemDrawerModifierButton' onMouseDown={() => this.setState({ displayAddModifier: false, newModifierName: '' })}>Cancel</button>
                <button className='primaryButton itemDrawerModifierButton' onMouseDown={this.addModifierHandler}>Save</button>
              </div>
              : null}
            {this.state.displayAddModifier ? null : <button className='secondaryButton itemDrawerAddModifierButton' onMouseDown={() => this.setState({ displayAddModifier: true })}>Add Modifier</button>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemDetails: state.menuDrawerOpenStatus
  }
}

export default connect(mapStateToProps, { displayConfirmationPrompt, closeConfirmationPrompt, displayItemModifiersHandler })(ItemDrawerBody)

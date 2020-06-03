import React, { Component } from 'react'
import './itemDrawerBody.css'
import { connect } from 'react-redux'
import Switch from '../../../../../../../global/switch/switch'
import DropDown from '../../../../../../../global/dropDown/dropDown'
import Input from '../../../../../../../global/input/input'
import NumberInput from '../../../../../../../global/numberInput/numberInput'

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
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.setState({
        switched: this.props.itemDetails.switched,
        sections: this.props.itemDetails.sections,
        sectionSelected: this.props.itemDetails.sectionSelected,
        name: this.props.itemDetails.name,
        price: this.props.itemDetails.price,
        itemDescription: this.props.itemDetails.itemDescription,
        modifiers: this.props.itemDetails.modifiers,
      }, () => console.log(this.state))
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
            />
          </div>
        </div>

        {/* Start Modifiers Container */}
        <div className='itemDrawerItemModifiersContainer'>
          <h1 className='itemDrawerItemModifiersHeader'>Modifiers:</h1>
          <div className='itemDrawerItemModifiersWrapper'>
            {this.state.modifiers.map((value, index) => (
              <div className='itemDrawerItemModifier' key={index}>
                <p className='itemDrawerItemModifierText'>{value}</p>
                <button className='itemDrawerModifierButton primaryButton'>Remove</button>
                <button className='itemDrawerModifierButton secondaryButton'>Edit Option</button>
              </div>
            ))}
            <button className='secondaryButton itemDrawerAddModifierButton' onMouseDown={this.addModifierHandler}>Add Modifier</button>
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

export default connect(mapStateToProps, null)(ItemDrawerBody)

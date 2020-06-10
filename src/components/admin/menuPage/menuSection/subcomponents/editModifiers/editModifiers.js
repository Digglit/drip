import React, { Component } from 'react'
import { connect } from 'react-redux'
import './editModifiers.css'
import { displayEditModifiersHandler, addNewModifierHandler } from '../../../../../../actions'
import ModuleHeader from '../../../../../global/moduleHeader/moduleHeader'
import Input from '../../../../../global/input/input'

class EditModifiers extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: '',
      creatingModifier: false,
      newModifierTitle: '',
      newModifierDescription: '',
    }
  }

  createNewModifierHandler = () => {
    if (this.state.newModifierTitle !== '' && this.state.newModifierDescription !== '') {
      let newModifier = {
        name: this.state.newModifierTitle,
        description: this.state.newModifierDescription
      }
      this.props.addNewModifierHandler(newModifier)
      this.setState({ creatingModifier: false, newModifierTitle: '', newModifierDescription: '' })
    }
  }

  modifierButtonHandler = (name, description) => {
    if (this.props.mode === 'edit') {

    } else {
      this.props.buttonFunction(name, description)
      this.props.displayEditModifiersHandler(0)
    }
  }

  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displayEditModifiersHandler(0)} style={{ zIndex: this.props.zIndex }} />
        <div className={`editModifiersContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={this.props.mode === 'edit' ? 'Edit Modifiers' : 'Add Modifiers'} closeButton={() => this.props.displayEditModifiersHandler(0)} />
          <div className='editModifiersSearchContainer'>
            <Input value={this.state.searchValue} onChange={(e) => this.setState({ searchValue: e.target.value })} customClass={'editModifiersSearchInput'} placeholder={'Search'} />
            <button className='editModifiersSearchButton primaryButton' onMouseDown={() => this.setState({ creatingModifier: true })}>Create New Modifier</button>
          </div>
          <div className='editModifiersBodyContainer'>
            {this.props.modifiers.map((value, index) => (
              <div className='editModifiersModifierContainer' key={index}>
                <p className='editModifiersModifierText'>{value.name}</p>
                <p className='editModifiersModifierDescription'>{value.description}</p>
                <button className='secondaryButton editModifiersModiferButton' onMouseDown={() => this.modifierButtonHandler(value.name, value.description)}>{this.props.mode === 'edit' ? 'Remove' : 'Add'}</button>
              </div>
            ))}
            {this.state.creatingModifier ?
              <div className='editModifiersNewModifierContainer'>
                <div className='editModifiersNewModifierInputContainer'>
                  <p className='editModifiersNewModifierText'>Name:</p>
                  <Input value={this.state.newItemTitle} onChange={(e) => this.setState({ newModifierTitle: e.target.value })} customClass={'editModifiersNewModifierInput'} />
                </div>
                <div className='editModifiersNewModifierInputContainer'>
                  <p className='editModifiersNewModifierText'>Description:</p>
                  <Input value={this.state.newModifierDescription} onChange={(e) => this.setState({ newModifierDescription: e.target.value })} customClass={'editModifiersNewModifierInput'} />
                </div>
                <button className='secondaryButton editModifiersNewModifierButton' style={{ gridRow: 1 }} onMouseDown={() => this.setState({ creatingModifier: false })}>Cancel</button>
                <button className='primaryButton editModifiersNewModifierButton' style={{ gridRow: 2 }} onMouseDown={this.createNewModifierHandler}>Save</button>
              </div>
              : null}
          </div>
          <div className='editModifiersFooterContainer'>
            <button className='editModifiersCloseButton primaryButton' onMouseDown={() => this.props.displayEditModifiersHandler(0)}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.editModifiers.open,
  zIndex: state.editModifiers.zIndex,
  modifiers: state.editModifiers.modifiers,
  mode: state.editModifiers.mode,
  buttonFunction: state.editModifiers.buttonFunction
})

export default connect(mapStateToProps, { displayEditModifiersHandler, addNewModifierHandler })(EditModifiers)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './editModifiers.css'
import { displayEditModifiersHandler } from '../../../../../../actions'
import ModuleHeader from '../../../../../global/moduleHeader/moduleHeader'
import Input from '../../../../../global/input/input'

class EditModifiers extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: ''
    }
  }

  render(){
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displayEditModifiersHandler(0)} style={{ zIndex: this.props.zIndex }} />
        <div className={`editModifiersContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={'Edit Modifiers'} closeButton={() => this.props.displayEditModifiersHandler(0)}/>
          <div className='editModifiersSearchContainer'>
            <Input value={this.state.searchValue} onChange={(e) => this.setState({searchValue: e.target.value})} customClass={'editModifiersSearchInput'} placeholder={'Search'}/>
            <button className='editModifiersSearchButton primaryButton'>Create New Modifier</button>
          </div>
          <div className='editModifiersBodyContainer'>
            {this.props.modifiers.map((value, index) => (
              <div className='editModifiersModifierContainer'>
                <p className='editModifiersModifierText'>{value}</p>
                <button className='secondaryButton editModifiersModiferButton'>Remove</button>
              </div>
            ))}
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
  modifiers: state.editModifiers.modifiers
})

export default connect(mapStateToProps, { displayEditModifiersHandler })(EditModifiers)

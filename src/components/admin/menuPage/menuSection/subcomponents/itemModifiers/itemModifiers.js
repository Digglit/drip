import React, { Component } from 'react'
import './itemModifiers.css'
import { connect } from 'react-redux'
import { displayItemModifiersHandler } from '../../../../../../actions'
import ModuleHeader from '../../../../../global/moduleHeader/moduleHeader'
import Input from '../../../../../global/input/input'
import Switch from '../../../../../global/switch/switch'
import NumberInput from '../../../../../global/numberInput/numberInput'
import ItemModifierOption from './subcomponents/itemModifierOption'

export class ItemModifiers extends Component {
  saveChangesHandler = () => {
    
  }

  render() {
    return (
      <div>
        <div className={this.props.itemData.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displayItemModifiersHandler(0)} style={{ zIndex: this.props.itemData.zIndex }} />
        <div className={`manageItemModifiersContainer ${this.props.itemData.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.itemData.zIndex + 1 }}>
          <ModuleHeader header={`Editing Modifier "${this.props.itemData.modifierName}"`} closeButton={() => this.props.displayItemModifiersHandler(0)}/>
          <div className='manageItemModifiersBodyContainer'>
            <div>
              <p>Modifier Name:</p>
              <Input value={this.props.itemData.modifierName} onChange={null}/>
            </div>
            <div>
              <div>
                <p>Allow Multiple Selected: </p>
                <Switch switched={this.props.itemData.allowMultipleSelected} onSwitch={null}/>
              </div>
              <div>
                <p>Max Selection Amount: </p>
                <NumberInput value={this.props.itemData.selectAmount} onChange={null}/>
              </div>
            </div>
            <div>
              <p>Options</p>
              <ItemModifierOption name={'Garlic Parmesan'} value={0.00}/>
            </div>
          </div>
          <div className='manageItemModifiersFooterContainer'>
            <button className='secondaryButton manageItemModifiersFooterButton' style={{gridColumn: 2}} onMouseDown={() => this.props.displayItemModifiersHandler(0)}>Cancel</button>
            <button className='primaryButton manageItemModifiersFooterButton' style={{gridColumn: 3}}>Save Changes</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  itemData: state.itemModifiers
})

export default connect(mapStateToProps, { displayItemModifiersHandler })(ItemModifiers)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalPageItemAvailability.css'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'
import { displayItemAvailability } from '../../../../../actions/portal'
import { motion } from 'framer-motion'
import { modalTransition, transitionDuration } from '../../../../global/pageTransition'
import wings from '../../../../../assets/wings.jpg'
import Switch from '../../../../global/switch/switch'

class PortalPageItemAvailability extends Component {
  constructor() {
    super()
    this.state = {
      itemAvailable: true,
      modifiers: [
        {
          title: 'Your Choice of Sauce',
          options: [
            {
              name: 'Honey Mustard',
              available: true
            },
            {
              name: 'Garlic Parmesan',
              available: true
            },
            {
              name: 'Dry Rub',
              available: true
            },
            {
              name: 'BBQ',
              available: true
            },
            {
              name: 'Buffalo',
              available: true
            },
            {
              name: 'Mild',
              available: true
            },
            {
              name: 'Hot',
              available: true
            },
            {
              name: 'Plain',
              available: true
            },
          ]
        },
        {
          title: 'Add Celery and Dip for $1.50?',
          options: [
            {
              name: 'Ranch',
              available: true
            },
            {
              name: 'Blue Cheese',
              available: true
            },
            {
              name: 'No Dip',
              available: true
            },
            {
              name: 'No Thanks',
              available: true
            }
          ]
        },
        {
          title: 'Size',
          options: [
            {
              name: '6-Piece',
              available: true
            },
            {
              name: '12-Piece',
              available: true
            }
          ]
        }
      ]
    }
  }

  changeModifierAvailabilityHandler = (modifierIndex, optionIndex) => {
    let modifiers = this.state.modifiers
    modifiers[modifierIndex].options[optionIndex].available = !modifiers[modifierIndex].options[optionIndex].available
    this.setState({ modifiers })
  }


  render() {
    return (
      <motion.div className='portalPageItemAvailabilityContainer' style={{ zIndex: this.props.zIndex }} initial={modalTransition.initial} animate={modalTransition.in} exit={modalTransition.out} transition={{ duration: transitionDuration }}>
        <CornerCloseButton onClick={this.props.displayItemAvailability} />
        <div className='portalPageItemAvailabilityHeaderContainer'>
          <img className='portalPageItemAvailabilityHeaderImage' src={wings} />
          <div className='portalPageItemAvailabilityHeaderTextContainer'>
            <h1 className='portalPageItemAvailabilityHeaderText'>Wings</h1>
          </div>
        </div>
        <div className='portalPageItemAvailabilityBodyContainerOne'>
          <div className='portalPageItemAvailabilitySwitchContainer'>
            <p className='portalPageItemAvailabilityText'>Item Available:</p>
            <Switch onSwitch={() => this.setState({ itemAvailable: !this.state.itemAvailable })} switched={this.state.itemAvailable} additionalStyles={{ display: 'inline-block' }} />
          </div>
          {/* <p className='portalPageItemAvailabilityText' style={{ marginRight: 0, marginBottom: 10, alignSelf: 'end' }}>Modifiers</p> */}
        </div>
        <div className='portalPageItemAvailabilityBodyContainerTwo'>
          {this.state.modifiers.map((value, index) => (
            <div>
              <p className='portalPageItemAvailabilityText portalPageItemModifierTitle'>{value.title}</p>
              <div className='portalPageItemAvailabilityModifiersContainer'>
                {value.options.map((option, i) => (
                  <div className='portalPageItemAvailabilitySwitchContainer'>
                    <p className='portalPageItemAvailabilityModifierText'>{option.name}:</p>
                    <Switch onSwitch={() => this.changeModifierAvailabilityHandler(index, i)} switched={option.available} additionalStyles={{ display: 'inline-block' }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='portalPageItemAvailabilityFooter'>
          <button className='portalPageItemAvailabilityFooterButton primaryButton' onMouseDown={this.props.displayItemAvailability}>Close</button>
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { displayItemAvailability })(PortalPageItemAvailability)

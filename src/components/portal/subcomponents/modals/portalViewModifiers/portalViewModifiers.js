import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalViewModifiers.css'
import { motion } from 'framer-motion'
import { modalTransition, transitionDuration } from '../../../../global/pageTransition'
import { displayViewModifiers } from '../../../../../actions/portal'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import Switch from '../../../../global/switch/switch'

class PortalViewModifiers extends Component {
  constructor() {
    super()
    this.state = {
      modifiers: [
        {
          name: 'Honey Mustard',
          available: true
        },
        {
          name: 'Ranch',
          available: true
        },
        {
          name: 'BBQ',
          available: true
        },
        {
          name: 'Ketchup',
          available: true
        },
        {
          name: 'Side of Fries',
          available: true
        },
        {
          name: 'Blue Cheese',
          available: true
        },
        {
          name: 'Hot',
          available: true
        },
      ]
    }
  }

  modifyAvailabilityHandler = (index) => {
    let modifiers = this.state.modifiers
    modifiers[index].available = !modifiers[index].available
    this.setState({ modifiers })
  }

  render() {
    return (
      <motion.div className='portalViewModifiersContainer' style={{ zIndex: this.props.zIndex + 1 }} initial={modalTransition.initial} animate={modalTransition.in} exit={modalTransition.out} transition={{ duration: transitionDuration }}>
        <ModuleHeader header={'View Modifiers'} closeButton={this.props.displayViewModifiers} />
        <div className='portalViewModifiersBodyContainer'>
          {this.state.modifiers.map((value, index) => (
            <div className='portalViewModifiersOption' key={index}>
              <p className='portalViewModifiersOptionText'>{value.name}</p>
              <Switch switched={value.available} onSwitch={() => this.modifyAvailabilityHandler(index)} />
            </div>
          ))}
        </div>
        <div className='portalViewModifiersFooterContainer'>
          <button className='portalViewModifiersFooterButton primaryButton' onMouseDown={this.props.displayViewModifiers}>Close</button>
        </div>
      </motion.div>
    )
  }
}

export default connect(null, { displayViewModifiers })(PortalViewModifiers)

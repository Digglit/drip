import React, { Component } from 'react'
import './menuPage.css'
import { connect } from 'react-redux'
import MenuSection from './menuSection/menuSection'
import { displayBackdrop, openMenuItemDrawer, displayConfirmationPrompt, closeConfirmationPrompt } from '../../../actions'
import MenuFooter from './menuSection/subcomponents/menuFooter/menuFooter'
import { motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../global/pageTransition'

class MenuPage extends Component {
  backdropClickHandler = () => {
    this.props.displayBackdrop({ open: false })
    this.props.openMenuItemDrawer()
    this.props.closeConfirmationPrompt()
  }

  closeDrawerHandler = () => {
    let actionDetails = {
      open: true,
      header: 'Close Without Saving?',
      body: 'Are you sure you want to close without saving your changes?',
      confirmFunction: this.backdropClickHandler,
      zIndex: 20,
      confirmAction: true,
    }
    this.props.displayConfirmationPrompt(actionDetails)
  }

  render() {
    return (
      <motion.div className='menuPagecontainer' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
        <div className='menuContainer'>
          <MenuSection />
          <MenuSection />
          <MenuSection />
          <MenuSection />
          <MenuFooter />
        </div>
      </motion.div>
    )
  }
}

const mapStateToProps = state => ({
  backdropDisplay: state.backdropDisplay,
})

export default connect(mapStateToProps, { displayBackdrop, openMenuItemDrawer, displayConfirmationPrompt, closeConfirmationPrompt })(MenuPage)

import React, { Component } from 'react'
import './menuPage.css'
import { connect } from 'react-redux'
import MenuSection from './menuSection/menuSection'
import { displayBackdrop, openMenuItemDrawer, displayConfirmationPrompt, closeConfirmationPrompt, changePage } from '../../../actions'
import MenuFooter from './menuSection/subcomponents/menuFooter/menuFooter'
import { motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../global/pageTransition'
import CornerCloseButton from '../../global/cornerCloseButton/cornerCloseButton'
import CornerCheckoutButton from '../../global/cornerCheckoutButton/cornerCheckoutButton'

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
        {/* <CornerCloseButton onClick={() => this.props.changePage(0)}/> */}
        <CornerCheckoutButton onClick={() => this.props.changePage(0)}/>
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

export default connect(mapStateToProps, { displayBackdrop, openMenuItemDrawer, displayConfirmationPrompt, closeConfirmationPrompt, changePage })(MenuPage)

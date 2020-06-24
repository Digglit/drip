import React, { Component } from 'react'
import './menuPage.css'
import { connect } from 'react-redux'
import MenuSection from './menuSection/menuSection'
import { displayBackdrop, openMenuItemDrawer, displayConfirmationPrompt, closeConfirmationPrompt, changePage, displayCheckoutHandler } from '../../../actions'
import MenuFooter from './menuSection/subcomponents/menuFooter/menuFooter'
import { AnimatePresence, motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../global/pageTransition'
import CornerCloseButton from '../../global/cornerCloseButton/cornerCloseButton'
import CornerCheckoutButton from '../../global/cornerCheckoutButton/cornerCheckoutButton'
import CheckoutPage from './subcomponents/checkoutPage/checkoutPage'
import MenuItem from './menuSection/subcomponents/menuItem/menuItem'

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
        <AnimatePresence exitBeforeEnter>
          {this.props.checkoutDisplayOpen ?
            <motion.div className='checkoutContainer' key='afuy098uw0f' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
              <CheckoutPage />
            </motion.div>
            :
            <motion.div className='menuContainer' key='a0s9df09jwf' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
              {this.props.placingOrder ?
                <CornerCheckoutButton onClick={() => this.props.changePage(3)} /> :
                <CornerCloseButton onClick={() => this.props.changePage(0)} />
              }
              <MenuSection MenuItem={MenuItem} />
              <MenuSection MenuItem={MenuItem} />
              <MenuSection MenuItem={MenuItem} />
              <MenuSection MenuItem={MenuItem} />
              <MenuFooter />
            </motion.div>
          }
        </AnimatePresence>
      </motion.div>
    )
  }
}

const mapStateToProps = state => ({
  backdropDisplay: state.backdropDisplay,
  checkoutDisplayOpen: state.orderCheckout.open,
  checkoutDisplayZIndex: state.orderCheckout.zIndex,
  placingOrder: state.menuPageState
})

export default connect(mapStateToProps, { displayBackdrop, openMenuItemDrawer, displayConfirmationPrompt, closeConfirmationPrompt, changePage, displayCheckoutHandler })(MenuPage)

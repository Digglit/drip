import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalPageMenu.css'
import CornerCloseButton from '../../../global/cornerCloseButton/cornerCloseButton'
import { changePage, displayViewModifiers, checkoutHandler } from '../../../../actions/portal'
import { pageTransition, transitionDuration } from '../../../global/pageTransition'
import MenuSection from '../../../admin/menuPage/menuSection/menuSection'
import CheckoutPage from '../../../admin/menuPage/subcomponents/checkoutPage/checkoutPage'
import { AnimatePresence, motion } from 'framer-motion'
import PortalMenuItem from './subcomponents/portalMenuItem/portalMenuItem'
import CornerCheckoutButton from '../../../global/cornerCheckoutButton/cornerCheckoutButton'

class PortalPageMenu extends Component {
  render() {
    return (
      <motion.div className='portalPageMenuContainer' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
        <AnimatePresence exitBeforeEnter>
          {this.props.checkoutDisplay ?
            <motion.div className='checkoutContainer' key='asdg3q4gewrgh' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
              <CheckoutPage />
            </motion.div>
            :
            <motion.div className='portalMenuContainer' key='q34y3hq34t3qty' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
              {this.props.creatingOrder ? <CornerCheckoutButton onClick={() => this.props.changePage(2)} /> : <CornerCloseButton onClick={() => this.props.changePage(0)} />}
              <MenuSection MenuItem={PortalMenuItem} />
              <MenuSection MenuItem={PortalMenuItem} />
              <MenuSection MenuItem={PortalMenuItem} />
              <MenuSection MenuItem={PortalMenuItem} />
              <div className='portalMenuFooterContainer'>
                {this.props.creatingOrder ?
                  <button className='portalMenuFooterButton primaryButton' onMouseDown={this.props.creatingOrder ? this.props.checkoutHandler : this.props.displayViewModifiers}>Checkout</button>
                  :
                  <button className='portalMenuFooterButton primaryButton' onMouseDown={this.props.displayViewModifiers}>View All Modifiers</button>
                }
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </motion.div>
    )
  }
}

const mapStateToProps = (state) => ({
  creatingOrder: state.createOrder,
  checkoutDisplay: state.checkoutDisplay
})

export default connect(mapStateToProps, { changePage, displayViewModifiers, checkoutHandler })(PortalPageMenu)

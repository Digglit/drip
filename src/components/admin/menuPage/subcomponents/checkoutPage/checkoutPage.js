import React, { Component } from 'react'
import { connect } from 'react-redux'
import './checkoutPage.css'
import { displayCheckoutHandler } from '../../../../../actions'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'
import { AnimatePresence, motion } from 'framer-motion'
import { pageTransition, transitionDuration } from '../../../../global/pageTransition'
import Input from '../../../../global/input/input'

class CheckoutPage extends Component {
  constructor() {
    super()
    this.state = {
      tipAmountSelected: 0,
      checkout: 0
    }
  }

  completeOrderHandler = () => {
    this.setState({ checkout: 0 })
    this.props.displayCheckoutHandler(0)
  }

  closeCheckoutHandler = () => {
    this.setState({ checkout: 0 })
    this.props.displayCheckoutHandler(0)
  }

  render() {
    return (
      <div className='checkoutPageContainer'>
        <CornerCloseButton onClick={this.closeCheckoutHandler} />
        <div className='checkoutPageWrapper'>
          <div className='checkoutPageCartContainer'>
            <h2 className='checkoutPageHeader'>Checkout</h2>
            <div className='checkoutPageOrderSummaryContainer'>
              <div>
                <h2 className='checkoutPageHeader' style={{ marginLeft: '10px' }}>Order Summary</h2>
              </div>
              <div className='checkoutPageItemsContainer'>
                <div className='checkoutPageOrderItemContainer'>
                  <h2 className='checkoutPageQuantityText'>1x</h2>
                  <div className='checkoutPageOrderItemTextContainer'>
                    <p className='checkoutPageText'>Chicken Parmesan (Subs & Wraps)</p>
                    <p className='checkoutPageSubText'>Description: Sub, 6-inch, Fries</p>
                  </div>
                  <p className='checkoutPageText'>$8.00</p>
                </div>
              </div>
              <div className='checkoutPageItemsFooterContainer'>
                <div className='checkoutPageText checkoutPageFooterText'>Total: $35.50</div>
              </div>
            </div>
          </div>
          <AnimatePresence exitBeforeEnter>
            {this.state.checkout === 2 ?
              <motion.div className='checkoutPageCardDetailsContainer' key='sdfghw345yhhae' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
                <h2 className='checkoutPageHeader' style={{ marginTop: 0 }}>Payment Details</h2>
                <div className='checkoutPaymentDetailsContainer'>
                  <div className='checkoutPageCardInputContainer'>
                    <p className='checkoutPageText'>Card Number</p>
                    <Input customClass={'checkoutPageInput'} />
                  </div>
                  <div className='checkoutPageInputContainer'>
                    <p className='checkoutPageText'>CCV</p>
                    <Input customClass={'checkoutPageInput'} />
                  </div>
                  <div className='checkoutPageInputContainer'>
                    <p className='checkoutPageText'>Exp Date</p>
                    <Input customClass={'checkoutPageInput'} />
                  </div>
                </div>
                <button className='checkoutPageContinueButton secondaryButton' onMouseDown={() => this.setState({ checkout: 1 })} style={{ marginTop: '30px' }}>Back</button>
                <button className='checkoutPageContinueButton primaryButton' onMouseDown={this.completeOrderHandler} style={{ marginTop: '30px' }}>Complete</button>
              </motion.div>
              : this.state.checkout === 1 ?
                <motion.div className='checkoutPageCustomerDetailsContainer' key='qjfg0j40239th9' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
                  <h2 className='checkoutPageHeader' style={{ marginTop: 0 }}>Customer Details</h2>
                  <div>
                    <p className='checkoutPageText'>Name</p>
                    <Input customClass={'checkoutPageInput'} />
                  </div>
                  <div>
                    <p className='checkoutPageText'>Email</p>
                    <Input customClass={'checkoutPageInput'} />
                  </div>
                  <div>
                    <p className='checkoutPageText'>Phone Number</p>
                    <Input customClass={'checkoutPageInput'} />
                  </div>
                  <div>
                    <p className='checkoutPageText'>Address</p>
                    <Input customClass={'checkoutPageInput'} />
                  </div>
                  <button className='checkoutPageContinueButton secondaryButton' onMouseDown={() => this.setState({ checkout: 0 })} style={{ marginTop: '30px' }}>Back</button>
                  <button className='checkoutPageContinueButton primaryButton' onMouseDown={() => this.setState({ checkout: 2 })}>Continue</button>
                </motion.div>
                :
                <motion.div className='checkoutPageInformationContainer' key='agq234twrgAERG' initial={pageTransition.initial} animate={pageTransition.in} exit={pageTransition.out} transition={{ duration: transitionDuration }}>
                  <h2 className='checkoutPageHeader'>Total Price</h2>
                  <p className='checkoutPageInformationText'>Subtotal: $35.50</p>
                  <p className='checkoutPageInformationText'>Tax: $0.00</p>
                  <p className='checkoutPageInformationText'>Tip: $4.82</p>
                  <div className='checkoutPageTipButtonContainer'>
                    <button className={`checkoutPageTipButton ${this.state.tipAmountSelected === 0 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.setState({ tipAmountSelected: 0 })}>0%</button>
                    <button className={`checkoutPageTipButton ${this.state.tipAmountSelected === 1 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.setState({ tipAmountSelected: 1 })}>5%</button>
                    <button className={`checkoutPageTipButton ${this.state.tipAmountSelected === 2 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.setState({ tipAmountSelected: 2 })}>10%</button>
                    <button className={`checkoutPageTipButton ${this.state.tipAmountSelected === 3 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.setState({ tipAmountSelected: 3 })}>15%</button>
                    <button className={`checkoutPageTipButton ${this.state.tipAmountSelected === 4 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.setState({ tipAmountSelected: 4 })}>20%</button>
                  </div>
                  <p className='checkoutPageTotalText'>Total: $40.32</p>
                  <button className='checkoutPageContinueButton primaryButton' onMouseDown={() => this.setState({ checkout: 1 })}>Continue</button>
                </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { displayCheckoutHandler })(CheckoutPage)

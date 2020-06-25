import React, { Component } from 'react'
import { connect } from 'react-redux'
import './createCustomTransaction.css'
import { motion } from 'framer-motion'
import { modalTransition, transitionDuration } from '../../../../global/pageTransition'
import { displayCustomTransaction } from '../../../../../actions/portal'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import Input from '../../../../global/input/input'

class CreateCustomTransaction extends Component {

  keypadKey = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']

  render() {
    return (
      <motion.div className='portalCustomTransactionContainer' style={{ zIndex: this.props.zIndex + 1 }} initial={modalTransition.initial} animate={modalTransition.in} exit={modalTransition.out} transition={{ duration: transitionDuration }}>
        <ModuleHeader header={'Create a Custom Transaction'} closeButton={this.props.displayCustomTransaction} />
        <div className='portalCustomTransactionBody'>
          <div className='portalCustomTransactionInfoContainer'>
            <div className='portalCustomTransactionAmountContainer'>
              <p className='portalCustomTransactionInfoText'>Transaction Amount:</p>
              <Input />
            </div>
            <div className='portalCustomTransactionCardContainer'>
              <div className='portalCustomTransactionCardInputContainer' style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                <p className='portalCustomTransactionInfoText'>Card Number</p>
                <Input customClass={'portalCustomTransactionCardInput'} />
              </div>
              <div className='portalCustomTransactionCardInputContainer'>
                <p className='portalCustomTransactionInfoText'>CCV</p>
                <Input customClass={'portalCustomTransactionCardInput'} />
              </div>
              <div className='portalCustomTransactionCardInputContainer'>
                <p className='portalCustomTransactionInfoText'>Exp. Date</p>
                <Input customClass={'portalCustomTransactionCardInput'} />
              </div>
            </div>
            <div className='portalCustomTransactionButtonContainer'>
              <button className='portalCustomTransactionButton secondaryButton' onMouseDown={this.props.displayCustomTransaction}>Close</button>
              <button className='portalCustomTransactionButton primaryButton'>Next</button>
            </div>
          </div>
          <div className='portalCustomTransactionKeypadContainer'>
            {this.keypadKey.map((value, index) => (
              <div className='portalCustomTransactionKeypadKey' style={value === 0 ? { gridColumnStart: 1, gridColumnEnd: 3 } : null}>
                <p className='portalCustomTransactionKeypadText'>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }
}

export default connect(null, { displayCustomTransaction })(CreateCustomTransaction)

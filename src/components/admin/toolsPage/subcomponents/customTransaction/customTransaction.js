import React, { Component } from 'react'
import { connect } from 'react-redux'
import './customTransaction.css'
import { displayCustomTransactionHandler } from '../../../../../actions'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import Input from '../../../../global/input/input'

export class CustomTransaction extends Component {
  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displayCustomTransactionHandler(0)} style={{ zIndex: this.props.zIndex }} />
        <div className={`customTransactionContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={'Create a Custom Transaction'} closeButton={() => this.props.displayCustomTransactionHandler(0)} />
          <div className='customTransactionBodyContainer'>
            <p className='customTransactionText'>Transaction Amount</p>
            <Input />
            <p className='customTransactionText'>Description</p>
            <textarea className='customTransactionTextArea' placeholder='Reason for transaction...' />
            <br />
            <h2 className='customTransactionHeaderText'>Card Details</h2>
            <p className='customTransactionText'>Card Number</p>
            <Input />
            <br />
            <div className='customTransactionInputContainer'>
              <p className='customTransactionText'>CVV</p>
              <Input />
            </div>
            <div className='customTransactionInputContainer'>
              <p className='customTransactionText'>Exp. Date</p>
              <Input />
            </div>
            <button className='primaryButton customTransactionConfirmButton'>Confirm Transaction</button>
          </div>
          <div className='customTransactionFooterContainer'>
            <button className='customTransactionFooterButton primaryButton' onMouseDown={() => this.props.displayCustomTransactionHandler(0)}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.customTransaction.open,
  zIndex: state.customTransaction.zIndex
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, { displayCustomTransactionHandler })(CustomTransaction)

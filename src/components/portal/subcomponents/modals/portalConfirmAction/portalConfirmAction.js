import React from 'react'
import { connect } from 'react-redux'
import './portalConfirmAction.css'
import CornerCloseButton from '../../../../global/cornerCloseButton/cornerCloseButton'
import { displayConfirmAction } from '../../../../../actions/portal'
import { motion } from 'framer-motion'
import { modalTransition, transitionDuration } from '../../../../global/pageTransition'

const ConfirmActionModule = (props) => {

  const confirmAction = () => {
    props.confirmFunction()
    props.displayConfirmAction()
  }

  return (
    <motion.div className='portalConfirmActionContainer' style={{ zIndex: props.zIndex + 1 }} initial={modalTransition.initial} animate={modalTransition.in} exit={modalTransition.out} transition={{ duration: transitionDuration }}>
      <CornerCloseButton customStyle={{ boxShadow: 'none', height: '40px' }} customTextStyle={{ fontSize: '28px' }} onClick={props.displayConfirmAction} />
      <div className='confirmActionModuleHeaderContainer'>
        <h2 className='confirmActionModuleHeaderText'>{props.header}</h2>
      </div>
      <p className='confirmActionModuleBodyText'>{props.body}</p>

      {props.confirmAction ?
        <div className='confirmActionModuleButtonsContainer'>
          <button className='confirmActionModuleButton secondaryButton' onMouseDown={() => props.displayConfirmAction()}>Cancel</button>
          <button className='confirmActionModuleButton primaryButton' onMouseDown={() => confirmAction()}>Confirm</button>
        </div>
        :
        <div className='confirmActionModuleButtonsContainer'>
          <button className='confirmActionModuleSoloButton primaryButton' onMouseDown={props.displayConfirmAction}>Close</button>
        </div>
      }
    </motion.div>
  )
}

const mapStateToProps = state => {
  return {
    open: state.modalDisplay.confirmAction,
    header: state.confirmationDetails.header,
    body: state.confirmationDetails.body,
    confirmFunction: state.confirmationDetails.confirmFunction,
    confirmAction: state.confirmationDetails.confirmAction
  }
}

export default connect(mapStateToProps, { displayConfirmAction })(ConfirmActionModule)

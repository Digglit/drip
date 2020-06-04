import React from 'react'
import { connect } from 'react-redux'
import './confirmActionModule.css'
import CornerCloseButton from '../cornerCloseButton/cornerCloseButton'
import { closeConfirmationPrompt } from '../../../actions'

const ConfirmActionModule = (props) => {
  const closeConfirmationHandler = () => {

  }

  return (
    <div className='confirmActionWrapper'>
      <div className={`menuOverlay ${props.open ? '' : 'hide'}`} onMouseDown={() => closeConfirmationHandler()} style={{ zIndex: props.zIndex }} />
      <div className={`confirmActionModuleContainer ${props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: props.zIndex + 1 }}>
        <CornerCloseButton customStyle={{ boxShadow: 'none', height: '40px' }} customTextStyle={{ fontSize: '28px' }} onClick={props.closeConfirmationPrompt} />
        <div className='confirmActionModuleHeaderContainer'>
          <h2 className='confirmActionModuleHeaderText'>{props.header}</h2>
        </div>
        <p className='confirmActionModuleBodyText'>{props.body}</p>
        <div className='confirmActionModuleButtonsContainer'>
          <button className='confirmActionModuleButton secondaryButton' onMouseDown={props.closeConfirmationPrompt}>Cancel</button>
          <button className='confirmActionModuleButton primaryButton' onMouseDown={props.confirmFunction}>Confirm</button>
        </div>
      </div>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    open: state.confirmFunctionDetails.open,
    header: state.confirmFunctionDetails.header,
    body: state.confirmFunctionDetails.body,
    zIndex: state.confirmFunctionDetails.zIndex,
    confirmFunction: state.confirmFunctionDetails.confirmFunction,
  }
}

export default connect(mapStateToProps, { closeConfirmationPrompt })(ConfirmActionModule)

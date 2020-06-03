import React, { Component } from 'react'
import './confirmActionModule.css'
import { connect } from 'react-redux'
import CornerCloseButton from '../cornerCloseButton/cornerCloseButton'

export const ConfirmActionModule = (props) => {
  return (
    <div className='confirmActionModuleContainer'>
      <CornerCloseButton customStyle={{boxShadow: 'none', height: '40px'}} customTextStyle={{fontSize: '28px'}}/>
      <div className='confirmActionModuleHeaderContainer'>
        <h2 className='confirmActionModuleHeaderText'>{props.header}</h2>
      </div>
      <p className='confirmActionModuleBodyText'>{props.body}</p>
      <div className='confirmActionModuleButtonsContainer'>
        <button className='confirmActionModuleButton secondaryButton'>Cancel</button>
        <button className='confirmActionModuleButton primaryButton'>Confirm</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmActionModule)

import React from 'react'
import './emailDetails.css'
import { connect } from 'react-redux'
import { viewEmailDetailsHandler } from '../../../../../actions'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'

const EmailDetails = (props) => {
  return (
    <div>
      <div className={props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => props.viewEmailDetailsHandler(0)} style={{ zIndex: props.zIndex }} />
      <div className={`viewEmailDetailsContainer ${props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: props.zIndex + 1 }}>
        <ModuleHeader header={'Message Details'} closeButton={() => props.viewEmailDetailsHandler(0)} />
        <div className='viewEmailDetailsBodyContainer'>
          <p className='viewEmailDetailsBodyText'>From: {props.name}</p>
          <p className='viewEmailDetailsBodyText'>Date: {props.date}</p>
          <p className='viewEmailDetailsBodyText'>Time: {props.time}</p>
          <p className='viewEmailDetailsBodyText'>Subject: {props.subject}</p>
          <p className='viewEmailDetailsBodyText'>Body: {props.body}</p>
        </div>
        <div className='viewEmailDetailsFooterContainer'>
          <button className='primaryButton viewEmailDetailsFooterButton' onMouseDown={() => props.viewEmailDetailsHandler(0)}>Close</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  open: state.emailDetails.open,
  zIndex: state.emailDetails.zIndex,
  name: state.emailDetails.name,
  date: state.emailDetails.date,
  time: state.emailDetails.time,
  subject: state.emailDetails.subject,
  body: state.emailDetails.body
})

export default connect(mapStateToProps, { viewEmailDetailsHandler })(EmailDetails)

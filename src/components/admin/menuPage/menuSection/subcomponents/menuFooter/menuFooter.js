import React, { Component } from 'react'
import './menuFooter.css'
import { connect } from 'react-redux'

class MenuFooter extends Component {
  render() {
    return (
      <div className='menuFooterContainer'>
        <button className='primaryButton menuFooterButton'>Create New Item</button>
        <button className='secondaryButton menuFooterButton'>Edit Modifiers</button>
      </div>
    )
  }
}

export default connect(null, null)(MenuFooter)
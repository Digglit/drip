import React, { Component } from 'react'
import './menuPage.css'
import { connect } from 'react-redux'
import MenuSection from './menuSection/menuSection'
import { displayBackdrop, openMenuItemDrawer, displayConfirmationPrompt, closeConfirmationPrompt } from '../../../actions'
import MenuFooter from './menuSection/subcomponents/menuFooter/menuFooter'
import ItemDrawer from './menuSection/subcomponents/itemDrawer/itemDrawer'

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
    }
    this.props.displayConfirmationPrompt(actionDetails)
  }

  render() {
    return (
      <div className='menuPagecontainer'>
        <div className='menuContainer'>
          <MenuSection />
          <MenuSection />
          <MenuSection />
          <MenuSection />
          <MenuFooter />
        </div>
        <div className={`menuOverlay ${this.props.backdropDisplay ? '' : 'hide'}`} onMouseDown={this.closeDrawerHandler} />
        <ItemDrawer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  backdropDisplay: state.backdropDisplay,
})

export default connect(mapStateToProps, { displayBackdrop, openMenuItemDrawer, displayConfirmationPrompt, closeConfirmationPrompt })(MenuPage)

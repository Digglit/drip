import React, { Component } from 'react'
import './menuPage.css'
import { connect } from 'react-redux'
import MenuSection from './menuSection/menuSection'
import { displayBackdrop, openMenuItemDrawer } from '../../../actions'
import MenuFooter from './menuSection/subcomponents/menuFooter/menuFooter'
import ItemDrawer from './menuSection/subcomponents/itemDrawer/itemDrawer'
import ConfirmActionModule from '../../global/confirmActionModule/confirmActionModule'

class MenuPage extends Component {
  backdropClickHandler = () => {
    this.props.displayBackdrop({ open: false })
    this.props.openMenuItemDrawer()
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
        <div className={`menuOverlay ${this.props.backdropDisplay ? '' : 'hide'}`} onMouseDown={this.backdropClickHandler} />
        <ItemDrawer />
        <ConfirmActionModule />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  backdropDisplay: state.backdropDisplay,
})

export default connect(mapStateToProps, { displayBackdrop, openMenuItemDrawer })(MenuPage)

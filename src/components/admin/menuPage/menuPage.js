import React, { Component } from 'react'
import './menuPage.css'
import { connect } from 'react-redux'
import MenuSection from './menuSection/menuSection'
import { displayBackdrop } from '../../../actions'

class MenuPage extends Component {
  render() {
    return (
      <div>
        <div className='menuContainer'>
          <MenuSection />
          <MenuSection />
          <MenuSection />
          <MenuSection />
        </div>
        <div className={`menuOverlay ${this.props.backdropDisplay ? '' : 'menuOverlayHidden'}`} onMouseDown={() => this.props.displayBackdrop()}>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  backdropDisplay: state.backdropDisplay
})

export default connect(mapStateToProps, { displayBackdrop })(MenuPage)

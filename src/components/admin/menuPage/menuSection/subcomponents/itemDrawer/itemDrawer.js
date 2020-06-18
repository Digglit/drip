import React, { Component } from 'react'
import './itemDrawer.css'
import { connect } from 'react-redux'
import { openMenuItemDrawer, displayBackdrop, displayConfirmationPrompt, closeConfirmationPrompt } from '../../../../../../actions'
import ItemDrawerBody from './subcomponents/itemDrawerBody/itemDrawerBody'
import CornerCloseButton from '../../../../../global/cornerCloseButton/cornerCloseButton'

class ItemDrawer extends Component {

  constructor() {
    super()
    this.state = {
      drawerPosition: window.innerWidth,
    }
    this.drawerRef = React.createRef()
  }

  componentDidMount() {
    this.setState({ drawerPosition: this.drawerRef.current.offsetWidth })
  }

  confirmedFunction = () => {
    this.props.closeConfirmationPrompt()
    this.props.displayBackdrop()
    this.props.openMenuItemDrawer()
  }

  closeDrawerHandler = () => {
    let actionDetails = {
      open: true,
      header: 'Close Without Saving?',
      body: 'Are you sure you would like to close without saving your changes?',
      confirmFunction: this.confirmedFunction,
      zIndex: 20,
      confirmAction: true
    }
    this.props.displayConfirmationPrompt(actionDetails)
  }

  render() {
    return (
      <div>
        <div className={`menuOverlay ${false ? '' : 'hide'}`} onMouseDown={this.closeDrawerHandler} />
        <div className='itemDrawerContainer' id='drawerContainer' ref={this.drawerRef} style={{ right: `-${false ? 0 : this.state.drawerPosition}px` }}>
          <CornerCloseButton onClick={this.closeDrawerHandler} />
          <div className='itemDrawerHeaderContainer'>
            <img className='itemDrawerHeaderImage' alt='Food Item' src={this.props.image} />
            <div className='itemDrawerHeaderTextContainer'>
              <button className='itemDrawerHeaderImageModificationButton'>Add Image</button>
              <button className='itemDrawerHeaderImageModificationButton itemDrawerHeaderRemoveItemButton'>Remove Item</button>
            </div>
          </div>
          <ItemDrawerBody />

          <div className='itemDrawerFooter'>
            <button className='secondaryButton itemDrawerFooterButton' onMouseDown={this.closeDrawerHandler}>Cancel</button>
            <button className='primaryButton itemDrawerFooterButton'>Save Changes</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    drawerOpen: state.menuDrawerOpenStatus.open,
    image: state.menuDrawerOpenStatus.image,
    backdropDisplay: state.backdropDisplay,
  }
}

export default connect(mapStateToProps, { openMenuItemDrawer, displayBackdrop, displayConfirmationPrompt, closeConfirmationPrompt })(ItemDrawer)

import React, { Component } from 'react'
import './itemDrawer.css'
import { connect } from 'react-redux'
import { openMenuItemDrawer, displayBackdrop } from '../../../../../../actions'
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

  closeDrawerHandler = () => {
    this.props.openMenuItemDrawer()
    this.props.displayBackdrop()
  }

  render() {
    return (
      <div className='itemDrawerContainer' id='drawerContainer' ref={this.drawerRef} style={{ right: `-${this.props.drawerOpen ? 0 : this.state.drawerPosition}px` }}>
        <CornerCloseButton onClick={this.closeDrawerHandler} />
        <div className='itemDrawerHeaderContainer'>
          <img className='itemDrawerHeaderImage' src={this.props.image} />
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
    )
  }
}

const mapStateToProps = state => {
  return {
    drawerOpen: state.menuDrawerOpenStatus.open,
    image: state.menuDrawerOpenStatus.image
  }
}

export default connect(mapStateToProps, { openMenuItemDrawer, displayBackdrop })(ItemDrawer)

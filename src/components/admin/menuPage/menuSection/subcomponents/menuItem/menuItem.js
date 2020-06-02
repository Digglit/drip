import React, { Component } from 'react'
import './menuItem.css'
import foodImage from '../../../../../../assets/wings.jpg'
import { displayBackdrop } from '../../../../../../actions'
import { connect } from 'react-redux'


class MenuItem extends Component {
  render() {
    return (
      <div className='menuItem' style={{ left: `${this.props.position}px` }} onMouseDown={this.props.displayBackdrop}>
        <img src={foodImage} className='menuItemImage'></img>
        <div className='menuItemNameBackground'>
          <h1 className='menuItemName'>Wings</h1>
        </div>
      </div>
    )
  }
}

export default connect(null, { displayBackdrop })(MenuItem)
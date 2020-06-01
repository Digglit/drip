import React, { Component } from 'react'
import './menuItem.css'
import foodImage from '../../../../../../assets/wings.jpg'


export default class MenuItem extends Component {
  render() {
    return (
      <div className='menuItem' style={{left: `${this.props.position}px`}}>
        <img src={foodImage} className='menuItemImage'></img>
        <div className='menuItemNameBackground'>
          <h1 className='menuItemName'>Wings</h1>
        </div>
      </div>
    )
  }
}

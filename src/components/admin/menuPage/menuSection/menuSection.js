import React, { Component } from 'react'
import './menuSection.css'
import MenuItem from './subcomponents/menuItem/menuItem'

export default class MenuSection extends Component {
  constructor() {
    super()
    this.state = {
      positionAdjustment: 0
    }
  }

  adjustPositionHandler = (e) => {
    if (e.target.name === 'left') {
      if (this.state.positionAdjustment < 0)
        this.setState({ positionAdjustment: this.state.positionAdjustment + 270 })
    } else {
      this.setState({ positionAdjustment: this.state.positionAdjustment - 270 })
    }
  }

  render() {
    return (
      <div className='menuSection'>
        <h1 className='menuSectionHeader'>Appetizers</h1>
        <div className='menuItemsContainer'>
          <MenuItem position={0 + this.state.positionAdjustment} />
          <MenuItem position={270 + this.state.positionAdjustment} />
          <MenuItem position={540 + this.state.positionAdjustment} />
          <MenuItem position={810 + this.state.positionAdjustment} />
          <MenuItem position={1080 + this.state.positionAdjustment} />
          <MenuItem position={1350 + this.state.positionAdjustment} />
        </div>
        <button className='moveMenuButtonLeft' name='left' onMouseDown={this.adjustPositionHandler}>{'<'}</button>
        <button className='moveMenuButtonRight' name='right' onMouseDown={this.adjustPositionHandler}>{'>'}</button>
      </div>
    )
  }
}

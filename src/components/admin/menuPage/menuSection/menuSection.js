import React, { Component } from 'react'
import './menuSection.css'
import MenuItem from './subcomponents/menuItem/menuItem'

export default class MenuSection extends Component {
  render() {
    return(
      <div className='menuSection'>
        <h1 className='menuSectionHeader'>Appetizers</h1>
        <div className='menuItemsContainer'>
          <MenuItem position = {0}/>
          <MenuItem position = {270}/>
          <MenuItem position = {540}/>
          <MenuItem position = {810}/>
          <MenuItem position = {1080}/>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './menuPage.css'
import MenuSection from './menuSection/menuSection'

export default class MenuPage extends Component {
  render() {
    return (
      <div>
        <div className='menuContainer'>
          <MenuSection />
        </div>
      </div>
    )
  }
}

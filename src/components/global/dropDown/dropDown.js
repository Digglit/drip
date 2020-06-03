import React, { Component } from 'react'
import './dropDown.css'

export default class DropDown extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }

  selectNewItemHandler = (newSelection) => {
    this.setState({ expanded: false })
    this.props.changeOption(newSelection)
  }

  render() {
    return (
      <div className='dropDownContainer'>
        <div className='dropDownBody'>
          <p className='dropDownBodyText'>{this.props.items[this.props.itemSelected]}</p>
        </div>
        <div className='dropDownArrowContainer' onMouseDown={() => this.setState({ expanded: !this.state.expanded })}>
          <p className='dropDownArrow'>V</p>
        </div>
        <div className={`dropDownListOfItemsContainer ${this.state.expanded ? '' : 'dropDownListOfItemsHidden'}`}>
          {this.props.items.map((value, index) => (
            index !== this.props.itemSelected ?
              <div className='dropDownListOfItemsItem' key={index} onMouseDown={() => this.selectNewItemHandler(index)}>
                <p className='dropDownListOfItemsText'>{value}</p>
              </div> :
              null
          ))}
        </div>
      </div >
    )
  }
}

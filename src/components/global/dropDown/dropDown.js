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

  getDropDownWidthHandler = () => {
    let props = this.props
    if (props.items.length <= 6 || (props.items.length === 7 && props.itemSelected !== -1)) {
      return this.props.width - 40
    } else {
      return this.props.width - 23
    }
  }

  render() {
    return (
      <div className='dropDownContainer' style={{ width: `${this.props.width}px` }} onMouseDown={() => this.setState({ expanded: !this.state.expanded })} onBlur={this.state.expanded ? () => this.setState({ expanded: !this.state.expanded }) : null}>
        <div className='dropDownBody'>
          <p className='dropDownBodyText'>{this.props.items[this.props.itemSelected]}</p>
        </div>
        <div className='dropDownArrowContainer'>
          <p className='dropDownArrow'>V</p>
        </div>
        <div className={`dropDownListOfItemsContainer ${this.state.expanded ? '' : 'dropDownListOfItemsHidden'}`} style={{ width: `${this.getDropDownWidthHandler()}px` }}>
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

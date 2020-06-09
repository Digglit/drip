import React, { Component } from 'react'
import './numberInput.css'

export default class NumberInput extends Component {

  updateInputHandler = (e) => {
    let newNumber = e.target.value
    if (!isNaN(newNumber) && newNumber - Math.floor(newNumber) === 0) {
      this.props.onChange(newNumber)
    }
  }

  render() {
    return (
      <input type='text' className={`specializedInput numberInput ${this.props.customClass}`} onChange={this.updateInputHandler} value={this.props.value} style={this.props.customStyle} />
    )
  }
}

import React, { Component } from 'react'
import './numberInput.css'

export default class NumberInput extends Component {

  updateInputHandler = (e) => {
    let newString = e.target.value.slice(1)
    if (!isNaN(newString)) {
      this.props.onChange(e.target.value.length === 0 ? '$' : e.target.value)
    }
  }

  render() {
    return (
      <input className={`specializedInput ${this.props.customClass}`} onChange={this.updateInputHandler} value={this.props.value} style={this.props.customStyle}>

      </input>
    )
  }
}

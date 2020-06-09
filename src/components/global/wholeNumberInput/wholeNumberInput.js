import React, { Component } from 'react'
import './wholeNumberInput.css'

export default class WholeNumberInput extends Component {

  updateInputHandler = (e) => {
    let newNumber = e.target.value
    let length = e.target.value.length
    if (!isNaN(newNumber) && newNumber - Math.floor(newNumber) === 0 && e.target.value[length - 1] !== '.') {
      this.props.onChange(Math.abs(newNumber))
    }
  }

  incrementHandler = () => {
    console.log(this.props.value)
    this.props.onChange(Number(this.props.value) + 1)
  }

  decrementHandler = () => {
    if (this.props.value > 1) {
      this.props.onChange(Number(this.props.value) - 1)
    }
  }

  render() {
    return (
      <div className='wholeNumberInputContainer'>
        <input type='text' className={`specializedInput wholeNumberInput ${this.props.customClass}`} onChange={this.updateInputHandler} value={this.props.value} style={this.props.customStyle} />
        <button className='wholeNumberInputIncrementButton primaryButton' onMouseDown={this.incrementHandler}>&#10094;</button>
        <button className='wholeNumberInputDecrementButton primaryButton' onMouseDown={this.decrementHandler}>&#10094;</button>
      </div>

    )
  }
}

import React, { Component } from 'react'
import './toolsPage.css'
import { connect } from 'react-redux'
import { changePage } from '../../../actions'
import CornerCloseButton from '../../global/cornerCloseButton/cornerCloseButton'

class ToolsPage extends Component {
  constructor() {
    super()
    this.state = {
      expandedArray: [true, true, true, true, true, true]
    }
  }

  modifyExapndedHandler = (arrPosition) => {
    let arr = this.state.expandedArray
    arr[arrPosition] = !arr[arrPosition]
    this.setState({expandedArray: arr})
  }

  render() {
    return (
      <div className='toolsPageContainer'>
        <CornerCloseButton onClick={() => this.props.changePage(0)}/>
        <div className='toolsPageToolContainer'>
          <div className='toolsPageToolHeaderContainer'>
            <h3 className='toolsPageToolHeaderText'>Order Settings</h3>
            <div className='toolsPageToolHeaderButtonContainer' onMouseDown={() => this.modifyExapndedHandler(0)}>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[0] ? null : {transform: 'translate(-50%, -50%) rotate(180deg)'}}/>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[0] ? null : {transform: 'translate(-50%, -50%) rotate(90deg)'}}/>
            </div>
          </div>
          <div className='toolsPageToolBodyContainer' style={this.state.expandedArray[0] ? {height: '175px'} : {height: '0px'}}>

          </div>
        </div>

        <div className='toolsPageToolContainer'>
          <div className='toolsPageToolHeaderContainer'>
            <h3 className='toolsPageToolHeaderText'>Tools</h3>
            <div className='toolsPageToolHeaderButtonContainer' onMouseDown={() => this.modifyExapndedHandler(1)}>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[1] ? null : {transform: 'translate(-50%, -50%) rotate(180deg)'}}/>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[1] ? null : {transform: 'translate(-50%, -50%) rotate(90deg)'}}/>
            </div>
          </div>
          <div className='toolsPageToolBodyContainer'  style={this.state.expandedArray[1] ? {height: '200px'} : {height: '0px'}}>
            
          </div>
        </div>

        <div className='toolsPageToolContainer'>
          <div className='toolsPageToolHeaderContainer'>
            <h3 className='toolsPageToolHeaderText'>Drivers</h3>
            <div className='toolsPageToolHeaderButtonContainer' onMouseDown={() => this.modifyExapndedHandler(2)}>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[2] ? null : {transform: 'translate(-50%, -50%) rotate(180deg)'}}/>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[2] ? null : {transform: 'translate(-50%, -50%) rotate(90deg)'}}/>
            </div>
          </div>
          <div className='toolsPageToolBodyContainer'  style={this.state.expandedArray[2] ? {height: '400px'} : {height: '0px'}}>
            
          </div>
        </div>

        <div className='toolsPageToolContainer'>
          <div className='toolsPageToolHeaderContainer'>
            <h3 className='toolsPageToolHeaderText'>Site Settings</h3>
            <div className='toolsPageToolHeaderButtonContainer' onMouseDown={() => this.modifyExapndedHandler(3)}>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[3] ? null : {transform: 'translate(-50%, -50%) rotate(180deg)'}}/>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[3] ? null : {transform: 'translate(-50%, -50%) rotate(90deg)'}}/>
            </div>
          </div>
          <div className='toolsPageToolBodyContainer'  style={this.state.expandedArray[3] ? {height: '350px'} : {height: '0px'}}>
            
          </div>
        </div>

        <div className='toolsPageToolContainer'>
          <div className='toolsPageToolHeaderContainer'>
            <h3 className='toolsPageToolHeaderText'>Coupons & Specials</h3>
            <div className='toolsPageToolHeaderButtonContainer' onMouseDown={() => this.modifyExapndedHandler(4)}>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[4] ? null : {transform: 'translate(-50%, -50%) rotate(180deg)'}}/>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[4] ? null : {transform: 'translate(-50%, -50%) rotate(90deg)'}}/>
            </div>
          </div>
          <div className='toolsPageToolBodyContainer'  style={this.state.expandedArray[4] ? {height: '175px'} : {height: '0px'}}>
            
          </div>
        </div>

        <div className='toolsPageToolContainer'>
          <div className='toolsPageToolHeaderContainer'>
            <h3 className='toolsPageToolHeaderText'>Orders</h3>
            <div className='toolsPageToolHeaderButtonContainer' onMouseDown={() => this.modifyExapndedHandler(5)}>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[5] ? null : {transform: 'translate(-50%, -50%) rotate(180deg)'}}/>
              <div className='toolsPageToolHeaderButton' style={this.state.expandedArray[5] ? null : {transform: 'translate(-50%, -50%) rotate(90deg)'}}/>
            </div>
          </div>
          <div className='toolsPageToolBodyContainer'  style={this.state.expandedArray[5] ? {height: '150px'} : {height: '0px'}}>
            
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps, { changePage })(ToolsPage)

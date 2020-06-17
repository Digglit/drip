import React, { Component } from 'react'
import { connect } from 'react-redux'
import './hoursOfOperation.css'
import { displayHoursOfOperationHandler } from '../../../../../actions'
import ModuleHeader from '../../../../global/moduleHeader/moduleHeader'
import DropDown from '../../../../global/dropDown/dropDown'

class HoursOfOperation extends Component {

  constructor() {
    super()
    this.state = {
      times: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
      timeSelected: 0,
      modeSelected: 0,
      currentRowHovered: -1,
      currentColumnHovered: -1,
      hoursOfOperation: [
        [
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ]
        ], [
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ]
        ], [
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ]
        ]
      ]
    }
  }

  updateOperationHoursHandler = (column, row) => {
    let hoursOfOperation = this.state.hoursOfOperation
    hoursOfOperation[this.state.modeSelected][column][row] = !hoursOfOperation[this.state.modeSelected][column][row]
    this.setState({ hoursOfOperation })
  }

  updateRowHoveredHandler = (event, index, column) => {
    if (event.buttons === 1) {
      this.updateOperationHoursHandler(column - 1, index)
    }
    this.setState({ currentRowHovered: index, currentColumnHovered: column })
  }

  getDailyContainers = (props) => {
    let rowHolder = []
    if (props.column === 0) {
      for (let i = 0; i < 24; ++i) {
        rowHolder.push(
          <div className={`hoursOfOperationCellContainer ${this.state.currentRowHovered === i ? 'rowHovered' : ''}`} key={i}>
            <p className='hoursOfOperationCellText'>{this.state.times[(i + this.state.timeSelected) % 24]}</p>
          </div>
        )
      }
      let column = (
        <div className='hoursOfOperationDayContainer'>
          <div className='hoursOfOperationCellContainer'></div>
          {rowHolder}
        </div>
      )
      return column
    } else {
      for (let i = 0; i < 24; ++i) {
        rowHolder.push(
          <div className={`hoursOfOperationCellContainer hoursOfOperationClickableCell ${props.hoursOfOperation[i] ? 'hoursOfOperationSelectedCell' : ''}`}
            onMouseDown={(e) => this.updateOperationHoursHandler(props.column - 1, i)}
            key={i}
            onMouseEnter={(e) => this.updateRowHoveredHandler(e, i, props.column)}
          ></div>
        )
      }
      let column = (
        <div className='hoursOfOperationDayContainer'>
          <div className={`hoursOfOperationCellContainer ${this.state.currentColumnHovered === props.column ? 'rowHovered' : ''}`}>
            <p className='hoursOfOperationCellText'>{props.day}</p>
          </div>
          {rowHolder}
        </div>
      )
      return column
    }
  }

  render() {
    return (
      <div>
        <div className={this.props.open ? 'menuOverlay' : 'menuOverlay hide'} onMouseDown={() => this.props.displayHoursOfOperationHandler(0)} style={{ zIndex: this.props.zIndex }} />
        <div className={`hoursOfOperationContainer ${this.props.open ? '' : 'shrunkenContainer'}`} style={{ zIndex: this.props.zIndex + 1 }}>
          <ModuleHeader header={'Adjust Hours Of Operation'} closeButton={() => this.props.displayHoursOfOperationHandler(0)} />
          <div className='hoursOfOperationBodyContainer'>
            <div className='hoursOfOperationDropDownContainer'>
              <p className='hoursOfOperationDropDownText'>Start day at:</p>
              <DropDown items={this.state.times} itemSelected={this.state.timeSelected} customClass={'hoursOfOperationStartTimeDropDown'} width={200} changeOption={(newTime) => this.setState({ timeSelected: newTime })} />
            </div>
            <div className='hoursOfOperationPlatformSelectionContainer'>
              <button className={`hoursOfOperationPlatformSelectionButton ${this.state.modeSelected === 0 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.setState({ modeSelected: 0 })}>Delivery</button>
              <button className={`hoursOfOperationPlatformSelectionButton ${this.state.modeSelected === 1 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.setState({ modeSelected: 1 })}>Pickup</button>
              <button className={`hoursOfOperationPlatformSelectionButton ${this.state.modeSelected === 2 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => this.setState({ modeSelected: 2 })}>In House</button>
            </div>
            <div className='hoursOfOperationSelectionContainer'>
              <this.getDailyContainers column={0} />
              <this.getDailyContainers column={1} day={'Sunday'} hoursOfOperation={this.state.hoursOfOperation[this.state.modeSelected][0]} />
              <this.getDailyContainers column={2} day={'Monday'} hoursOfOperation={this.state.hoursOfOperation[this.state.modeSelected][1]} />
              <this.getDailyContainers column={3} day={'Tuesday'} hoursOfOperation={this.state.hoursOfOperation[this.state.modeSelected][2]} />
              <this.getDailyContainers column={4} day={'Wednesday'} hoursOfOperation={this.state.hoursOfOperation[this.state.modeSelected][3]} />
              <this.getDailyContainers column={5} day={'Thursday'} hoursOfOperation={this.state.hoursOfOperation[this.state.modeSelected][4]} />
              <this.getDailyContainers column={6} day={'Friday'} hoursOfOperation={this.state.hoursOfOperation[this.state.modeSelected][5]} />
              <this.getDailyContainers column={7} day={'Saturday'} hoursOfOperation={this.state.hoursOfOperation[this.state.modeSelected][6]} />
            </div>
          </div>
          <div className='hoursOfOperationFooterContainer'>
            <button className='secondaryButton hoursOfOperationFooterButton' onMouseDown={() => this.props.displayHoursOfOperationHandler(0)}>Cancel</button>
            <button className='primaryButton hoursOfOperationFooterButton' onMouseDown={() => this.props.displayHoursOfOperationHandler(0)}>Save and Close</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.hoursOfOperation.open,
  zIndex: state.hoursOfOperation.zIndex,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, { displayHoursOfOperationHandler })(HoursOfOperation)

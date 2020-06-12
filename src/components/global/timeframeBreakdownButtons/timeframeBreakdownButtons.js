import React from 'react'
import './timeframeBreakdownButtons.css'

const TimeframeBreakdownButtons = (props) => {
  return (
    <div className='timeframeButtonContainer'>
      <button className={`timeframeButton ${props.timeframeSelected === 0 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => props.updateTimeframe(0)}>Day</button>
      <button className={`timeframeButton ${props.timeframeSelected === 1 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => props.updateTimeframe(1)}>Week</button>
      <button className={`timeframeButton ${props.timeframeSelected === 2 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => props.updateTimeframe(2)}>1 Month</button>
      <button className={`timeframeButton ${props.timeframeSelected === 3 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => props.updateTimeframe(3)}>3 Months</button>
      <button className={`timeframeButton ${props.timeframeSelected === 4 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => props.updateTimeframe(4)}>6 Months</button>
      <button className={`timeframeButton ${props.timeframeSelected === 5 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => props.updateTimeframe(5)}>1 Year</button>
      <button className={`timeframeButton ${props.timeframeSelected === 6 ? 'primaryButton' : 'secondaryButton'}`} onMouseDown={() => props.updateTimeframe(6)}>All Time</button>
    </div>
  )
}

export default TimeframeBreakdownButtons
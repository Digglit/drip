import React from 'react'
import './toolsContainer.css'

export default function ToolsContainer(props) {
  const modifyExpandedHandler = () => {
    props.expandContainerHandler()
  }

  return (
    <div className='toolsPageToolContainer'>
      <div className='toolsPageToolHeaderContainer'>
        <h3 className='toolsPageToolHeaderText'>{props.toolTitle}</h3>
        <div className='toolsPageToolHeaderButtonContainer' onMouseDown={() => modifyExpandedHandler()}>
          <div className='toolsPageToolHeaderButton' style={props.expandedState ? null : { transform: 'translate(-50%, -50%) rotate(180deg)' }} />
          <div className='toolsPageToolHeaderButton' style={props.expandedState ? null : { transform: 'translate(-50%, -50%) rotate(90deg)' }} />
        </div>
      </div>
      <div className='toolsPageToolBodyContainer' style={props.expandedState ? { height: `${props.height}` } : { height: '0px' }}>
        {props.content}
      </div>
    </div>
  )
}

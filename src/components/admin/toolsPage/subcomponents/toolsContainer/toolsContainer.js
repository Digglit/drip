import React from 'react'
import './toolsContainer.css'
import PlusExpander from '../../../../global/plusExpander/plusExpander'

export default function ToolsContainer(props) {
  const modifyExpandedHandler = () => {
    props.expandContainerHandler()
  }

  return (
    <div className='toolsPageToolContainer'>
      <div className='toolsPageToolHeaderContainer'>
        <h3 className='toolsPageToolHeaderText'>{props.toolTitle}</h3>
        <PlusExpander onClick={() => modifyExpandedHandler()} customClass={'toolsPagePlusExpander'} expandedState={props.expandedState} />
      </div>
      <div className='toolsPageToolBodyContainer' style={props.expandedState ? { height: `${props.height}` } : { height: '0px' }}>
        {props.content}
      </div>
    </div>
  )
}

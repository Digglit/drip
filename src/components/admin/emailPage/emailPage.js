import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePage, composeEmailHandler, viewEmailDetailsHandler } from '../../../actions'
import './emailPage.css'
import CornerCloseButton from '../../global/cornerCloseButton/cornerCloseButton'
import PlusExpander from '../../global/plusExpander/plusExpander'
import Input from '../../global/input/input'

class EmailPage extends Component {
  constructor() {
    super()
    this.state = {
      accountSelected: 0,
      emailList: [
        { name: 'Joseph Marella', time: '4:07 PM' },
        { name: 'Joseph Marella', time: '1:05 PM' },
        { name: 'Joseph Marella', time: '11:15 AM' },
        { name: 'Joseph Marella', time: '10:45 AM' },
        { name: 'Joseph Marella', time: '8:26 AM' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
        { name: 'Joseph Marella', time: '5/18/2020' },
      ]
    }
  }

  render() {
    return (
      <div className='emailPageContainer'>
        <CornerCloseButton onClick={() => this.props.changePage(0)} />
        <div className='emailInterfaceContainer'>
          <div className='emailAccountsContainer'>
            <div className={`emailAccountContainer ${this.state.accountSelected === 0 ? 'emailAccountContainerSelected' : ''}`} onMouseDown={() => this.setState({ accountSelected: 0 })}>
              <p className='emailAccountText'>All Inboxes</p>
            </div>
            <div className='emailAddAccountContainer' onMouseDown={() => console.log('clicked container')}>
              <PlusExpander onMouseDown={() => null} expandedState={false} customClass={'emailAddAccountPlus'} colorClass={'emailAddAccountPlusColor'} />
            </div>
          </div>
          <div className='emailSearchContainer'>
            <Input placeholder={'Search Inbox'} customClass={'emailSearchInput'} />
            <button className='primaryButton emailSearchButton'>Search</button>
          </div>
          <div className='emailBodyContainer'>
            {this.state.emailList.map((value, index) => (
              <div className='emailItemContainer' key={index} onMouseDown={() => this.props.viewEmailDetailsHandler(10, { name: value.name, time: value.time })}>
                <p className='emailItemText'>{value.name}</p>
                <p className='emailItemText' style={{ justifySelf: 'start' }}>Site is coming along well... Looks like we are staying mostly on time but still ple...</p>
                <p className='emailItemText'>{value.time}</p>
              </div>
            ))}
          </div>
          <div className='emailFooterContainer'>
            <button className='emailFooterButton primaryButton' onMouseDown={() => this.props.composeEmailHandler(10, '')}>New Message</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { changePage, composeEmailHandler, viewEmailDetailsHandler })(EmailPage)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalPage.css'
import PortalPageHeader from './subcomponents/portalPageHeader/portalPageHeader'
import PortalPageSideBar from './subcomponents/portalPageSideBar/portalPageSideBar'
import PortalPageBody from './subcomponents/portalPageBody/portalPageBody'
import PortalPageMenu from './subcomponents/portalPageMenu/portalPageMenu'
import { AnimatePresence, motion } from 'framer-motion'
import PortalPageItemAvailability from './subcomponents/modals/portalPageItemAvailability/portalPageItemAvailability'
import { closeModalHandler } from '../../actions/portal'
import PortalToolsPage from './subcomponents/portalToolsPage/portalToolsPage'
import ViewCompletedOrders from './subcomponents/viewCompletedOrders/viewCompletedOrders'
import PortalConfirmAction from './subcomponents/modals/portalConfirmAction/portalConfirmAction'
import PortalViewModifiers from './subcomponents/modals/portalViewModifiers/portalViewModifiers'
import ViewOrderDetails from './subcomponents/modals/viewOrderDetails/viewOrderDetails'
import CreateCustomTransaction from './subcomponents/modals/createCustomTransaction/createCustomTransaction'
import PortalCustomerDetails from './subcomponents/modals/portalCustomerDetails/portalCustomerDetails'
import PortalCreateOrderDrawer from './subcomponents/modals/portalCreateOrderDrawer/portalCreateOrderDrawer'
import { backdropTransition, transitionDuration } from '../global/pageTransition'
import PortalPreviousOrders from './subcomponents/modals/portalPreviousOrders/portalPreviousOrders'

class PortalPage extends Component {

  constructor() {
    super()
    this.state = {
      backdrops: []
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.modalAmount < this.props.modalAmount) {
      this.addBackdrop()
    } else if (prevProps.modalAmount !== this.props.modalAmount) {
      this.closeBackdrop()
    }
  }

  addBackdrop = () => {
    let backdrops = this.state.backdrops
    let index = this.state.backdrops.length
    backdrops.push(
      <motion.div className='portalPageBackdrop' key={index} style={{ zIndex: (index + 1) * 10 }} onMouseDown={this.closeModal} initial={backdropTransition.initial} animate={backdropTransition.in} exit={backdropTransition.out} transition={{ duration: transitionDuration }} />
    )
    this.setState({ backdrops })
  }

  closeBackdrop = () => {
    let backdrops = this.state.backdrops.splice(0, this.state.backdrops.length - 1)
    this.setState({ backdrops })
  }

  closeModal = () => {
    let highestModal = 0
    let modalName = ''
    for (const modal in this.props.modals) {
      if (this.props.modals[modal] > highestModal) {
        highestModal = this.props.modals[modal]
        modalName = modal
      }
    }
    this.props.closeModalHandler(modalName)
  }

  render() {
    return (
      <div className='portalPageContainer'>
        <PortalPageHeader />
        <PortalPageSideBar />
        <AnimatePresence exitBeforeEnter>
          {this.props.pageDisplayed === 0 ? <PortalPageBody key='23t4hw355y45y' /> :
            this.props.pageDisplayed === 1 ? <PortalPageMenu key='ardegh43qt4t3qg' /> :
              this.props.pageDisplayed === 2 ? <PortalToolsPage key='sd9f8u03jr023' /> :
                <ViewCompletedOrders key='woi29h34t9wje0fg' />
          }
        </AnimatePresence>
        <AnimatePresence>
          {this.state.backdrops.map(value => (
            value
          ))}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {this.props.modals.itemAvailability ? <PortalPageItemAvailability zIndex={this.props.modals.itemAvailability * 10 + 1} key='qaoiwehrf9jiwfji' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.confirmAction ? <PortalConfirmAction zIndex={this.props.modals.confirmAction * 10 + 1} key='0egfiju0394gj0' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.viewModifiers ? <PortalViewModifiers zIndex={this.props.modals.viewModifiers * 10 + 1} key='awef8h09834tj' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.orderDetails ? <ViewOrderDetails zIndex={this.props.modals.orderDetails * 10 + 1} key='9fw8hj290j4t30g' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.customTransaction ? <CreateCustomTransaction zIndex={this.props.modals.customTransaction * 10 + 1} key='w0ef90uf90jwe0fjh' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.customerDetails ? <PortalCustomerDetails zIndex={this.props.modals.customerDetails * 10 + 1} key='oisjdgf09uio34i0gj' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.itemDrawer ? <PortalCreateOrderDrawer zIndex={this.props.modals.itemDrawer * 10 + 1} key='9whef09iwj4t0i' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.previousOrders ? <PortalPreviousOrders zIndex={this.props.modals.previousOrders * 10 + 1} key='sfdaoihj2904t03' /> : null}
        </AnimatePresence>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pageDisplayed: state.pageDisplay.currentPage,
  modalAmount: state.modalDisplay.modalsOpen,
  modals: state.modalDisplay.modals
})

export default connect(mapStateToProps, { closeModalHandler })(PortalPage)

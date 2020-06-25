import React, { Component } from 'react'
import { connect } from 'react-redux'
import './portalPage.css'
import PortalPageHeader from './subcomponents/portalPageHeader/portalPageHeader'
import PortalPageSideBar from './subcomponents/portalPageSideBar/portalPageSideBar'
import PortalPageBody from './subcomponents/portalPageBody/portalPageBody'
import PortalPageMenu from './subcomponents/portalPageMenu/portalPageMenu'
import { AnimatePresence } from 'framer-motion'
import PortalPageItemAvailability from './subcomponents/modals/portalPageItemAvailability/portalPageItemAvailability'
import { displayItemAvailability } from '../../actions/portal'
import PortalToolsPage from './subcomponents/portalToolsPage/portalToolsPage'
import PortalDriverDetails from './subcomponents/modals/portalDriverDetails/portalDriverDetails'
import ViewCompletedOrders from './subcomponents/viewCompletedOrders/viewCompletedOrders'
import PortalConfirmAction from './subcomponents/modals/portalConfirmAction/portalConfirmAction'
import PortalViewModifiers from './subcomponents/modals/portalViewModifiers/portalViewModifiers'
import ViewOrderDetails from './subcomponents/modals/viewOrderDetails/viewOrderDetails'
import CreateCustomTransaction from './subcomponents/modals/createCustomTransaction/createCustomTransaction'
import PortalCustomerDetails from './subcomponents/modals/portalCustomerDetails/portalCustomerDetails'

class PortalPage extends Component {
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
        <div className={`portalPageBackdrop ${this.props.modalAmount === 0 ? 'hide' : ''}`} style={{ zIndex: 10 }} onMouseDown={this.props.displayItemAvailability} />
        <AnimatePresence exitBeforeEnter>
          {this.props.modals.itemAvailability ? <PortalPageItemAvailability zIndex={11} key='qaoiwehrf9jiwfji' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.driverDetails ? <PortalDriverDetails zIndex={11} key='2q039rf89w0jf' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.confirmAction ? <PortalConfirmAction zIndex={11} key='0egfiju0394gj0' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.viewModifiers ? <PortalViewModifiers zIndex={11} key='awef8h09834tj' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.orderDetails ? <ViewOrderDetails zIndex={11} key='9fw8hj290j4t30g' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.customTransaction ? <CreateCustomTransaction zIndex={11} key='w0ef90uf90jwe0fjh' /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {this.props.modals.customerDetails ? <PortalCustomerDetails zIndex={11} key='oisjdgf09uio34i0gj' /> : null}
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

export default connect(mapStateToProps, { displayItemAvailability })(PortalPage)

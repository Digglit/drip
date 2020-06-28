import { combineReducers } from 'redux'
import pageDisplay from './pageDisplay'
import modalDisplay from './modalDisplay'
import driverDetails from '../driverDetails'
import confirmationDetails from './confirmationDetails'
import createOrder from './createOrder'
import checkoutDisplay from './checkoutDisplay'
import portalCustomerDetails from './portalCustomerDetails'
import modifyOrder from './modifyOrder'

const rootReducer = combineReducers({
  pageDisplay,
  modalDisplay,
  driverDetails,
  confirmationDetails,
  createOrder,
  checkoutDisplay,
  portalCustomerDetails,
  modifyOrder
})

export default rootReducer
import { combineReducers } from 'redux'
import pageDisplay from './pageDisplay'
import modalDisplay from './modalDisplay'
import driverDetails from '../driverDetails'
import confirmationDetails from './confirmationDetails'
import createOrder from './createOrder'
import checkoutDisplay from './checkoutDisplay'
import portalCustomerDetails from './portalCustomerDetails'

const rootReducer = combineReducers({
  pageDisplay,
  modalDisplay,
  driverDetails,
  confirmationDetails,
  createOrder,
  checkoutDisplay,
  portalCustomerDetails
})

export default rootReducer
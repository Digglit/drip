import { combineReducers } from 'redux'
import pageDisplay from './pageDisplay'
import modalDisplay from './modalDisplay'
import driverDetails from '../driverDetails'
import confirmationDetails from './confirmationDetails'
import createOrder from './createOrder'
import checkoutDisplay from './checkoutDisplay'

const rootReducer = combineReducers({
  pageDisplay,
  modalDisplay,
  driverDetails,
  confirmationDetails,
  createOrder,
  checkoutDisplay
})

export default rootReducer
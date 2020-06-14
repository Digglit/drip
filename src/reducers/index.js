import { combineReducers } from 'redux'
import pageDisplayer from './pageDisplayer'
import backdropDisplay from './backdropDisplay'
import menuDrawerOpenStatus from './menuDrawerOpenStatus'
import confirmFunctionDetails from './confirmFunctionDetails'
import couponManager from './couponManager'
import pastOrdersDisplay from './pastOrdersDisplay'
import displayAddNewDriver from './displayAddNewDriver'
import itemModifiers from './itemModifiers'
import driverDetails from './driverDetails'
import editModifiers from './editModifiers'
import couponDetails from './couponDetails'
import composeEmail from './composeEmail'
import emailDetails from './emailDetails'
import menuItemBreakdownDetails from './menuItemBreakdownDetails'
import customerDetails from './customerDetails'

const rootReducer = combineReducers({
  pageDisplayed: pageDisplayer,
  backdropDisplay,
  menuDrawerOpenStatus,
  confirmFunctionDetails,
  couponManager,
  pastOrdersDisplay,
  displayAddNewDriver,
  itemModifiers,
  driverDetails,
  editModifiers,
  couponDetails,
  composeEmail,
  emailDetails,
  menuItemBreakdownDetails,
  customerDetails,
})

export default rootReducer
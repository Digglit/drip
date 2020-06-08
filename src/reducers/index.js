import { combineReducers } from 'redux'
import pageDisplayer from './pageDisplayer'
import backdropDisplay from './backdropDisplay'
import menuDrawerOpenStatus from './menuDrawerOpenStatus'
import confirmFunctionDetails from './confirmFunctionDetails'
import couponManager from './couponManager'
import pastOrdersDisplay from './pastOrdersDisplay'
import displayAddNewDriver from './displayAddNewDriver'
import itemModifiers from './itemModifiers'

const rootReducer = combineReducers({
  pageDisplayed: pageDisplayer,
  backdropDisplay,
  menuDrawerOpenStatus,
  confirmFunctionDetails,
  couponManager,
  pastOrdersDisplay,
  displayAddNewDriver,
  itemModifiers,
})

export default rootReducer
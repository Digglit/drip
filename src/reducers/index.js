import { combineReducers } from 'redux'
import pageDisplayer from './pageDisplayer'
import backdropDisplay from './backdropDisplay'
import menuDrawerOpenStatus from './menuDrawerOpenStatus'
import confirmFunctionDetails from './confirmFunctionDetails'
import couponManager from './couponManager'

const rootReducer = combineReducers({
  pageDisplayed: pageDisplayer,
  backdropDisplay,
  menuDrawerOpenStatus,
  confirmFunctionDetails,
  couponManager,
})

export default rootReducer
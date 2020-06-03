import { combineReducers } from 'redux'
import pageDisplayer from './pageDisplayer'
import backdropDisplay from './backdropDisplay'
import menuDrawerOpenStatus from './menuDrawerOpenStatus'

const rootReducer = combineReducers({
  pageDisplayed: pageDisplayer,
  backdropDisplay,
  menuDrawerOpenStatus
})

export default rootReducer
import { combineReducers } from 'redux'
import pageDisplayer from './pageDisplayer'
import backdropDisplay from './backdropDisplay'

const rootReducer = combineReducers({
  pageDisplayed: pageDisplayer,
  backdropDisplay: backdropDisplay
})

export default rootReducer
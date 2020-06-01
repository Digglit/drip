import { combineReducers } from 'redux'
import pageDisplayer from './pageDisplayer'

const rootReducer = combineReducers({
  pageDisplayed: pageDisplayer
})

export default rootReducer
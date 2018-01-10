import {combineReducers} from 'redux'

import imageContentReducer from './imageContent.js'

export default combineReducers({
  imageContent: imageContentReducer,
})

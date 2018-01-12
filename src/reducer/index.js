import {combineReducers} from 'redux'

import imageContentReducer from './imageContent.js'
import services from './services.js'

export default combineReducers({
  imageContent: imageContentReducer,
  services: services
})

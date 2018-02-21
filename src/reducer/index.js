import {combineReducers} from 'redux'

import imageContentReducer from './imageContent.js'
import services from './services.js'
import bookMe from './bookMe.js'
import admin from './admin.js'

export default combineReducers({
  // imageContent: imageContentReducer,
  admin: admin,
  services: services,
  bookMe: bookMe
})

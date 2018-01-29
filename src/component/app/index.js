'use strict'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import createAppStore from '../../lib/store.js'

const store = createAppStore()

import About from '../imageContent'
import Contact from '../contact'
// import About from '../about'
import Services from '../services'
import Headers from '../header'
import Landing from '../landing'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render (){
    return (
      <section>
        <Provider store={store}>
          <BrowserRouter>
          <div>
            <Headers></Headers>
            <div className='component'>
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/' component={Landing} />
            </div>
          </div>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App

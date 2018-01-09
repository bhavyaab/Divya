'use strict'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import createAppStore from '../../lib/store.js'

const store = createAppStore()

import One from '../one'
import Two from '../two'
import Three from '../three'
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
            <Route exact path='/page1' component={One} />
            <Route exact path='/page2' component={Two} />
            <Route exact path='/page3' component={Three} />
            <Route exact path='/' component={Landing} />
          </div>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App

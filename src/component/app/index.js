'use strict'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import createAppStore from '../../lib/store.js'
import Landing from '../landing'

const store = createAppStore()
import One from '../one'
import Two from '../two'
import Three from '../three'
 
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
            <header>
              <h1> cool logo </h1>
              <nav>
                <ul>
                  <li><Link to='/'> Landing </Link> </li>
                  <li><Link to='/page1'> Page-1 </Link> </li>
                  <li><Link to='/page2'>  Page-2 </Link> </li>
                  <li><Link to='/page3'>  Page-3 </Link> </li>
                </ul>
              </nav>
            </header>

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

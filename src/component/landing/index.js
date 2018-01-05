'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import One from '../one'
import Two from '../two'
import Three from '../three'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <section className='landing'>
          <div>Landing Page</div>
          <BrowserRouter>
            <section>
              <Route exact={true} path='/one' component={One} />
              <Route exact={true} path='/two' component={Two} />
              <Route exact={true} path='/three' component={Three} />
            </section>
          </BrowserRouter>
          <section>   
          <header>       
            <Link to="/one">One</Link>
            <Link to="/two">Two</Link>
            <Link to="/three">Three</Link>
          </header>
          </section>
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(Landing)

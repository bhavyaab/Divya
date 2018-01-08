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
          <div>
            <header>
              <h1> cool swee awesome yeeee </h1>
              <nav>
                <ul>
                  <li><Link to='/welcome/page1'> Page-1 </Link> </li>
                  <li><Link to='/welcome/page2'>  Page-2 </Link> </li>
                  <li><Link to='/page3'>  Page-3 </Link> </li>
                </ul>
              </nav>
            </header>

            <Route exact path='/welcome/page1' component={One} />
            <Route exact path='/welcome/page2' component={Two} />
            <Route exact path='/page3' component={Three} />
          </div>
          </BrowserRouter>
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

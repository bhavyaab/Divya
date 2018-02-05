'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import About from '../about'
import Contact from '../contact'
import Home from '../home'
import Services from '../services'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}

  }

  // <i className="fa fa-location-arrow" aria-hidden="true"></i>
  // <Services></Services>
  // <About></About>
  // <Contact></Contact>
  render(){
    return (
      <section className='landing'>
        <Home></Home>
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

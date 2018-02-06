'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import Home from '../home'
import About from '../about'
import Services from '../services'
import Contact from '../contact'
import Footer from '../footer'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}

  }

  // <i className="fa fa-location-arrow" aria-hidden="true"></i>
  render(){
    return (
      <section className='landing'>
        <Home></Home>
        <Services></Services>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
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

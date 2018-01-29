'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {BrowserRouter, Route, Link} from 'react-router-dom'
class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
//Google api key : AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA
// <iframe src="//www.google.com/maps/embed/v1/place?q=Harrods,Brompton%20Rd,%20UK&zoom=17&key=AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA">
// </iframe>
  render(){
    return (
      <section className='two'>
          <h1>Page 2</h1>
          <iframe className="map"
src="https://www.google.com/maps/embed/v1/search?q=5504%20ne%208th%20pl%20renton&key=AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA"></iframe>
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

export default connect(mapStateToProps, mapDispatchToProp)(Contact)

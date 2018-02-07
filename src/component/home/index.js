'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import BookMe from '../bookMe'
import {BrowserRouter, Route, Link} from 'react-router-dom'
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
//Google api key : AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA
  render(){
    return (
      <section id="home" className='home'>
        <h4>Explore the beauty!</h4>
        <div className="book">
          <ul className="title">
            <li>BOOK AN </li>
            <li>APPOINTMENT</li>
          </ul>
          <BookMe></BookMe>
          <li className="callUs">Call us at: (425)-233-2388</li>
        </div>
      
       <img src="../../images/homeBkgd.jpg" className="ref"/>
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

export default connect(mapStateToProps, mapDispatchToProp)(Home)


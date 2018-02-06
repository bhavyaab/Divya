'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {BrowserRouter, Route, Link} from 'react-router-dom'

import BookMe from '../bookMe'
class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
//Google api key : AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA
// <iframe src="//www.google.com/maps/embed/v1/place?q=Harrods,Brompton%20Rd,%20UK&zoom=17&key=AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA">
// </iframe>
// <iframe
// src="https://www.google.com/maps/embed/v1/search?q=5504%20ne%208th%20pl%20renton&key=AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA"></iframe>
// <li><i className="fa fa-mobile" aria-hidden="true"></i> +1 (425) 233 8888 </li>
  render(){
    return (
      <section id="contact" className='contact'>
         <div className='contactUs'>
          <div className="map">
            <div className="contactBook">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li><span>Address:</span><li> 5504 NE 8th  PL Renton WA 98059</li></li>
                <li><span>Call:</span><li> +1 (425) 233 4321</li></li>
                <li><span>Email:</span> <li>  info@sondarya.com</li></li>
               </ul>
            </div>
          </div>
          <div className="map right">
            <div className="contactBook">
               <h2> BOOK AN APPOINTMENT</h2>
               <BookMe></BookMe>
            </div>
          </div>
        </div>
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

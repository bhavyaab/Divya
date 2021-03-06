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
          <div className="map left">
            <div className="contactBook">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li><span>Address:</span><div>{this.props.contact.address}   <br /><a href={this.props.contact.googleMap} target="blank"> view map  <i className="fas fa-share"></i></a></div></li>
                <li><span>Call:</span><div>{this.props.contact.mobile}</div></li>
                <li><span>Email:</span> <div><a href="mailto:divyavikrant@gmail.com?subject=Request%20a%20Service">{this.props.contact.email}</a></div></li>
               </ul>
            </div>
          </div>
          <div className="map right">
            <div className="bookForm">
               <h2> BOOK AN APPOINTMENT</h2>
                <div className="formAdjust inContact">
                 <BookMe></BookMe>
                </div>
               </div>
          </div>
        </div>
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    contact: state.admin.contact
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(Contact)

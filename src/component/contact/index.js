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
    var placeholder = {
      name: 'abc',
      email: 'a@b.com',
      message: 'asdddasdad'
    }
    return (
      <section id="contact" className='contact'>
         <div className='contactUs'>
          <h2>Contact Us</h2>
          <div className="map">
          <h4>Days: Monday - Friday,</h4>
          <h4>Hours: 10am - 8pm,</h4>
          <h4>by appointment only </h4>
          <h4><i className="fa fa-mobile" aria-hidden="true"></i> +1 (425) 233 8888 </h4>

          <iframe
src="https://www.google.com/maps/embed/v1/search?q=5504%20ne%208th%20pl%20renton&key=AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA"></iframe>
          </div>
          <div className="map right">
          <h3 >Say Hello..</h3>
          <form >
            <label htmlfor="name"></label>
            <input type="text" id="name" placeholder={placeholder.name} required />

            <label htmlfor="email"></label>
            <input type="email" id="email" placeholder={placeholder.email}/>

            <label htmlfor="subject"></label>
            <textarea id="message" placeholder={placeholder.message}></textarea>

            <input type="submit" value="Send it" />
          </form>
          <div className="thanks">
            <li>Thank You!</li>
            <li>Will contact you soon!!</li>
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

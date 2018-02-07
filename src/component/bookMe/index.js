'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {BrowserRouter, Route, Link} from 'react-router-dom'
class BookMe extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
//Google api key : AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA
// <div className="thanks">
// <li>Thank You!</li>
// <li>Will contact you soon!!</li>
// </div>
  render(){
    var placeholder = {
      name: 'Your name',
      mobile: 'Your phone number',
      message: 'Say Helo .. '
    }
    return (
      <section className='bookMe'>
       <form >
         <label for="name"></label>
         <input type="text" id="name" placeholder={placeholder.name} required />

         <label for="email"></label>
         <input type="mobile" id="mobile" placeholder={placeholder.mobile}/>

         <label for="message"></label>
         <textarea type="message" id="message" placeholder={placeholder.message}></textarea>

         <button type="submit" className="bookButton inForm" value="BOOK NOW">BOOK NOW</button>
       </form>
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

export default connect(mapStateToProps, mapDispatchToProp)(BookMe)


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
      name: 'Your Name',
      mobile: 'Your Number',
      message: 'Say Helo .. '
    }
    return (
      <section className='bookMe'>
       <form >
         <label htmlfor="name"></label>
         <input type="text" id="name" placeholder={placeholder.name} required />

         <label htmlfor="email"></label>
         <input type="mobile" id="mobile" placeholder={placeholder.mobile}/>

         <label htmlfor="message"></label>
         <textarea type="message" id="message" placeholder={placeholder.message}></textarea>

         <input type="submit" className="bookButton" value="BOOK NOW" />
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


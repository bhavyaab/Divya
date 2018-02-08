'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf, classToggler} from '../../lib/util'

import {BrowserRouter, Route, Link} from 'react-router-dom'
class BookMe extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
//Google api key : AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA
// <div className="thanks">
// <li>Thank You!</li>
// <li>Will contact you soon!!</li>
// </div>
handleChange(e){
  e.preventDefault();
  console.log( event.target.name, ' event.target.value == ', e.target.value);
}
handleSubmit(e){
  e.preventDefault()
  console.log(' handleSubmit ', );
}

// className={classToggler({
//   'list-form': true,
//   'error': this.state.error,
// })}
  render(){
    return (
      <section className='bookMe'>
       <form onSubmit={this.handleSubmit}
       >
         <input 
            type="text" 
            onChange={this.handleChange} 
            placeholder={this.props.placeholder.name} 
            label="name" required />

         <input 
            type="mobile" 
            onChange={this.handleChange} 
            placeholder={this.props.placeholder.mobile} 
            label="mobile" required/>

         <textarea 
            type="text"
            onChange={this.handleChange} 
            placeholder={this.props.placeholder.message} 
            label="message" required></textarea>

         <button type="submit" className="bookButton inForm" value="BOOK NOW">BOOK NOW</button>
       </form>
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    placeholder: state.bookMe.placeholder,
    formData: state.bookMe.formData
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(BookMe)


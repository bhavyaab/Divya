'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf, classToggler, formateTel} from '../../lib/util'

import {BrowserRouter, Route, Link} from 'react-router-dom'
import {changeForm, submitForm, resetForm }  from '../../action/bookMe-action'
class BookMe extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
//Google api key : AIzaSyA3OgCLXVXYu6o7PWq5VTELYnGMmf_4_fA

handleChange(e){
  e.preventDefault();
  if(e.target.name == 'mobile') e.target.value.length < 15 ? e.target.value = formateTel(e.target.value) : e.target.value = this.props.formData.mobile
  if(e.target.name == 'mobile') e.target.value == '' ? e.target.placeholder = 'Please enter a valid number!' : ''
  this.props.formData[e.target.name] = e.target.value
  this.props.changeForm(this.props.formData)
}
handleSubmit(e){
  e.preventDefault()
  this.props.submitForm(this.props.formData)
  this.refs.form.reset();
}

// className={classToggler({
//   'list-form': true,
//   'error': this.state.error,
// })}
  render(){
    return (
      <section className='bookMe'>
       <form onSubmit={this.handleSubmit} ref="form" >
         <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder={this.props.placeholder.name}
            label="name" required />

         <input
            type="text"
            name="mobile"
            onChange={this.handleChange}
            placeholder={this.props.placeholder.mobile}
            label="mobile" required/>
         <textarea
            type="text"
            name="message"
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
  console.log(' state ', state)
  return {
    placeholder: state.bookMe.placeholder,
    formData: state.bookMe.formData
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    changeForm: (formData) => dispatch(changeForm(formData)),
    submitForm: (formData) => dispatch(submitForm(formData)),
    resetForm: (formData) => dispatch(resetForm(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(BookMe)

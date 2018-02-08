'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {BrowserRouter, Route, Link} from 'react-router-dom'
class Services extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <section id="service" className='services'>
          <h2>Our Services</h2>
          <div  className='allService'>
          {this.props.services.map((item, index) => (
            <div className="serviceItem" key={index}>
            <div  className="image"  ><img src={item.img} /></div>
            <div className="name">{item.name}</div>
            </div>
          ))}
          </div>
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    services: state.services
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(Services)


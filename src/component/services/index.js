'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import { withRouter } from 'react-router-dom'
class Services extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <section className='services'>
          <h2>Services</h2>
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

export default  withRouter(connect(mapStateToProps, mapDispatchToProp)(Services))

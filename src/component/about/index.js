'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {Link} from 'react-router-dom'

class About extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
      return (
      <section id="about" className='about'>
        <h2>About Us</h2>
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

export default connect(mapStateToProps, mapDispatchToProp)(About)

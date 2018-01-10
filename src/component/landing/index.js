'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import One from '../one'
import Two from '../two'
import Three from '../three'
import Carousel from '../carousel'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <section className='landing'>
          <Carousel></Carousel>
          <One></One>
          <Two></Two>
          <Three></Three>
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

export default connect(mapStateToProps, mapDispatchToProp)(Landing)

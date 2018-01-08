'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {BrowserRouter, Route, Link} from 'react-router-dom'
class Three extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <section className='three'>
          <h1>Page 3</h1>
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

export default connect(mapStateToProps, mapDispatchToProp)(Three)


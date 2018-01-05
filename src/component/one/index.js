'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {Link} from 'react-router-dom'

class One extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <section className='one'>
            Wana Switch Page? Click here to <Link to="/two">Two</Link>
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

export default connect(mapStateToProps, mapDispatchToProp)(One)


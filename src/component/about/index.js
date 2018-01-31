'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {Link,  withRouter} from 'react-router-dom'

class About extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
      return (
      <section className='imageContent'>
          {this.props.content.map((item, index) => (
          <div className={item.indent? 'item ' + item.indent: 'item left'} key={index} >
            <img src={item.img} />
            <div className="description">
            <h2>{item.header}</h2>
            <h4>{item.subHeader}</h4>
            <p>{item.content}</p>
            </div>
          </div>
    ))}
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  console.log('state: ', state);
  return {
    content: state.imageContent
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProp)(About))

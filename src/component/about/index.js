'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {Link} from 'react-router-dom'

class About extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.scrollFunction = this.scrollFunction.bind(this)
  }

  scrollFunction(x, e) {
    e.preventDefault();
    document.getElementById(x).scrollIntoView({
    behavior: 'smooth',
    block: "end",
    inline: "nearest"
  });
  }

  // <button className="inAbout" onClick={this.scrollFunction.bind(this, 'contact')}>BOOK NOW</button>
  render(){
      return (
      <section id="about" className='about'>
         <div className="opacityDiv">
          <h2>About Us</h2>
          <p>{this.props.aboutUs}</p>
        </div>
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {

      aboutUs: state.admin.about
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(About)

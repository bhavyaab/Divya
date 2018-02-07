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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged.</p>
        </div>
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

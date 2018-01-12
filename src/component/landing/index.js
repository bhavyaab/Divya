'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import ImageContent from '../imageContent'
import Two from '../two'
import Services from '../services'
import Carousel from '../carousel'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    
  }
  // <ImageContent></ImageContent>
  // <Two></Two>
  // <Three></Three>
  
  
  // <img src="/../image/comb.png" />
  background = {
    one: '/../image/wallpapers.jpeg',
    two: '/../image/landing.jpg',
    three: '/../image/facial-2.jpg',
  }
  render(){
    
    return (
      <section className='landing'>
        <Carousel background={this.background}></Carousel>
        <div className="landingText">
          <img src="../../image/logo-2.svg" alt="logo" />
          <h2 id="brand-name">Sondarya</h2>
          <div id="salon" >Beauty <i className="fas fa-cut"></i> Salon</div>
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

export default connect(mapStateToProps, mapDispatchToProp)(Landing)

'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import ImageContent from '../imageContent'
import Two from '../two'
import Three from '../three'
import Carousel from '../carousel'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    
  }
  // <ImageContent></ImageContent>
  // <Two></Two>
  // <Three></Three>
  background = {
    one: '/../image/wallpapers.jpeg',
    two: '/../image/wallpapers2.jpg',
    three: '/../image/facial-2.jpg',
  }
  render(){
    
    return (
      <section className='landing'>
        <Carousel background={this.background}></Carousel>
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

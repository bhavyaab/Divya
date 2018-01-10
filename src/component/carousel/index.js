'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {Link} from 'react-router-dom'

class Carousel extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <section>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="http://via.placeholder.com/1250x950" alt="First slide"/>
          <div className="carousel-caption d-none d-md-block">
             <h1>One</h1>
             <p>jdnfoa ofdoif  osdfoisfj f</p>
           </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="http://via.placeholder.com/1250x950" alt="Second slide"/>
          <div className="carousel-caption d-none d-md-block">
           <h1>Two</h1>
           <p>afof s dfosf f</p>
         </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="http://via.placeholder.com/1250x950" alt="Third slide"/>
          <div className="carousel-caption d-none d-md-block">
           <h1>Three</h1>
           <p>dnfosf  odsijfos  ifs fs</p>
         </div>
        </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>
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

export default connect(mapStateToProps, mapDispatchToProp)(Carousel)


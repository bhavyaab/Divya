'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'

import {Link} from 'react-router-dom'

class Headers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showHam: true,
    }
    this.handleClick = this.handleClick.bind(this)
    this.scrollFunction = this.scrollFunction.bind(this)
  }

  // https://icomoon.io/app/#/select/font
handleClick(e){
  e.preventDefault()
  this.setState({showHam: !this.state.showHam})
}
// <li><Link to='/page1'> Page-1 </Link> </li>
scrollFunction(x, e) {
  e.preventDefault();
  document.getElementById(x).scrollIntoView({ 
  behavior: 'smooth',
  block: "end",
  inline: "nearest"
});  
}
render(){
  return (
      <header>
       <Link to='/' >
         <img src="../../images/logoFull.png" alt="logo" />
       </Link>
       <div className='ham'
       data-toggle="collapse"
       data-target="#collapseable"
       aria-expanded="false"
       onClick={this.handleClick}>
        {renderIf(!this.state.showHam,<i className="fas fa-asterisk"></i>)}
        {renderIf(this.state.showHam,<i className="fas fa-bars"></i>)}
       </div>
        <nav className='collapse' id="collapseable">
          <ul >
            <li onClick={this.scrollFunction.bind(this, 'home')} > HOME </li>
            <li onClick={this.scrollFunction.bind(this, 'service')} > SERVICES </li>
            <li onClick={this.scrollFunction.bind(this, 'about')} > ABOUT US </li>
            <li onClick={this.scrollFunction.bind(this, 'contact')} > CONTACT US </li>
          </ul>
        </nav>
      </header>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(Headers)

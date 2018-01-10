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
  }
  
  // https://icomoon.io/app/#/select/font
handleClick(e){
  e.preventDefault()
  this.setState({showHam: !this.state.showHam})
}

  render(){
    return (
      <header>
       <Link to='/' > <img src="../../image/logo.png" alt="Square shape logo" /></Link>
       <div className='ham' 
       data-toggle="collapse" 
       data-target="#collapseable"
       aria-expanded="false" 
       onClick={this.handleClick}>
        {renderIf(!this.state.showHam,<i className="icon-X"></i>)}
        {renderIf(this.state.showHam,<i className="icon-menu"></i>)}
       </div>
        <nav className='collapse' id="collapseable">
          <ul >
            <li><Link to='/'> Landing </Link> </li>
            <li><Link to='/page1'> Page-1 </Link> </li>
            <li><Link to='/page2'>  Page-2 </Link> </li>
            <li><Link to='/page3'>  Page-3 </Link> </li>
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


import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class AppBar extends Component{
  render(){
    return(
      <div>
      <Header dispatch={this.props.dispatch}/>
      {this.props.children}
      <Footer />
      </div>
    )
  }
}
//export default connect()(AppBar)

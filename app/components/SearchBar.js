import React,{Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
//import {browserHistory} from 'react-router'
import style from '../common/search.css'
import {fetchSearchKeyword,fetchSearch} from '../actions/searchAction'

export default class SearchBar extends Component{
  render(){
    return(
     <div className={style.searchBox}>
     <input type='text' className={style.search} placeholder='Search' ref="keyword" />
     <span className={'icon-search '+style.icon} onClick={this._searchKeyword.bind(this)}></span>
     </div>
    )
  }
  _searchKeyword(){
    let val=ReactDOM.findDOMNode(this.refs.keyword).value;
    if(val){
      console.log(val);
      this.props.dispatch(fetchSearchKeyword({keyword:val}))
    }else{
      this.props.dispatch(fetchSearch())
    }
  }
}

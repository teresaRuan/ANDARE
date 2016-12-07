import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'

import AppBar from '../../containers/AppBar'

import Aside from '../../components/Aside'
import ItemList from '../../components/ItemList'
import SearchBar from '../../components/SearchBar'

import { homeInit} from '../../test/homeInit'
import style from './found.css'

 class Found extends Component{
	 componentDidMount(){
		 //this.props.dispatch(fetchSearch())
		 console.log(this.props)
	 }
	render(){
		const {isKey,status,data,keyData,dispatch}=this.props;
		let result=isKey==-1? data:keyData;
		return(
      <AppBar dispatch={dispatch}>
      <div className={style.body}>
      <div className={'container '+style.container}>
      <div className={style.left+' col col-md-8'} >
      <SearchBar dispatch={dispatch} />
			{result&&result.length>0? <ItemList data={result} styleName='' isHome={false} dispatch={dispatch} />:<p>没有相关搜索结果，试试其他吧</p>
			}
      </div>
      <Aside {... homeInit.aside} styleName='col col-md-4' isSearch={false} />
      </div>
      </div>
      </AppBar>
			)
	}
}

function mapStateToProps(state) {
  const {isKey,status,data,keyData}=state.search;
  return{
    isKey,
    status,
    data,
    keyData
  }
}
export default connect(mapStateToProps)(Found)

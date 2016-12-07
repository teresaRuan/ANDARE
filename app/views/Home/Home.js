import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'
import { bindActionCreators } from 'redux';
import {fetchIndexIfNeeded} from '../../actions/users'
import {fetchSearchKeyword} from '../../actions/searchAction'
import AppBar from '../../containers/AppBar'

import Aside from '../../components/Aside'
import ItemList from '../../components/ItemList'

import {init,ansyncInit} from '../../actions/HomeActions'

import bgImg from '../../../public/img/bg.png'
import style from './home.css'

import {homeInit} from '../../test/homeInit'


class Focus extends Component{
  render(){
    const {keyWords,title,author,comments,likes,date,time}=this.props;
    return(
      <li className={style.item}>
      <div className={style.info}>
      <div className={style.key}>
       {keyWords.map((data,i)=>(
         <span key={i}>{data}</span>
       ))}
       </div>
       <h2 className={style.title}>{title}</h2>
       <a className={style.more}>更多</a>
       <div className={style.author}>
       <img src={author.icon} />
       <span className={style.name}>{author.name}</span>
       <span className={style.date}>{date+' '+time}</span>
       <p className={style.cl}>
       <span className='icon-comment'>{'评论('+comments+')'}</span>
       <span className='icon-like'>{'赞('+comments+')'}</span>
       </p>
       </div>
      </div>
      </li>
    )
  }
}

class Sort extends Component{
  render(){
    return(
      <dd className={this.props.isActive? style.active:style.tag}>
      <a href='javascript:' ref="toSearch"
      data-type={this.props.filter=="旅游随记"? 0:this.props.filter=="购物"? 1:2}
      onClick={this._toSearch.bind(this)}>{this.props.filter}</a>
      </dd>
    )
  }
  _toSearch(){
    let ta=ReactDOM.findDOMNode(this.refs.toSearch).getAttribute('data-type');
    console.log(ta);
  this.props.dispatch(fetchSearchKeyword({type:+ta}));
  }
}
class Home extends Component{
    /*componentWillMount(){
        //let orignState=init();
        console.log(this.store);
        this.setState(this.store.getState())
    }

    componentDidMount(){
      const {dispatch}=this.props;
       dispatch(fetchIndexIfNeeded())
     }*/
     componentDidUpdate(){
       browserHistory.push('/found');
     }
  render(){
      //console.log(this.props);
   const {focus,filters,list,aside}=homeInit;
   const {dispatch}=this.props;
   //const focus=this.props.focus,filters=this.props.filters;
    //const focus=this.state.orign.focus;
    const focusList=(
      <div className={style.focusList}>
      <img src={bgImg} className={style.bg} />
      <ul>
      {focus.map((data,i)=>(
        <Focus {...data} key={i} />
      ))}
      </ul>
      <i className={'icon-left '+style.IconLeft}></i>
      <i className={'icon-right '+style.IconRight}></i>
      </div>
    )
    //const filters=this.state.orign.filters;
    const sort=(
        <div className={style.filter}>
        <dl className='container'>
        <dt>最新动态：</dt>
        {filters.map((data,i)=>(
          <Sort key={i} isActive={i==0? 1:0} filter={data} dispatch={dispatch} />
        ))}
        </dl>
        </div>
    );
    return (
      <AppBar dispatch={dispatch}>
      {focusList}
      {sort}
      <div className='container'>
      <ItemList data={list} styleName='col col-md-8' isHome={true} />
      <Aside {...aside} styleName='col col-md-4' dispatch={dispatch} />
      </div>
      </AppBar>
    )
  }
}
function mapStateToProps(state) {
    const {keyStatus,keyData}=state.search;
    return {
      keyStatus,
      keyData
    }
}
export default connect(mapStateToProps)(Home)
/*export default connect(state=>({
  list:state.list
}))(Home)*/

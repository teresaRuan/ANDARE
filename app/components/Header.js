import React,{Component} from 'react'
import {Link} from 'react-router'
import logo from '../../public/img/logo.png'
import style from '../common/header.css'
import {fetchSearch} from '../actions/searchAction'
import {browserHistory} from 'react-router'


export default class Header extends Component{
  render(){
    const {dispatch}=this.props;
    let tip;
    if(!localStorage.token){
      tip=<Link to='/login' className={style.btnLogin}>登陆</Link>
    }else{
      tip=<span className={style.btnLogin}>{localStorage.username}</span>
    }
    return(
      <header className={style.header}>
        <div className={style.topBar}></div>
        <div className={style.container}>
        <h1 className={style.logo}><img src={logo} /></h1>
        <nav className={style.nav}>
          <ul>
            <li className={style.active}><Link to='/'>首页</Link></li>
            <li>
            <a href='javascript:' ref="found" onClick={this._found.bind(this)}>发现</a>
            </li>
            <li><Link to='/square'>广场</Link></li>
            <li><Link to='/contact'>联系我们</Link></li>
          </ul>
          {tip}
        </nav>
        </div>
      </header>
    )
  }
  _found(){
    this.props.dispatch(fetchSearch())
    browserHistory.push('/found');
  }
}

import React,{Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'
import style from './login.css'
import {fetchLogin} from '../../actions/loginAction'
class Login extends Component{
  componentDidUpdate(){
    const {isLogin,user}=this.props;
    if(isLogin==0){
    localStorage.username=user[0].username;
    localStorage.icon=user[0].icon||'/public/img/default.png';
    localStorage.token=user[0]._id;
    browserHistory.push('/');
  }
  }
  render(){
      const {dispatch,isLogin,user}=this.props;
    return(
      <div className={style.container}>
        <img src="/public/img/bg.png" alt="bg" className={style.bg} />
        <div className={style.content}>
          <div className={style.main}>
            <p className={style.tip}>登录</p>
            <input type="text" ref="email" placeholder="请输入您的邮箱" className={style.input} />
            <input type="password" ref="password" placeholder="请输入您的密码" className={style.input} />
          </div>
          {isLogin==-1? <p>用户名或密码错误</p>:""}
          <div>
            <Link to='/register' className={style.btn+" "+style.register}>注册</Link>
            <a href="javascript:" className={style.btn+" "+style.login} onClick={
            this._login.bind(this)
            }>登陆</a>
          </div>
        </div>
      </div>
    )
  }
  _login(){
    let email=ReactDOM.findDOMNode(this.refs.email).value,
    password=ReactDOM.findDOMNode(this.refs.password).value;
    this.props.dispatch(fetchLogin(email,password))
  }
}
function mapStateToProps(state) {
  const {isLogin,user}=state.user;
  if(isLogin==0){
    localStorage.token=user[0]._id;
    localStorage.username=user[0].username;
  }
  return{
    isLogin,
    user
  }
}
export default connect(mapStateToProps)(Login)

import React,{Component,PropTypes} from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import style from '../Login/login.css'
import {browserHistory} from 'react-router'
import {fetchRegister} from '../../actions/registerAction'
 class Register extends Component{
   componentDidUpdate(){
     const {isRegister,newUser}=this.props;
     if(isRegister==0){
       console.log('register ok')
       if(newUser){
       localStorage.username=newUser.username;
       localStorage.icon=newUser.icon||'/public/img/default.png';
       localStorage.token=newUser._id;
     }
     browserHistory.push('/');
   }
   }
  render(){
    const {isRegister}=this.props;
    return(
      <div className={style.container}>
        <img src="/public/img/bg.png" alt="bg" className={style.bg} />
        <div className={style.content}>
          <div className={style.main}>
            <p className={style.tip}>注册</p>
            <input type="text" placeholder="请输入您的邮箱" ref="email" className={style.input} />
            <input type="text" placeholder="请输入您的用户名" ref="username" className={style.input} />
            <input type="password" placeholder="请输入您的密码" ref="password" className={style.input} />
            <input type="password" placeholder="请再次输入您的密码" className={style.input} />
          </div>
          {isRegister==-1? <p>该用户名已存在</p>:""}
          <div>
            <a href="javascript:" className={style.register_btn} onClick={
            this._register.bind(this)}>注册</a>
          </div>
        </div>
      </div>
    )
  }
_register(){
  let email=ReactDOM.findDOMNode(this.refs.email).value,
  username=ReactDOM.findDOMNode(this.refs.username).value,
  password=ReactDOM.findDOMNode(this.refs.password).value;
  this.props.dispatch(fetchRegister(email,password,username))
}
}


function mapStateToProps(state) {
  const {isRegister,newUser}=state.register;
  if(isRegister==0){
    //localStorage.token=user[0]._id;
    //localStorage.username=user[0].username;
  }
  return{
    isRegister,
    newUser
  }
}
export default connect(mapStateToProps)(Register)

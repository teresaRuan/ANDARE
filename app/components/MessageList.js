import React,{Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import style from '../common/message.css'
import {browserHistory} from 'react-router'
import {fetchComments} from '../actions/articleAction'
import {fetchArticle} from '../actions/articleAction'
export default class MessageList extends Component{
render(){
  return(
    <div className={style.container}>
    <p><span>{this.props.comments.length}</span>评论</p>
    <ul>
    {this.props.comments.map((item,i)=>(
      <Message {...item} key={i} i={i.toString()} />
    ))}
    </ul>
    <div>
    <textarea className={style.reply} ref="content"></textarea>
    <a href="javascript:" ref="comment" onClick={this._submit.bind(this)} className={style.send}>发表评论</a>
    </div>
    </div>
  )
}
_submit(){
  let val=ReactDOM.findDOMNode(this.refs.content).value;
  if(!localStorage.token){
    browserHistory.push('/login')
  }else{
    let username=localStorage.username,
        icon=localStorage.icon,
        _id=localStorage.articleId;
    if(val){
      ReactDOM.findDOMNode(this.refs.content).value="";
      this.props.dispatch(fetchComments(_id,{username:username,content:val,icon:icon}))
      this.props.dispatch(fetchArticle(localStorage.articleId));
    }
  }
}
}

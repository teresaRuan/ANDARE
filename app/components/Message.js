import React,{Component,PropTypes} from 'react'

import style from '../common/message.css'

export default class Message extends Component{
  render(){
    const {username,icon,content}=this.props;
    return(
      <li className={style.item}>
      <img className={style.icon+' left'} src={icon? icon:""}/>
      <div className={style.content+' left'}>
      <p className={style.name}>{username}</p>
      <p className={style.comment}>{content}</p>
      </div>
      </li>
    )
  }
}

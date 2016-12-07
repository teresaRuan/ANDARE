import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import style from '../common/article.css'
export default class ArrticleContent extends Component{
  render(){
    const {type,title,content}=this.props;
    return (
    <div className={style.content}>
      <p className={style.type}>{type==0? "旅游随记":type==1?"购物":"其它"}</p>
      <h3 className={style.title}>{title}</h3>
      <div className='article_content' dangerouslySetInnerHTML={{__html:content}}></div>
    </div>
  )
  }
}

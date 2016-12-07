import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'

import SearchBar from './SearchBar'

import style from '../common/aside.css'

class Popular extends Component{
  render(){
    const {name,flowers}=this.props;
    return (
      <li className={(this.props.addLine? style.normalLine+' ':'')+style.row}>{name}<span>{flowers}</span></li>
    )
  }
}
class New extends Component{
  render(){
    const {src,date,comments,title}=this.props
    return(
      <li className={(this.props.addLine? style.normalLine+' ':'')}>
      <img src={src} className={style.thum} />
      <div className={style.info}>
      <p>
      <span className={style.date}>{date}</span>
      <span className={'icon-comment '+style.comments}>{comments}</span>
      </p>
      <h6>{title}</h6>
      </div>
      </li>
    )
  }
}
class Tag extends Component{
  render(){
    const {name,styleName}=this.props;
    return(
      <li className={styleName}><a href='#'>{name}</a></li>
    )
  }
}
export default class Aside extends Component{

  static propTypes={
    popular:PropTypes.arrayOf(PropTypes.shape({
      name:PropTypes.string.isRequired,
      flowers:PropTypes.number.isRequired
    }).isRequired).isRequired,
    newest:PropTypes.arrayOf(PropTypes.shape({
      src:PropTypes.string.isRequired,
      title:PropTypes.string.isRequired,
      comments:PropTypes.number.isRequired,
      date:PropTypes.string.isRequired
    }).isRequired).isRequired,
    topic:PropTypes.arrayOf(PropTypes.shape({

    }).isRequired).isRequired,
    tags:PropTypes.arrayOf(PropTypes.shape({
      name:PropTypes.string.isRequired
    }))
  }

  render(){

    const {popular,newest,topic,tags,addAuthor=false,styleName,isSearch=true,dispatch}=this.props;

  const popularList=(
    <div className={style.box}>
    <h3 className={style.title}>达人榜</h3>
    <ul>
    {popular.map((person,i)=>(
      <Popular {...person} key={person.id} addLine={i==0? 0:1}/>
    ))}
    </ul>
    </div>
  );
  const newestList=(
    <div className={style.box}>
    <h3 className={style.title}>最新动态</h3>
    <div className={style.tab}><span className={style.active}>最新动态</span><span>最热话题</span></div>
    <ul className='newest'>
    {newest.map((data,i)=>(
      <New {...data} key={data.id} addLine={i==0? 0:1}/>
    ))}
    </ul>
    <ul className='topic'>
    {topic.map((data,i)=>(
      <li key={i}>话题</li>
    ))}
    </ul>
    </div>
  );
  const keyWord=(
    <div className={style.box}>
    <h3 className={style.title}>关键字</h3>
    <ul>
     {tags.map((data,i)=>(
       <Tag key={i} {...data} styleName={style.tag}/>
     ))}
    </ul>
    </div>
  );
  return(
    <div className={styleName+' '+style.aside}>
    <div className={style.container}>
    {isSearch&&<SearchBar dispatch={dispatch}/>}
    {popularList}
    {newestList}
    {keyWord}
    </div>
    </div>
  )
}
}

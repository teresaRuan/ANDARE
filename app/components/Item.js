import React,{Component,PropTypes} from 'react'
import {browserHistory} from 'react-router'
import style from '../common/item.css'
import { connect } from 'react-redux'
import {fetchArticle} from '../actions/articleAction'
export default class Item extends Component{
/*  static propTypes={
    author:PropTypes.object.isRequired,
    type:PropTypes.number.isRequired,
    banner:PropTypes.string.isRequired,
    likes:PropTypes.number.isRequired,
    comments:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    time:PropTypes.string.isRequired
  }*/

  render(){
    const {author,type,comments,likes,title,banner,des,content,date,time,isHome,i}=this.props;

    return(
      <li className={isHome? (style['box'+i]+' '+style.box):style.box+' '+style.item_specical}>
      <a href="javascript:" ref="article" onClick={this._article.bind(this)}>
      <div className={style.top}>
      <img src={banner} className={isHome? '':style.show} />
      <section>
      <span className={style.type}>{type==0? "旅游随记":type==1? "购物":"其他"}</span>
      <span className={style.other}><i className='icon-comment'>{comments.length}</i>
      <i className='icon-like'>{likes}</i></span>
      </section>
      </div>
      <div className={style.otherBox}>
      <section>
      <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.content}>{des}</p>
      </div>
      </section>
      <section className={style.line+' clear'}>
      <div className={style.author}>
      <div className={style.info}>
      <img src={author.icon} className={style.icon} />
      <span className={style.name}>{author.name}</span>
      <span className={style.time}>{`${date}`}</span>
      </div>
      <div className={'icon-more '+style.share}>
      </div>
      </div>
      </section>
      </div>
      </a>
      </li>
    )
    }
    _article(){
      //console.log(12321);
      localStorage.articleId=this.props._id;
      //this.props.dispatch(fetchArticle(this.props._id));
      browserHistory.push('/article')
    }
  }

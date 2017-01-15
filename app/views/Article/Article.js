import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'

import AppBar from '../../containers/AppBar'

import Aside from '../../components/Aside'
import ArticleContent from '../../components/ArticleContent'
import MessageList from '../../components/MessageList'
import {homeInit} from '../../test/homeInit'
import {fetchArticle} from '../../actions/articleAction'
import style from './article.css'

 class Article extends Component{
   componentDidMount(){
     const {dispatch}=this.props;
     dispatch(fetchArticle(localStorage.articleId));
   }
	render(){
		const {status,data,dispatch}=this.props;
		return (
    <AppBar dispatch={dispatch}>
    <div className={style.body}>
    <div className={'container '+style.container}>
    <div className={style.left+' col col-md-8'} >
    <ArticleContent {...data} />
    {data? <MessageList comments={data.comments} dispatch={dispatch} />:""}
    </div>
    <Aside {...homeInit.aside} styleName='col col-md-4' isSearch={true} />
    </div>
    </div>
    </AppBar>
  )
	}
}
function mapStateToProps(state) {
  const {status,data}=state.article;
  return{
    status,
    data
  }
}
export default connect(mapStateToProps)(Article)

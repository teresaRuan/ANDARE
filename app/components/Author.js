import React,{Component,PropTypes} from 'react'

export default class Author extends Component{
  render(){
    const {icon,intro,authorArticle}=this.props;
    return(
      <div>
      <h3>作者</h3>
      <img src={icon}>
      <section>
      <h5>介绍</h5>
      <p>{intro}</p>
      </section>
      <section>
      <h5>文章</h5>
      <ul>
      {authorArticle.map((article)=>(
        <li>
        <h4>{article.title}</h4>
        <p><span>{article.comments}+'评论'</span><span>{article.likes}+' 赞'</span>
        <span>{article.date}</span></p>
        </li>
      ))}
      </ul>
      </section>
      </div>
    )
  }

  Author.propTypes={
    icon:PropTypes.string.isRequired,
    intro:PropTypes.string.isRequired,
    authorArticle:PropTypes.arrayOf(PropTypes.shape({
      comments:PropTypes.string.isRequired,
      likes:PropTypes.string.isRequired,
    }).isRequired).isRequired
  }
}

import React,{Component,PropTypes} from 'react'

import Item from './Item'
import style from '../common/item.css'
export default class ItemList extends Component{

  /*static propTypes={
    data:PropTypes.arrayOf(PropTypes.shape(
      author:PropTypes.object.isRequired,
      type:PropTypes.string.isRequired,
      imgUrl:PropTypes.string.isRequired,
      likes:PropTypes.number.isRequired,
      comments:PropTypes.number.isRequired,
      title:PropTypes.string.isRequired,
      content:PropTypes.string.isRequired,
      date:PropTypes.string.isRequired,
      time:PropTypes.string.isRequired
    ).isRequired).isRequired
  }*/
  render(){
    return(
      <div className={this.props.styleName}>
      <ul className={this.props.isHome? 'flexBox':style.flexBox}>
      {this.props.data.map((item,i)=>(
        <Item {...item} key={i} dispatch={this.props.dispatch} isHome={this.props.isHome} i={i.toString()} styleName={this.props.itemStyle? this.props.itemStyle:''}/>
      ))}
      </ul>
      </div>
    )
  }
}

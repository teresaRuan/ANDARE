import React,{Component} from 'react'
import {Link} from 'react-router'

import style from '../common/footer.css'

export default class Footer extends Component{
  render(){
    return (
      <footer className={style.footer}>
        <div className='container'>
        <nav className={style.nav}>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/found'>发现</Link></li>
            <li><Link to='/'>广场</Link></li>
            <li><Link to='/contact'>联系我们</Link></li>
          </ul>
        </nav>
        <span className={'right '+style.copy}>版本字号</span>
       </div>
      </footer>
    )
  }
}

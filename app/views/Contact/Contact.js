import React,{Component,PropTypes} from 'react'
import AppBar from '../../containers/AppBar'
import style from './contact.css'

export default class Contact extends Component{
  render(){
    return(
      <AppBar>
      <div className={style.container}>
      <section className={style.top}>
        <h1>Hi,guy!<br/>联系我们</h1>
        <p>泰戈尔说，
”我们如海鸥之于波涛相遇似的

相遇了，走近了“

也许，人生从来都不如初见，

而每一个昨天也只是今天的前任，

所以一路上，我们反复练习的是，

明天你想成为什么样的人。

我们不想长大，

却一定会长大；

而我们不想变老，

就可以永远年轻。

用一生的时间来探寻和世界的关系，

不急。</p>
</section>
<section className={style.bottom}>
<ul>
<li>
<h3 className={style.title}>我们的电话</h3>
<p>我们的客服24小时待机，欢迎您拨打喔</p>
<p>tel：<span className={style.strong}>021-666-6666</span></p>
</li>
<li>
<h3 className={style.title}>我们的地址</h3>
<p>以下是我们的办公地址，欢迎您的加入</p>
<p>adr:<span className={style.strong}>市中心市中心上海市中心</span></p>
</li>
<li>
<h3 className={style.title}>最后的总结</h3>
<p>从陌生人到一家人的距离，

也许只是一瓦一檐，一蔬一汤，

愿砺砺尖路，相亲相爱。

就像所有恶作剧的主角，

结尾都会有一个幸福的亮点，

人生里，学会与麻烦过招，

它们也许就成了点赞之交。</p>
</li>
</ul>
</section>
      </div>
      </AppBar>
    )
  }
}

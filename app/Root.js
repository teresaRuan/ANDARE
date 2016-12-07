import React,{Component,PropTypes}from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import configureStore from './store/configureStore';
import todo from './redux/reducer'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
//import createBrowserHistory from 'history/lib/createBrowserHistory'
import Home from './views/Home/Home'
import Found from './views/Found/Found'
import Article from './views/Article/Article'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import Contact from './views/Contact/Contact'
import Square from './views/Square/Square'
import initState from './test/date'

//let store=createStore(todo);
//console.log(store.getState())
let store=configureStore()
export default class Root extends Component{
  render(){
    return(
      <Provider store={store}>
      <Router history={browserHistory}>
       <Route path='/'>
        <IndexRoute component={Home} />
        <Route path='/found' component={Found} />
        <Route path='/article' component={Article}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/square' component={Square} />
       </Route>
      </Router>
      </Provider>
    )
  }
};

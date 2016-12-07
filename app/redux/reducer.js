//import {combineReducers} from 'redux';
import { combineReducers } from 'redux'
//import {initState} from '../test/date'
import user from './loginReducer'
import register from './registerReducer'
import search from './searchReducer'
import article from './articleReducer'
import messages from './squareReducer'

const rootReducer = combineReducers({
user,
register,
search,
article,
messages
})

 export default rootReducer

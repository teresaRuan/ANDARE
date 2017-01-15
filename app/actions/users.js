import {constructUserLogin} from '../utils/UserUtils'
import * as types from '../constants/ActionTypes'

function receiveIndex(){
  return {
    type:RECEIVE_POSTS
  }
}
function fetchIndex(){
  return function(dispatch){
    return fetch('../test/data.json')
  .then(response=>response.json())
  .then(json=>dispatch(receiveIndex()))
  }
}

export function fetchIndexIfNeeded(){
  return (dispatch,getState)=>{
    return dispatch(fetchIndex())
  }
}

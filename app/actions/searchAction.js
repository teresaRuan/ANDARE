import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function search(status,data){
  return {
    type:types.FETCH_SEARCH,
    status:status,
    data:data

  }
}
function searchKeyword(status,data){
  return{
    type:types.FETCH_SEARCH_KEYWORD,
    keyStatus:status,
    keyData:data
  }
}
export function fetchSearch(){
  return function(dispatch){
    try{
      return fetch('/search',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }
      })
      .then(response=>response.json())
      .then(json=>dispatch(search(json.status,json.data)))
    }catch(err){
      console.log('chufa')
    }
  }
}

export function fetchSearchKeyword(obj){
  return function(dispatch){
    let data=obj;
    try{
      return fetch('/searchKeyword',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(response=>response.json())
      .then(json=>dispatch(searchKeyword(json.status,json.data)))
    }catch(err){
      console.log('chufa')
    }
  }
}

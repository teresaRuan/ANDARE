import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

/*export function fnLogin(argument) {
    return{
        type:FETCH_LOGIN
    }
}*/
function articleDetail(status,data){
    return{
        type:types.FETCH_DETAIL,
        data:data,
        status:status
    }
}
function addComments(status,comments){
  return{
    type:types.FETCH_ADD_COMMENT,
    postStatus:status
  }
}
export function fetchArticle(id){
  return function(dispatch){
    let data={
       _id:id
    }
    data=JSON.stringify(data);
    console.log(typeof data);
    try{
      return fetch('/articleDetail',{
        method:'POST',
        headers:{
          'Accept':'applica tion/json',
          'Content-Type':'application/json'
        },
        body:data
      })
      .then(response=>response.json())
      .then(json=>dispatch(articleDetail(json.status,json.data)))
    }catch(err){
      console.log('chufa')
    }
  }
}
export function fetchComments(id,obj){
  return function(dispatch){
    let data={
       _id:id,
       newComment:obj
    }
    data=JSON.stringify(data);
    console.log(typeof data);
    try{
      return fetch('/submitComment',{
        method:'POST',
        headers:{
          'Accept':'applica tion/json',
          'Content-Type':'application/json'
        },
        body:data
      })
      .then(response=>response.json())
      .then(json=>dispatch(articleDetail(json.status,json.data)))
    }catch(err){
      console.log('chufa')
    }
  }
}

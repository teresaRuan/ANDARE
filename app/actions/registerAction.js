import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function register(status,newUser){
  return{
    type:types.FETCH_REGISTER,
    status:status,
    newUser:newUser
  }
}

export function fetchRegister(email,password,username){
  return function(dispatch){
    let data={
      email:email,
      password:password,
      username:username
    }
    data=JSON.stringify(data);
    console.log(typeof data);
    try{
      return fetch('/userRegister',{
        method:'POST',
        headers:{
          'Accept':'applica tion/json',
          'Content-Type':'application/json'
        },
        body:data
      })
      .then(response=>response.json())
      .then(json=>dispatch(register(json.status,json.newUser)))
    }catch(err){
      console.log('chufa')
    }
  }
}

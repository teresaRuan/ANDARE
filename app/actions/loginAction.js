import {FETCH_LOGIN} from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

/*export function fnLogin(argument) {
    return{
        type:FETCH_LOGIN
    }
}*/
function login(status,user){
    return{
        type:FETCH_LOGIN,
        user:user,
        status:status
    }
}
export function fetchLogin(email,password){
  return function(dispatch){
    let data={
      email:email,
      password:password
    }
    data=JSON.stringify(data);
    console.log(typeof data);
    try{
      return fetch('/userLogin',{
        method:'POST',
        headers:{
          'Accept':'applica tion/json',
          'Content-Type':'application/json'
        },
        body:data
      })
      .then(response=>response.json())
      .then(json=>dispatch(login(json.status,json.data)))
    }catch(err){
      console.log('chufa')
    }
  }
}
/*export const { fetchUserLogin } = createActions({
    FETCH_LOGIN: async () => {
        try {
            //express后台中需要建立'/articles'路由，来处理请求数据
            let response = await fetch('/userLogin');
            let data = await response.json();

            return {data }
        } catch (err) {
            console.log(err);
        }
    }
});

//post
/*
export const postAddItem = (text) => {
    return dispatch => {
        dispatch({type: "loadAddItem", text})
        fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ item: text })
        }).then(res => {
            if(res.ok) {
                dispatch({ type: "ADD_ITEM", text })
                console.log("POST SUCCESS");
            }
        }, e => {
            dispatch({type: "loadAddItem", text})
            alert("POST ERROR");
        })
    }
}
*/

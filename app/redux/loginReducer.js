import * as types from '../constants/ActionTypes'

const initState={
	user:null,
	isLogin:-3
}

export default function user(state=initState,action){
	switch(action.type){
		case types.FETCH_LOGIN:
			return Object.assign({},state,{
				user:action.user,
				isLogin:action.status
			})
		default:
		return state;
	}
}

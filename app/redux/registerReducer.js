import * as types from '../constants/ActionTypes'

const initState={
	  isRegister:-2,
		newUser:null
}

export default function register(state=initState,action){
	switch(action.type){
		case types.FETCH_REGISTER:
			return Object.assign({},state,{
				isRegister:action.status,
				newUser:action.newUser
			})
		default:
		return state;
	}
}

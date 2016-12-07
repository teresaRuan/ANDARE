import * as types from '../constants/ActionTypes'

const initState={
	  data:null,
    status:-1,
		postStatus:-1
}

export default function article(state=initState,action){
	switch(action.type){
		case types.FETCH_DETAIL:
			return Object.assign({},state,{
				"status":action.status,
        "data":action.data
			});
			case types.FETCH_ADD_COMMENT:
			return Object.assign({},state,{
				"postStatus":action.postStatus
			})
		default:
		return state;
	}
}

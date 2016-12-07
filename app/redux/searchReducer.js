import * as types from '../constants/ActionTypes'

const initState={
  isKey:-1,
  status:-2,
  data:null,
  keyStatus:-2,
  keyData:null
}

export default function search(state=initState,action){
	switch(action.type){
		case types.FETCH_SEARCH:
			return Object.assign({},state,{
				status:action.status,
        data:action.data,
        isKey:-1
			});
      case types.FETCH_SEARCH_KEYWORD:
      return Object.assign({},state,{
        keyStatus:action.keyStatus,
        keyData:action.keyData,
        isKey:0
      })
		default:
		return state;
	}
}

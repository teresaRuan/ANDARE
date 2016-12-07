import {FETCH_ARTICLE} from '../constants/ActionTypes'
import {initState} from '../test/date'
export function getList(argument) {
    return{
        type:FETCH_ARTICLE
    }
}

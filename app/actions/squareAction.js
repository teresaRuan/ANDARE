import * as types from '../constants/ActionTypes';

export function sendMessage(message) {
    return {
        type: types.SEND_MESSAGE,
        message
    }
}

export function receiveMessage(message) {
    return {
        type: types.RECEIVE_MESSAGE,
        message
    }
}

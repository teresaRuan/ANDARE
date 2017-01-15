import React from 'react'
import * as types from '../constants/ActionTypes';


const initialState = {
    messages: [{type: types.SYSTEM_MESSAGE,
                text: '欢迎进入今日广场！'}],
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_MESSAGE:
            const message = action.message;
            return {...state,
                messages: [...state.messages, {
                    type: types.RECEIVE_MESSAGE,
                    text: message.text,
                    userName: message.userName
                }]
            }
      /*  case types.USER_JOINED:
            return {...state,
                messages: [...state.messages, {
                    type: messageTypes.SYSTEM_MESSAGE,
                    text: `${action.data.userName} joined! Now ${action.data.userNumber} participants.`
                }]
            }
        case actionTypes.USER_LEFT:
            return {...state,
                messages: [...state.messages, {
                    type: messageTypes.SYSTEM_MESSAGE,
                    text: `${action.data.userName} left! Now ${action.data.userNumber} participants.`
                }]
            }*/
        case types.SEND_MESSAGE:
            return state;
        default:
            return state;
    }
}

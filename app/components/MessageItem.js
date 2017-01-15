import React, { PropTypes } from 'react';
import * as types from '../constants/ActionTypes'
import style from '../common/square.css'

export default class MessageItem extends React.Component {


    render() {
        const { message} = this.props;
        switch (message.type) {
            case types.SYSTEM_MESSAGE:
                return (
                    <li className={style.system_message}>
                        {message.text}
                    </li>
                );
              default:
             return (
                    <li className={ message.type == types.RECEIVE_MESSAGE? style.user_message: style.user_message+' right'}>
                        <div className={style.container}>
                        <section className={style.icon_box}>
                        <img src='/public/img/default.png' className={style.icon} />
                        </section>
                        <section className={style.content}>
                        <p className={style.username}>{message.userName}</p>
                        <p className="message-body">{message.text}</p>
                        </section>
                        </div>
                    </li>
                );
        }
    }
}

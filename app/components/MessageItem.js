import React, { PropTypes } from 'react';
import * as types from '../constants/ActionTypes'
import style from '../common/square.css'

export default class MessageItem extends React.Component {


    render() {
        const { message } = this.props;
        console.log(this.props)
        switch (message.type) {
            case types.USER_MESSAGE:
                const userNameColor = this._getUserNameColor(message.userName);
                return (
                    <li className={style.user_message}>
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
            case types.SYSTEM_MESSAGE:
                return (
                    <li className={style.system_message}>
                        {message.text}
                    </li>
                );
              default:
              return(
                <li className="user-message">
                    <span className="user-name" style={{color: userNameColor}}>{message.userName}</span>
                    <span className="message-body">{message.text}</span>
                </li>
              )
        }
    }

    _getUserNameColor(userName) {
        const COLORS = [
            '#e21400', '#91580f', '#f8a700', '#f78b00',
            '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
            '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
        ];
        // Compute hash code
        let hash = 7;
        for (let i = 0; i < userName.length; i++) {
            hash = userName.charCodeAt(i) + (hash << 5) - hash;
        }
        // Calculate color
        const index = Math.abs(hash % COLORS.length);
        return COLORS[index];
    }
}

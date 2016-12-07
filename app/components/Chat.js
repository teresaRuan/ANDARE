import React, { Component, PropTypes } from 'react';
import MessageInput from './MessageComposer';
import MessageItem from './MessageItem';
import Singleton from '../views/Square/socket'


export default class Chat extends Component {

    constructor(props, context) {
        super(props, context);
        this.socket = Singleton.getInstance();
    }

    componentWillMount() {
        const { receiveMessage } = this.props;
        this.socket.on('newMessage',function (msg) {
            receiveMessage(msg);
        });
        this.socket.emit('signIn',localStorage.username)
        /*this.socket.on('userJoined',function (data) {
            console.log(data);
            userJoined(data);
        });
        this.socket.on('userLeft',function (data) {
            console.log(data);
            userLeft(data);
        });*/
    }

    sendMessage(newMessage) {
        const { sendMessage, userName } = this.props;
        if (newMessage.length !== 0) {
            sendMessage(newMessage);
            this.socket.emit('newMessage', newMessage);
        }
    }

    render() {
        const { messages} = this.props;
        console.log(messages);
        return (
            <div className="chat">
                <div className="chat-area">
                    <ul className="messages">
                            {messages.messages.map((message, index) =>(
                            <MessageItem message={message} key={index} />
                          ))}

                    </ul>
                </div>
                <MessageInput sendMessage={this.sendMessage.bind(this)} />
            </div>
        );
    }
}

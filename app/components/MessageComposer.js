import React, { Component, PropTypes } from 'react';
import style from '../common/square.css'
export default class MessageComposer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit(event) {
        if (event.which === 13) {
            event.preventDefault();
            const text = this.refs.input.value.trim();
            if (text.length > 0) {
                this.props.sendMessage(text);
                this.refs.input.value = '';
            }
        }
    }

    render() {
        return (
            <input className={style.input_message}
                   autoFocus="true"
                   ref="input"
                   onKeyDown={this.handleSubmit.bind(this)}
                   placeholder="请输入你要发言的内容" />
        );
    }
}

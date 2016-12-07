import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import Chat from '../../components/Chat';
import {receiveMessage,sendMessage} from '../../actions/squareAction';

class Square extends Component {
    render() {
      console.log(this.props)
        return (
            <Chat {...this.props} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        messages: state.messages,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        receiveMessage:receiveMessage,
        sendMessage:sendMessage
        //userJoined: types.userJoined,
        //userLeft: types.userLeft
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)

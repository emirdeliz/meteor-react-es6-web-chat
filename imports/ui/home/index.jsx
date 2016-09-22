import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../../api/messages';
import Message from '../message/index.jsx';

class Home extends Component {
    constructor(props) {
        super(props);

        const { name, picture, email } = JSON.parse(localStorage.getItem('auth'));

        this.state = {
            name,
            picture,
            email
        };
    }

    componentWillMount() {
        const logged = localStorage.getItem('auth');
        if (!logged) {
            this.context.router.push('login');
        } else {
            this.buildLastMessages();
        }
    }

    componentDidMount() {
        this.positionScrollBottom();
    }

    componentDidUpdate() {
        this.positionScrollBottom();
        this.buildLastMessages();
    }

    positionScrollBottom() {
        const node = document.getElementById('messages-container');
        node.scrollTop = node.scrollHeight;
    }

    sendMessage() {
        const { name, picture, email  } = JSON.parse(localStorage.getItem('auth'));
        Meteor.call('messages.insert', this.message.value, name, picture.data.url, email);
    }

    logout() {
        localStorage.clear();
        this.context.router.push('login');
    }

    buildLastMessages() {
        const rows = [];
        this.props.messages.forEach((item, i) => {
            rows.push(<Message { ...item } key={ i }/>);
        });
        return rows;
    }

    render() {
        return (
            <div>
                <div className="hero is-primary">
                    <nav className="nav">
                        <div className="nav-left is-hidden-touch">
                            <p className="nav-item title is-4">
                                <span className="icon">
                                    <i className="fa fa-comments-o"></i>
                                </span> Chat
                            </p>
                        </div>
                        <div className="nav-center is-hidden-touch">
                            <p className="nav-item title is-4">
                                Bem vindo { this.state.name }
                            </p>
                        </div>
                        <div className="nav-right">
                            <span className="nav-item">
                                <a className="button" onClick={ this.logout.bind(this) }>
                                    <span className="icon">
                                        <i className="fa fa-sign-out"></i>
                                    </span>
                                    <span>logout</span>
                                </a>
                            </span>
                        </div>
                    </nav>
                </div>
                <div className="chat-window">
                    <div id="messages-container">{ this.buildLastMessages() }</div>
                    <div>
                        <p id="message-input-container" className="control has-addons">
                            <input className="input" id='message-input' type="text"
                                placeholder="Envie uma menssagem"
                                onKeyUp={ (event) => {
                                    if (event.charCode === 13 || event.keyCode === 13) {
                                        this.sendMessage();
                                    }
                                }} ref={ (c) => this.message = c }/>
                            <a id='sendButton' className="button is-primary" onClick={ this.sendMessage.bind(this) }>
                                Send
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

Home.contextTypes = {
    router: React.PropTypes.object
};

Home.propTypes = {
    messages: PropTypes.array.isRequired,
    currentUser: PropTypes.object
};

export default createContainer(() => {
    Meteor.subscribe('messages');
    return {
        messages: Messages.find({}, { sort: { createdAt: 1 } }).fetch()
    };
}, Home);

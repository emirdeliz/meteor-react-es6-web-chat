import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {
    handleSocialLogin(user) {
        const { name, picture, email } = user;
        const auth = { name, picture, email };
        localStorage.setItem('auth', JSON.stringify(auth));
        this.context.router.goBack();
    }

    render() {
        return (
            <div className='is-flex login'>
                <h1 className='subtitle is-2'>Login Chat</h1>
                <FacebookLogin appId="546204165573618" textButton="Facebook"
                    autoLoad={ false } fields="name,email,picture"
                    callback={ this.handleSocialLogin.bind(this) } />
            </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
};

import React, { Component } from 'react';

export default class NotFound extends Component {
    render() {
        return (
            <section className="hero is-fullheight is-dark is-bold login">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-4 is-offset-4 ">
                                <h3 className="title has-text-centered">
                                    Página não encontrada
                                </h3>
                                <p className="has-text-centered">
                                    <button className="button is-primary" onClick={
                                        this.context.router.goBack.bind(this)
                                    }>Voltar</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

NotFound.contextTypes = {
    router: React.PropTypes.object
};

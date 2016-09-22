import React, { Component, PropTypes } from 'react';
import { FormattedRelative } from 'react-intl';

export default class Message extends Component {
    render() {
        return (
            <article className="is-fullwidth media card">
                <figure className="media-left image is-64x64">
                    <img src={ this.props.picture }/>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{ this.props.name }</strong>
                            <small className="relativeTime">
                                <FormattedRelative value={ this.props.createdAt }/>
                            </small>
                            <br/>
                            { this.props.message }
                        </p>
                    </div>
                </div>
            </article>
        );
    }
}

Message.propTypes = {
    picture: PropTypes.string,
    name: React.PropTypes.string,
    message: React.PropTypes.string,
    createdAt: React.PropTypes.object,
};

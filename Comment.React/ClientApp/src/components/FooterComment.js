import React from 'react';

export default class FooterComment extends React.Component {
    render() {
        return (
            <div>
                <span className="current-user-actions hidden add1">
                    <a data-no-instant="" href="javascript:void(0)" className="edit-butt" rel="nofollow">DELETE</a>
                    <a href="javascript:void(0)" rel="nofollow">EDIT</a>
                </span>
                <a
                    href="javascript:void(0)"
                    className="toggle-reply-form"
                    rel="nofollow"
                    onClick={() => this.props.onClickOpenChildReply(true)}>
                    REPLY
                </a>
            </div>
        )
    }
}
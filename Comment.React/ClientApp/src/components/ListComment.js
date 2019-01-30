import React from 'react';
import ChildReply from './ChildReply';
import FooterComment from './FooterComment';

export default class ListComment extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            loading: true,
            isChildReply: false,
        }
        fetch('api/SampleData/getAllComments')
            .then(response => response.json())
            .then(data => {
                this.setState({ comments: data, loading: false })
            });
    }

    handleClickChildReply = () => {
        this.setState({
            isChildReply: !this.state.isChildReply,
        })
    }

    renderComments(comments) {
        return (
            comments.map(comment => {
                return (
                    <details open key={comment.id}>
                        <summary><span>&nbsp;</span></summary>
                        <div className="comment-hash-marker" id="1p42"></div>
                        <div id="comment-node-34582" className="single-comment-node root  comment-deep-0" data-comment-id="34582" data-comment-author-id="38113">
                            <div className="inner-comment">
                                <div className="details ">
                                    <a href="javascript:void(0)">
                                        <img className="profile-pic" src={comment.image} />
                                        <span className="comment-username">
                                            <span className="comment-username-inner">{comment.userName}</span>
                                        </span>
                                    </a>
                                    <a href="javascript:void(0)" rel="noopener noreferrer" target="_blank">
                                        <img className="icon-img" src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/github-logo-6a5bca60a4ebf959a6df7f08217acd07ac2bc285164fae041eacb8a148b1bab9.svg" alt="Github logo" />
                                    </a>
                                    <div className="comment-date">
                                        <a href="javascript:void(0)">{comment.dateFormatted}</a>
                                    </div>
                                    {/* <button className="dropbtn">
                                    <img className="dropdown-icon" src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/three-dots-ccccd24fcb68651b557799b70323802aa1c6a3ee2a427fc657231ff7bb522b27.svg" alt="Three dots" />
                                </button> */}

                                </div>
                                <div className="body ">
                                    <p>
                                        {comment.content}
                                    </p>
                                    <button className="reaction-button">
                                        <img src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/favorite-heart-outline-button-2dcee70f90c0bc12bee8cbc5a8a409ba181e88912814fb0515214204bdc92c71.svg" />
                                        <img className="voted-heart" src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/emoji-one-heart-86ec9beca6e804af6db630e35a1e12ebd169103c0156e881e7f8a38933e1a546.png" />
                                        <span className="reactions-count">{comment.like}</span>
                                    </button>
                                </div>
                                <div className="actions">
                                    <ChildReply
                                        onClickOpenChildReply={this.handleClickChildReply}
                                        isChildReply = {this.state.isChildReply}
                                    />
                                </div>
                            </div>
                        </div>
                    </details>
                )
            })
        );
    }
    render() {
        let content = this.state.loading ? <p><em>Loading...</em></p> : this.renderComments(this.state.comments);
        return (
            <div className="comment-trees" id="comment-trees-container">
                {content}
            </div>
        )
    }
}

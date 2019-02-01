import React from 'react';
import ChildReply from './ChildReply';
import FetchApi from '../service/fetchApi';

export default class ListComment extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            isChildReply: false,
            toTalLike: 0,
        }
    }
    // componentDidUpdate() {
    //     FetchApi.getWithCallBack('api/Comment/getall', (data) => {
    //         this.setState({
    //             comments: data,
    //             loading: false
    //         })
    //     });
    // }

    handleClickChildReply = () => {
        this.setState({
            isChildReply: !this.state.isChildReply,
        })
    }

    handleClickLike = (commentId) => {
        let userLogin = this.props.userLogin;
        if (userLogin === null) {
            alert("Please login first!");
            return;
        }
        let params = {
            commentId: commentId,
            userId: userLogin.email
        }
        FetchApi.post('api/LikeButton/clickLike', params);
    }

    async loadCLikeAsync(id) {
        let response = await fetch(`api/likebutton/totalLikeByCommentId/${id}`);
        let data = await response.json();
        return data;
    }

    renderComments(comments) {
        let toTalLike = 0;
        return (
            comments.map(comment => {

                // FetchApi.getWithCallBack(`api/likebutton/totalLikeByCommentId/${comment.id}`, (data) => {
                //     toTalLike = data;
                // });
                this.loadCLikeAsync(comment.id).then(data=>{
                    return data;
                });
                console.log(toTalLike);
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
                                            <span className="comment-username-inner">{comment.fullName}</span>
                                        </span>
                                    </a>
                                    <a href="javascript:void(0)" rel="noopener noreferrer" target="_blank">
                                        {/* <img className="icon-img" src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/github-logo-6a5bca60a4ebf959a6df7f08217acd07ac2bc285164fae041eacb8a148b1bab9.svg" alt="Github logo" /> */}
                                        <img className="icon-img" src="https://madeby.google.com/static/images/google_g_logo.svg" alt="Google logo" />
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
                                    <button
                                        className="reaction-button"
                                        onClick={() => this.handleClickLike(comment.id)}>
                                        <img src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/favorite-heart-outline-button-2dcee70f90c0bc12bee8cbc5a8a409ba181e88912814fb0515214204bdc92c71.svg" />
                                        <img className="voted-heart" src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/emoji-one-heart-86ec9beca6e804af6db630e35a1e12ebd169103c0156e881e7f8a38933e1a546.png" />
                                        <span className="reactions-count">
                                            {toTalLike}
                                        </span>
                                    </button>
                                </div>
                                <div className="actions">
                                    <ChildReply
                                        onClickOpenChildReply={this.handleClickChildReply}
                                        isChildReply={this.state.isChildReply} />
                                </div>
                            </div>
                        </div>
                    </details>
                )
            })
        );
    }
    render() {
        // let content = this.state.loading ? <p><em>Loading...</em></p> : this.renderComments(this.props.comments);
        let content = this.renderComments(this.props.comments);
        return (
            <div className="comment-trees" id="comment-trees-container">
                {content}
            </div>
        )
    }
}

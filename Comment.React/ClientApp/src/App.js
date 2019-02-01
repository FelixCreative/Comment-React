import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import InputComment from './components/InputComment';
import ListComment from './components/ListComment';
import FetchApi from '../src/service/fetchApi';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            comment: '',
            userLogin: null,
            lstComments: [],
        }

        this.loadCommentsAsync().then(data => {
            this.setState({
                lstComments: data,
                // loading: false
            })
        });
    }
    handleChangeComment = (e) => {
        this.setState({
            comment: e.target.value,
        })
    }

    // loadComments() {
    //     FetchApi.getWithCallBack('api/Comment/getall', (data) => {
    //         this.setState({
    //             lstComments: data,
    //             // loading: false
    //         })
    //     });
    // }

    async loadCommentsAsync() {
        let response = await fetch('api/Comment/getall');
        let data = await response.json();
        return data;
    }

    handleSubmitComment = (e) => {
        e.preventDefault();
        let content = this.state.comment;
        let user = this.state.userLogin;
        if (user === null) {
            alert("Please login before comment!");
            return;
        }
        if (content) {
            let params = {
                Email: user.email,
                Content: this.state.comment,
                ParentId: null,
            }
            FetchApi.post('api/comment/add', params);
            this.setState({
                content: '',
            });
        } else {
            alert("Please enter your comment!");
            return;
        }
    }
    responseGoogle = (response) => {
        this.setState({
            userLogin: response.profileObj,
        });
        let user = response.profileObj;
        var params = {
            Email: user.email,
            FullName: user.name,
            FirstName: user.givenName,
            LastName: user.familyName,
            Image: user.imageUrl,
            type: 'Google',
        }
        FetchApi.post('api/user/add', params);
    }
    render() {
        return (
            this.state.lstComments &&
            <div className="universal-page-content-wrapper stories stories-show" >
                <div>
                    <div className="home">
                        <div className="container article">
                            <div className="comments-container-container">
                                {
                                    this.state.userLogin &&
                                    <GoogleLogout
                                        buttonText="Logout"
                                        onLogoutSuccess={() => this.setState({ userLogin: null })}
                                    >
                                    </GoogleLogout>
                                }
                                {
                                    this.state.userLogin === null &&
                                    <GoogleLogin
                                        //Used email felix@inxvn.com to get cliendId
                                        clientId="512056324591-rlliuc3e1i9o3h55affr85jrp4ketlq2.apps.googleusercontent.com"
                                        buttonText="Login"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                    />
                                }

                                <div className="comments-container">
                                    <InputComment
                                        onChange={this.handleChangeComment}
                                        onSubmit={this.handleSubmitComment}
                                    />
                                    <ListComment
                                        comments={this.state.lstComments}
                                        userLogin={this.state.userLogin} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
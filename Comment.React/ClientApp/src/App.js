import React from 'react';
import InputComment from './components/InputComment';
import ListComment from './components/ListComment';

export default class App extends React.Component {
    render() {
        return (
            <div id="page-content" className="universal-page-content-wrapper stories stories-show" data-current-page="stories-show">
                <div id="page-content-inner">
                    <div className="home">
                        <div className="container article" id="article-show-container" data-author-id="51969" data-live="false" data-path="/drminnaar/11-react-examples-2e6d">
                            <div className="comments-container-container">
                                <div className="comments-container" id="comments-container" data-commentable-id="15737" data-commentable-type="Article">
                                    <InputComment />
                                    <ListComment />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
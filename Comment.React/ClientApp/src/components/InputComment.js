import React from 'react';

export default class InputComment extends React.Component {
    render() {
        return (
            <form className="new_comment" id="new_comment" action="/comments" method="post"><input
                name="utf8" type="hidden" value="✓" />
                <input type="hidden" name="authenticity_token" value="NOTHING" id="new_comment_authenticity_token" />
                <input value="15737" type="hidden" name="comment[commentable_id]" id="comment_commentable_id" />
                <input value="Article" type="hidden" name="comment[commentable_type]" id="comment_commentable_type" />
                <div className="field" id="textarea-wrapper">
                    <textarea placeholder="Add to the discussion"
                        id="text-area" required="required"
                        name="comment[body_markdown]" className=""></textarea>
                    <div className="preview-toggle comment-preview-div" id="preview-div"></div>
                </div>
                <div className="code-of-conduct" id="toggle-code-of-conduct-checkbox">
                </div>
                <a href="/p/editor_guide" className="markdown-guide" target="_blank" title="Markdown Guide">
                    <img className="icon-image" src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/info-e41d8339284ee95aee60021abfd0f2cecd660193460eaf6b58f0c71b36770668.svg" />
                </a>
                <div className="editor-image-upload">
                    <input type="file" id="image-upload-main" name="file" accept="image/*"/>
                    <button className="image-upload-button" id="image-upload-button-main"
                        title="Upload Image">
                        <img className="icon-image" src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/image-upload-3a2d56cb56c9a8f3242791854c02e6cdc0a3cf71f3d007ea1278e323ffa2abc8.svg" />
                    </button>
                    <label className="image-upload-file-label" id="image-upload-file-label-main"></label>
                    <input type="submit" id="image-upload-submit-main" value="Upload" />
                    <input className="uploaded-image" id="uploaded-image-main" />
                </div>
                <div className="actions" id="submit-wrapper">
                    <a href="https://www.google.com/">
                        <button id="cancel-button" className="comment-action-button comment-action-cancel">CANCEL</button>
                    </a> 
                    {/* <button id="preview-button" className="comment-action-button comment-action-preview">PREVIEW</button> */}
                    <input type="submit" className="comment-action-button" value="SUBMIT"/>
                </div>
            </form>
        )
    }
}
import React from 'react';

export default class ChildReply extends React.Component {
    render() {
        if (this.props.isChildReply === false) {
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
                        onClick={this.props.onClickOpenChildReply}>
                        REPLY
                    </a>
                </div>
            )
        }
        return (
            <form className="new_comment">
                <textarea className="embiggened add3"></textarea>
                <a href="/p/editor_guide" className="markdown-guide" target="_blank" title="Markdown Guide">
                    <img className="icon-image" src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/info-e41d8339284ee95aee60021abfd0f2cecd660193460eaf6b58f0c71b36770668.svg" />
                </a>
                <div className="editor-image-upload">
                    <input type="file" className="add1" name="file" accept="image/*" />
                    <button title="Upload Image" className="image-upload-button">
                        <img className="icon-image" src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/image-upload-3a2d56cb56c9a8f3242791854c02e6cdc0a3cf71f3d007ea1278e323ffa2abc8.svg" />
                    </button> <label className="image-upload-file-label" id="image-upload-file-label-693"></label>
                    <input type="submit" value="Upload" className="add1" />
                    <input className="uploaded-image" />
                </div>
                <div className="actions reply-actions">
                    <a href="javascript:void(0)" className="cancel" onClick={this.props.onClickOpenChildReply}>CANCEL</a>
                    <button id="preview-button" className="comment-action-button comment-action-preview">PREVIEW</button>
                    <input type="submit" className="comment-action-button" name="commit" value="SUBMIT" />
                </div>
            </form>
        )
    }
}
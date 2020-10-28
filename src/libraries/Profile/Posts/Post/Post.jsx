import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="posts__item">
            <div className="post__avatar"></div>
            <div className="post__text">{props.text}</div>
        </div>
    )
}

export default Post;
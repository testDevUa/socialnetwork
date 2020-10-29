import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const Posts = (props) => {

    let addPostElem = React.createRef();

    let getInpVal = () => {
        props.addPost(addPostElem.current.value);
    }

    let allPosts = props.state.posts.map(p => <Post text={p.text} />);

    return (
        <div className="Posts">
            <h3>My posts</h3>
            <input type="text" className='post__inp' placeholder='Your news...' ref={addPostElem} />
            <div className="post__btn">
                <button className="post__add" onClick={getInpVal}>Post</button>
            </div>
            { allPosts}
        </div>
    )
};

export default Posts;
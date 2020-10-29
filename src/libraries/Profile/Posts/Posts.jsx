import React from 'react';
import './Posts.css';
import Post from './Post/Post';

let addPostElem = React.createRef();

let addPost = () => {
    alert(addPostElem.current.value);
    addPostElem.current.value='';
}


const Posts = (props) => {
    
    let allPosts = props.state.posts.map( p => <Post text={p.text} />);

    return (
        <div className="Posts">
            <h3>My posts</h3>      
            <input type="text" className='post__inp' placeholder='Your news...' ref={addPostElem}/>
            <div className="post__btn">
                <button className="post__add" onClick={addPost}>Post</button>
            </div>
            { allPosts }
        </div> 
    )
};

export default Posts;
import React from 'react';
import Post from './Post/Post';
import './Posts.css';

let postsData = [
    {
        text: 'Hey, why nobody loves me'
    },
    {
        text: 'Just text'
    },
    {
        text: 'Third post'
    },
    {
        text: 'Second post'
    },
    {
        text: 'First post'
    }
];

let posts = postsData.map( p => <Post text={p.text} />);

const Posts = () => {
    return (
        <div className="Posts">
            <h3>My posts</h3>      
            <input type="text" className='post__inp' placeholder='Your news...'/>
            <div className="post__btn">
                <button className="post__add">Post</button>
            </div>
            { posts }
        </div> 
    )
};

export default Posts;
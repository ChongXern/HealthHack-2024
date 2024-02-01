// Page that shows the actual post itself with comments
import React, {useState} from 'react';
import NavBar from './NavBar';

export default function PostPage () {
    const [post, setPost] = useState(null);
    if (!post) {
        return <div> Loading... </div>
    }
    return (
        <div className='post-page'> 
        <NavBar />
            <h2 style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bold'
            }}> {post.title} </h2>
            <p style={{
                fontSize: '12px',
                float: 'right'
            }}> {post.username} </p>
            <p className='time-added'> {post.timeAdded} </p>
            
        </div>
    );
};
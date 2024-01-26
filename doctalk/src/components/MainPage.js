import { useEffect, useState } from 'react'
import NavBar from './NavBar';

export default function MainPage() {
    const [recentPosts, setRecentPosts] = useState([
        { id: 1, title: 'Post 1', description: 'First!' },
        { id: 2, title: 'Post 2', description: 'Not first'},
        { id: 3, title: 'Post 3', description: 'But not the last'},
        { id: 4, title: 'Post 4', description: '3A'},
        { id: 5, title: 'Post 5', description: 'Last one for now'}
    ]);
    return (
        <div>
            <NavBar />
            <h1> Popular posts </h1>
            <div className="popular-posts-scroll">
                {recentPosts.map((post) => (
                    <div key={post.id} className="popular-post">
                        <h3> {post.title}</h3>
                        <p> {post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
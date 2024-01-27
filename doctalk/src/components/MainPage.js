import { useEffect, useState } from 'react'
import NavBar from './NavBar';
import '../styles/MainPage.css'


export default function MainPage() {
    const popularPosts = [
        { id: 1, title: 'Accidentally cut my finger', text: 'Should I see the doctor about this or let it heal itself?', op: 'uqewocrde12', image: '../media/injury images/bleeding_finger.png', comments: 15, timeAdded: '2 hrs ago', isResolved: true},
        { id: 2, title: 'A cat scratched me', text: 'And it\'s a wild cat btw', op: 'LJMO2001', image: '../media/injury images/cat_scratch.png', comments: 0, timeAdded: 'just now', isResolved: false},
        { id: 3, title: 'A dog bit me', text: 'This one\'s a wild dog also', op: 'LJMO2001', image: '../media/injury images/puppy.png', comments: 17, timeAdded: '5 hrs ago', isResolved: true},
        { id: 4, title: 'Lost my nose on my way to school', text: 'How am I still breathing', op: 'tom_marvalo_riddle', image: '../media/injury images/broken_nose.png', comments: 6, timeAdded: '1 day ago', isResolved: false},
        { id: 5, title: 'Sneezing a lot lately', text: 'Is this allergy or some cold?', op: 'snot_person', image: '../media/injury images/sneezing.png', comments: 0, timeAdded: 'just now', isResolved: false},
        { id: 6, title: 'Lost my tooth after eating lunch', text: 'Title.', op: 'fish', image: '../media/injury images/tooth_loss.png', comments: 2, timeAdded: '3 hrs ago', isResolved: true},
        { id: 7, title: 'Losing hair after waking up', text: 'Not again', op: 'hrq2024', image: '../media/injury images/hair_loss.png', comments: 0, timeAdded: '1 day ago', isResolved: false},
        { id: 8, title: 'My cat is sick', text: 'For the past week actually', op: 'mickey_mouse', image: '../media/injury images/sick_pet.png', comments: 10, time_added: '1 day ago', isResolved: true}
    ];
    return (
        <div className='main-page'>
            <div className="popular-posts">
                <NavBar />
                <div className="posts-container">
                <h2> Popular posts </h2>
                    {popularPosts.map((post) => (
                        <div key={post.id} className="post">
                            <div className="post-title"> {post.title} </div>
                            <div className="op"> {post.op} </div>
                            <div> {post.image && <img src={post.image} alt="Post Image" />} </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
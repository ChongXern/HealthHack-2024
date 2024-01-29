export default MainPage;
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import React from "react";
import '../styles/MainPage.css';
import PostPage from './PostPage';
import {BrowserRouter as router, Link, Navigate, useNavigate} from "react-router-dom";

import finger from '../media/injury images/bleeding_finger.png'
import scratch from '../media/injury images/cat_scratch.png'
import puppy from '../media/injury images/puppy.png'
import voldermort from '../media/injury images/broken_nose.png'
import sneeze from '../media/injury images/sneezing.png'
import tooth from '../media/injury images/tooth_loss.png'


function MainPage(){
    const popularPosts = [
        { id: 1, title: 'Accidentally cut my finger', text: 'Should I see the doctor about this or let it heal itself?', op: 'uqewocrde12', image: finger, comments: 15, timeAdded: '2 hrs ago', isResolved: true},
        { id: 2, title: 'A cat scratched me', text: 'And it\'s a wild cat btw', op: 'LJMO2001', image: scratch, comments: 0, timeAdded: 'just now', isResolved: false},
        { id: 3, title: 'A dog bit me', text: 'This one\'s a wild dog also', op: 'LJMO2001', image: puppy, comments: 17, timeAdded: '5 hrs ago', isResolved: true},
        { id: 4, title: 'Lost my nose on my way to work', text: 'How am I still breathing', op: 'tom_marvalo_riddle', image: voldermort, comments: 6, timeAdded: '1 day ago', isResolved: false},
        { id: 5, title: 'Sneezing a lot lately', text: 'Is this allergy or some cold?', op: 'snot_person', image: sneeze, comments: 0, timeAdded: 'just now', isResolved: false},
        { id: 6, title: 'Lost my tooth after eating lunch', text: 'Title.', op: 'fish', image: tooth, comments: 2, timeAdded: '3 hrs ago', isResolved: true},
    ];
    return(
    <>
        <div className='main-page'>
            <NavBar />
            <div className="popular-posts">
                <div className='upload-button'> Ask a medical question!</div>
                <div className="posts-container">
                <h2> Popular posts </h2>
                    {popularPosts.map((post) => (
                        <div key={post.id} className="post">
                            <div className="post-title"> {post.title} </div>
                            <div className="op"> {post.op} </div>
                            <div> 
                                {post.image && <img src={post.image} alt={"Post Image"} />} 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <section class="filter">
        <div>Filter</div>
        <select id ="issue">
        <option value = "respiratory"> respiratory issues</option>
        <option value = "nervous"> nervous system issues</option>
        <option value = "digestive"> digestive issues</option>
        </select>
        </section>

        <section class="posts">
        <div id="article">
            <a href="/components/PostPage">title to the post</a>
            
            <div id="status">status</div>
            
            <p>contents of the concerns, preview on the front page</p>
        </div>
        </section>
        </>
    );
}





import NavBar from './NavBar';
import React from "react";
import '../styles/MainPage.css';
import {getId, updateId} from './postIDGlobal.js'
import {BrowserRouter as router, Link, Navigate, useNavigate} from "react-router-dom";
//import { useEffect, useState } from 'react'


import covid from '../media/injury images/covid_positive.png'
import finger from '../media/injury images/bleeding_finger.png'
import scratch from '../media/injury images/cat_scratch.png'
import puppy from '../media/injury images/puppy.png'
import voldermort from '../media/injury images/broken_nose.png'
import sneeze from '../media/injury images/sneezing.png'
import tooth from '../media/injury images/tooth_loss.png'

function MainPage() {
    const popularPosts = [
        { id: 0, title: 'Tested positive for Covid-19', text: "Have been feeling week over the past few days and woke up to this, what should I do?", op: 'worried_billy', image: covid, comments: 2, timeAdded: '1 hr ago', isResolved: false},
        { id: 1, title: 'Accidentally cut my finger', text: 'Should I see the doctor about this or let it heal itself?', op: 'uqewocrde12', image: finger, comments: 15, timeAdded: '2 hrs ago', isResolved: true},
        { id: 2, title: 'A cat scratched me', text: 'And it\'s a wild cat btw', op: 'LJMO2001', image: scratch, comments: 0, timeAdded: 'just now', isResolved: false},
        { id: 3, title: 'A dog bit me', text: 'This one\'s a wild dog also', op: 'LJMO2001', image: puppy, comments: 17, timeAdded: '5 hrs ago', isResolved: true},
        { id: 4, title: 'Lost my nose on my way to work', text: 'How am I still breathing', op: 'tom_marvalo_riddle', image: voldermort, comments: 6, timeAdded: '1 day ago', isResolved: false},
        { id: 5, title: 'Sneezing a lot lately', text: 'Is this allergy or some cold?', op: 'snot_person', image: sneeze, comments: 0, timeAdded: 'just now', isResolved: false},
        { id: 6, title: 'Lost my tooth after eating lunch', text: 'Title.', op: 'fish', image: tooth, comments: 2, timeAdded: '3 hrs ago', isResolved: true},
    ];
    function uploadPostButton () {
        return (
            <Link to="./Upload" className="post-button">
                Ask a medical question!
            </Link>
        );
    }
    var idClicked = getId();
    const handlePostClick = (postID) => {
        console.log("handle post click is called with ", postID);
        /*const currURL = new URL(window.location.href);
        currURL.searchParams.set('postID', postID);
        window.location.href = currURL.toString();*/
        updateId(postID);
        console.log('Clicked post ID: ', getId());
    }

    fetch("http://localhost:3030/api/posts")
        .then(response => {
            console.log("HELLO WORD")
            if (response.ok) {
            return response.json();
            } else {
            throw new Error('Request failed with status ' + response.status);
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });    
    
    return(
    <>
    <div className='main-page'> 
            <NavBar />
            <div className="popular-posts">
                <div className="posts-container">
                <h2> Popular posts </h2>
                <a className='post-button' href="/components/UploadPage"> Ask a medical question!</a>
                    {popularPosts.map((post) => (
                        <a key={post.id} className="post" onClick={() => handlePostClick(post.id)} id="link" href="/components/PostPage">
                            <div className='post-title' style={{fontSize: '14', cursor: 'pointer'}}> <b>{post.title}</b> </div>
                            <div style={{fontSize: '12px', float: 'left', color: 'grey'}}> Posted by {post.op} </div>
                            <div style={{fontSize: '12px', float: 'right', color: 'grey'}}> {post.timeAdded} </div>
                            <div> 
                                {post.image && <img src={post.image} className='upload-image' alt={"Post Image"} />} 
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <section class="filter">
        <div>Filter</div>
        <select id ="issue">
            <option value = "tooth"> Dental issues</option>
            <option value = "digestive"> Digestive issues</option>
            <option value = "mental"> Mental well-being issues</option>
            <option value = "nervous"> Nervous system issues</option>
            <option value = "pet"> Pet issues </option>
            <option value = "respiratory"> Respiratory issues</option>
            <option value = "other"> Other issues</option>
        </select>
        </section>

        <section class="posts">
        <div id="article">
            <a href="/components/UploadPage">title to the post</a>
            
            <div id="status">status</div>
            
            <p>contents of the concerns, preview on the front page</p>
        </div>
        </section>
        
        
        </>
    );
}

export default MainPage;


/*
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
        */

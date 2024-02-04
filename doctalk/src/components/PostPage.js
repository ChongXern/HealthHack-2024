// Page that shows the actual post itself with comments
import React, {useState, useEffect} from 'react';
import { createStore } from 'redux';
import NavBar from './NavBar';
import {getId, updateId} from './postIDGlobal.js'
import '../styles/PostPage.css';
import loadingGif from '../media/loading.gif'

import covid from '../media/injury images/covid_positive.png'
import finger from '../media/injury images/bleeding_finger.png'
import scratch from '../media/injury images/cat_scratch.png'
import puppy from '../media/injury images/puppy.png'
import voldermort from '../media/injury images/broken_nose.png'
import sneeze from '../media/injury images/sneezing.png'
import tooth from '../media/injury images/tooth_loss.png'

export default function PostPage () {
    //const [post, setPost] = useState(null);
    const posts = [
        { id: 0, title: 'Tested positive for Covid-19', text: "Have been feeling week over the past few days and woke up to this, what should I do?", op: 'worried_billy', image: covid, comments: 2, timeAdded: '1 hr ago', isResolved: false},
        { id: 1, title: 'Accidentally cut my finger', text: 'Should I see the doctor about this or let it heal itself?', op: 'uqewocrde12', image: finger, comments: 15, timeAdded: '2 hrs ago', isResolved: true},
        { id: 2, title: 'A cat scratched me', text: 'And it\'s a wild cat btw', op: 'LJMO2001', image: scratch, comments: 0, timeAdded: 'just now', isResolved: false},
        { id: 3, title: 'A dog bit me', text: 'This one\'s a wild dog also', op: 'LJMO2001', image: puppy, comments: 17, timeAdded: '5 hrs ago', isResolved: true},
        { id: 4, title: 'Lost my nose on my way to work', text: 'How am I still breathing', op: 'tom_marvalo_riddle', image: voldermort, comments: 6, timeAdded: '1 day ago', isResolved: false},
        { id: 5, title: 'Sneezing a lot lately', text: 'Is this allergy or some cold?', op: 'snot_person', image: sneeze, comments: 0, timeAdded: 'just now', isResolved: false},
        { id: 6, title: 'Lost my tooth after eating lunch', text: 'Title.', op: 'fish', image: tooth, comments: 2, timeAdded: '3 hrs ago', isResolved: true},
    ];
    //var id = getId();
    var post;
    useEffect(() => {
        console.log('useEffect component running');
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        console.log("ID: ", id);
        post = posts[id];
    }, []);

    //const post = posts.find((post) => post.id === Number(id));
    if (!post || updateId == -1) {
        return (
            <div> <NavBar /> 
            Loading... </div>
        )
    }
    return (
        <div className='post-page'> 
        <NavBar />
            <h2 style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bold'
            }}> {post.title} </h2>
            <div className='post-container'>
                <p style={{fontSize: '12px', float: 'left'}}> {post.op} </p>
                <p style={{fontSize: '12px', float: 'right'}}> {post.timeAdded} </p>
                <img className='post-image' src={post.image} alt={"Post Image"} title={post.title}/>
                <p> {post.text} </p>
            </div>
        </div>
    );
};
import React from "react";
import '../styles/MainPage.css';
import PostPage from './PostPage';
import {BrowserRouter as router, Link, Navigate, useNavigate} from "react-router-dom";

function MainPage(){
    
    return(
    <>
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

export default MainPage;
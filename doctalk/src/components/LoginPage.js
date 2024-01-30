import React from "react";
import '../styles/LoginPage.css';

function LoginPage(){

    return(
        <>
        <div class="details">
        <h1>Login</h1>
        <div>username</div>
        <input id="email" placeholder="enter your email"></input>
        <br/>
        <div>password</div>
        <input id="password" placeholder="enter your password"></input>
        <a href="/components/MainPage">
            <button id= "enterButton" onClick ="/components/MainPage">enter</button>
        </a>
        <br/>
        <div> No account? Sign up! </div>
        </div>
        </>
    );
}

export default LoginPage;
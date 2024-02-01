import React from "react";
import '../styles/LoginPage.css';
import logo from '../media/draft_logo.png';
import doctor_icon from "../media/doctor_icon.svg";
import user_icon from "../media/user_icon.svg";
import student_icon from "../media/student_icon.svg";

function SignedUp(){
    alert("Your account has been created! Please log in :)");
};

function SignupPage(){
    
    return(
        <>
            <nav className="nav" style={{height:"50px"}}>
                <a title="DocTalk home" href="/" className="site-title" > 
                    <img src={logo} alt="Doctalk.com" className="logo" />
                    <div id="motto">Your affordable helpline to medical concerns!</div>
                </a>
            </nav>
            <section class="bg">
            
                <div class="details">
                    <h1 id="login">Sign Up</h1>
                    <div>Signing up as:</div>
                    <br></br>

                    <div class="type">
                        <button class="button" >
                            <img src={user_icon} class="usertype"></img>
                            <div>Public</div>
                        </button>
                        <button class="button">
                            <img src={student_icon} class="usertype"></img>
                            <div> Student</div>
                        </button>
                        <button class="button">
                            <img src={doctor_icon} class="usertype"></img>
                            <div>Doctor</div>
                        </button>
                        
                </div>
                    <br></br>
                    <br></br>
                    <br></br>

                    <label id = "username">Username </label>
                    <input id="email" placeholder="enter your email"></input>
                    <br></br>
                    <br></br>
                    <br></br>

                    <label id="pw">Password </label>
                    <input id="password" placeholder="enter your password"></input>
                    <a href="/">
                        <button id= "enterButton" onClick= "SignedUp()">enter</button>
                    </a>
                    <br></br>
                    <br></br>
                    </div>
            </section>
        </>
    );
}

export default SignupPage;

//onClick ="/components/MainPage"
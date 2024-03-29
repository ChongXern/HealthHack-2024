import React, {useState} from "react";
import '../styles/LoginPage.css';
import '../styles.css';
import logo from '../media/draft_logo.png';
import doctor_icon from "../media/doctor_icon.svg";
import user_icon from "../media/user_icon.svg";
import student_icon from "../media/student_icon.svg";
import NavBar from './NavBar';
import MainPage from "./MainPage";


function LoginPage(){
	const [password, setPassword] = useState('');
    const [activeButton, setActiveButton] = useState(null);
	const [showPassword, setShowPassword] = useState(false);
	const changePWVisibility = () => {
		setShowPassword(!showPassword);
	}

    const handleButtonClick = (id) =>{
        setActiveButton(id);
    }
	const handleLogin = () => {
		//window.location.href = './components/MainPage';
        <MainPage/>
	}
    return(
        <>
        <nav className="nav" style={{height:"50px"}}>
            <a title="DocTalk home" href="/" className="site-title" > 
                <img src={logo} alt="Doctalk.com" className="logo" />
                <div id="motto">Your affordable helpline to medical concerns!</div>
            </a>
        </nav>
		<form action='localhost:3030/api/signin' method='POST'>
        <section class="bg">
           
            <div class="details">
                <h1 id="login">Login</h1>
                <div class="type">
                    <button 
                        className={`button ${activeButton === 'public' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('public')}>
                    
                        <img src={user_icon} class="usertype" alt="Public"/>
                        <div>Public</div>
                    </button>
                    <button 
                        className={`button ${activeButton === 'student' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('student')}>
                        <img src={student_icon} class="usertype" alt="Student"/>
                        <div> Student</div>
                    </button>
                    <button 
                        className={`button ${activeButton === 'doctor' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('doctor')}>
                        <img src={doctor_icon} class="usertype" alt="Doctor"></img>
                        <div>Doctor</div>
                    </button>
                    
                </div>
                <br></br>
                <br></br>
                <br></br>

                <label id = "username">Username </label>
                <input id="username" name="username" placeholder="Enter your username"></input>
                <br></br>
                <br></br>
                <br></br>

                <label id="pw">Password </label>
                <input type={showPassword ? 'text' : 'password'} 
					id="password" 
					name="password"
					placeholder="enter your password" 
					value={password} 
					onChange={(event) => setPassword(event.target.value)}
				/>
				<button type='button' onClick={changePWVisibility}> {showPassword ? 'Hide' : 'Show'} Password </button>
				<br/>
                <button id="enterButton" >
                    
					<a id="link" href="/components/MainPage"> Login </a>
                </button>
                <br></br>
                <br></br>

                <div id ="create-account">
                    <div>No account?</div>
                    <a id="create-acc-link" href="/components/SignupPage">Create an account</a>
                </div>
            </div>
        </section>
		</form>
        </>
    );
}

export default LoginPage;

//onClick={handleLogin}
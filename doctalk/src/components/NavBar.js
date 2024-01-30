import React from "react"
import '../styles/NavBar.css'
import logo from '../media/draft_logo.png'
import bellIcon from '../media/bell.png'

export default function NavBar() {
    const handleLogoClick = () => {
        window.location.href = "/";
    }
    return (
        <nav className="nav" style={{height:"50px"}}>
        <a title="DocTalk home" href="./MainPage.js" className="site-title" onClick={handleLogoClick}> 
            <img src={logo} alt="Doctalk.com" className="logo" />
        </a>
        <ul>
            <li> <img src={bellIcon} alt="Notifications" className="notifications"/> </li>
            
            <li> <a href="#" > Profile</a> </li>
            <li> <a href="#" > Logout </a> </li>
        </ul>
        </nav>
    );
}
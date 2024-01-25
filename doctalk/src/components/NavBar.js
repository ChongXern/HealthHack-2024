import React from "react"
import '../styles.css'
import logo from '../media/draft_logo.png'
import bellIcon from '../media/bell.png'

export default function NavBar() {
    const handleLogoClick = () => {
        window.location.href = "/";
    }
    return (
        <nav className="nav" style={{height:"50px"}}>
        <a title="DocTalk home" href="/" className="site-title" onClick={handleLogoClick}> 
            <img src={logo} alt="Doctalk.com" className="logo" />
        </a>
        <ul>
            <li className="notidications"> <a href="#" > Notifications </a> </li>
            <li> <a href="#" > Profile</a> </li>
            <li> <a href="#" > Logout </a> </li>
        </ul>
        </nav>
    );
}
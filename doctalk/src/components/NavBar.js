import React, { useState } from "react"
import '../styles/NavBar.css'
import logo from '../media/draft_logo.png'
import bellIcon from '../media/bell.png'

export default function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleLogoClick = () => {
        window.location.href = '/components/MainPage';
    }
    const handleBellClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const handleLogoutClick = () => {
        window.location.href = '/home';
    }

    return (
        <nav className="nav" style={{height:"50px"}}>
        <a title="DocTalk home" href="./MainPage.js" className="site-title" onClick={handleLogoClick}> 
            <img src={logo} alt="Doctalk.com" className="logo" />
        </a>
        <ul>
            <li> <img src={bellIcon} title='Notifications' alt="Notifications" className="notifications" onClick={handleBellClick}/> </li>
            {isDropdownOpen && (
                <div className="notification-dropdown">
                    <div className="notification-item"> Notification 1</div>
                    <div className="notification-item"> Notification 2</div>
                    <div className="notification-item"> Notification 3</div>
                </div>
            )}
            <li> <a href="#" > Profile</a> </li>
            <li> <a href="./LoginPage.js" onClick={handleLogoutClick}> Logout </a> </li>
        </ul>
        </nav>
    );
}
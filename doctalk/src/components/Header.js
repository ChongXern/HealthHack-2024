import React from 'react';
import '../styles/Header.css';

const Header = ({ logoSrc }) => {
  return (
    <header className="header"> 
      <div className="logo">
        <img src={logoSrc} alt="Logo" />
        <p> Hello World! </p>
      </div>
      <div className="search-bar">Search Bar</div>
      <div className="notifications">Notifications</div>
      <div className="profile">Profile</div>
    </header>
  );
};

export default Header;

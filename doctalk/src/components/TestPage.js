// TestPage.js

import React from 'react';
import Header from './Header';
import MainPage from './MainPage'
import '../styles/Header.css';

const TestPage = () => {
  const LogoSrc = '../media/med_bald.png';
  console.log("TESTING");

  return (
    <div>
      <Header logoSrc={LogoSrc} />
      <p> TESTING PAGE </p>
      {/* Add other components or content for testing */}
    </div>
  );
};

export default TestPage;

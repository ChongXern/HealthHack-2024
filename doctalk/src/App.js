
import './App.css';
import NavBar from './components/NavBar';


import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import UploadPage from './components/UploadPage';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
    
}from "react-router-dom";


function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route exact path="/" element = {<LoginPage/>}/>
        <Route exact path="/components/UploadPage" element = {<UploadPage/>}/>
        <Route exact path="/components/MainPage" element = {<MainPage/>}/>
      </Routes>
    </Router>
    </>
  );




/*<div className='App'>
      <UploadPage />
  </div>
*/
    
    //<h1> DocTalk! </h1>
  
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;

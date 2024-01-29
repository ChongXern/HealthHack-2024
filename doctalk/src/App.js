
import './App.css';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import UploadPage from './components/UploadPage';

import MainPage from './components/MainPage';
import PostPage from './components/PostPage';
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
    <div className='App'>
      <UploadPage />
    </div>
    <div className='App'>
      <UploadPage />
    </div>
    <Router>
      <Routes>
        <Route exact path="/" element = {<LoginPage/>}/>
        <Route exact path = "/components/PostPage" element = {<PostPage/>}/>
        <Route exact path="/compunents/MainPage" element = {<MainPage/>}/>
      </Routes>
    </Router>
    </>
  );






    
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

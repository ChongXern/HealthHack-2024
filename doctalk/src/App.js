import './App.css';
import NavBar from './components/NavBar';
import logo from './media/draft_logo.png'

import MainPage from './components/MainPage';
import PostPage from './components/PostPage';
import LoginPage from './components/LoginPage';
import UploadPage from './components/UploadPage';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
}from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <MainPage />
    </div>
  );
};
/*
function App() {
  return (
    <>
    <div className='App'>
      <LoginPage />
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
}*/

export default App;

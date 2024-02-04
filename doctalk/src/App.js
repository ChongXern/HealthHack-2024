import './App.css';
import NavBar from './components/NavBar';
import logo from './media/draft_logo.png'

import MainPage from './components/MainPage';
import PostPage from './components/PostPage';
import LoginPage from './components/LoginPage';
import UploadPage from './components/UploadPage';
import SignupPage from './components/SignupPage';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
}from "react-router-dom";

/*
function App() {
  return (
    <div>
      <MainPage/>
    </div>
  )
}
*/

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element = {<LoginPage/>}/>
        <Route exact path="/components/UploadPage" element = {<UploadPage/>}/>
        <Route exact path="/components/MainPage" element = {<MainPage/>}/>
        <Route exact path="/components/SignupPage" element = {<SignupPage/>}/>
        <Route exact path="/components/PostPage" element = {<PostPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

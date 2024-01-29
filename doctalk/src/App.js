
import './App.css';

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
    <Router>
      <Routes>
        <Route exact path="/" element = {<LoginPage/>}/>
        <Route exact path = "/components/PostPage" element = {<PostPage/>}/>
        <Route exact path="/compunents/MainPage" element = {<MainPage/>}/>
      </Routes>
    </Router>
    </>
  );






}

export default App;

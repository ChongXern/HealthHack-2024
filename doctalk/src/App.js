import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import UploadPage from './components/UploadPage';

function App() {
  return (
    <div className='App'>
      <UploadPage />
    </div>
    //<h1> DocTalk! </h1>
  );
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

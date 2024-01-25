import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestPage from './components/TestPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Route path="/test" component={TestPage} /> {/* Add a route for TestPage */}
    <Route path="/app" component={App} /> {/* Add a route for App (if needed) */}
  </Router>,
  document.getElementById('root')
);

reportWebVitals();

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

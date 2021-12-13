import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import SplashPage from './Pages/SplashPage/SpashPage';
import BioPage from './Pages/BioPage/BioPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="about"></Route>
        <Route path="biography" element={<BioPage />}></Route>
        <Route path="home"></Route>
        <Route path="missionstatement"></Route>
        <Route path="*"></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
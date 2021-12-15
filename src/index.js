import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import SplashPage from './Pages/SplashPage/SpashPage';
import BioPage from './Pages/BioPage/BioPage';
import QuotesPage from './Pages/quotesPage/QuotesPage'
import AboutPage from './Pages/about/AboutPage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/DigitalHumanities101Final/home" element={<SplashPage />} />
        <Route path="/DigitalHumanities101Final/about" element={<AboutPage />}></Route>
        <Route path="/DigitalHumanities101Final/biography" element={<BioPage />} />
        <Route path="/DigitalHumanities101Final/home"></Route>
        <Route path="/DigitalHumanities101Final/missionstatement" />
        <Route path="/DigitalHumanities101Final/quotes" element={<QuotesPage />}></Route>
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
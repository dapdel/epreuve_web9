import React from 'react';
import ReactDOM from 'react-dom';
//import './index.scss';
import './styles/main.scss';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Footer from './components/Footer';
//import Popup from './components/Popup';

ReactDOM.render(
  <React.StrictMode>
  
    <Header/>
    <Page1/>
    <Page2/>
    <Footer/>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*  <Header/>
    <Page1/>
    <Page2/>
    <Footer/> 
      //<Popup/>*/

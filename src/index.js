import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SchoolStatus from './SchoolStatus';
import OnlineProfile from './OnlineProfile';
import Login from './Login';
import Join from './Join';
import CourseResister from './CourseResister';
import NumberRange from './NumberRange';
import DateMonth from './DateMonth';
import Anchor from './Anchor';
import ImageMap from './ImageMap';
import Color from './Color';

ReactDOM.render(
  <React.StrictMode>
    <Color />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

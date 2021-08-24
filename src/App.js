import React from 'react';
// import logo from './images/first.jpg';
// import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import SchoolStatus from './components/SchoolStatus';
import OnlineProfile from './components/OnlineProfile';
import Login from './components/Login';
import Join from './components/Join';
import CourseResister from './components/CourseResister';
import NumberRange from './components/NumberRange';
import DateMonth from './components/DateMonth';
import Anchor from './components/Anchor';
import ImageMap from './components/ImageMap';
import Color from './components/Color';
import Home from './components/Home'
import Navigation from './components/Navigation';


const App = () => (
    <>
    <Navigation/>
    <hr/>
    <Switch>
    <Route exact path='/' component = {Home}/>
    <Redirect from='/home' to = {'/'}/>
    <Route exact path='/login' component = {Login}/>
    <Route exact path='/join' component = {Join}/>
    <Route exact path='/course-resister' component = {CourseResister}/>
    <Route exact path='/number-range' component = {NumberRange}/>
    <Route exact path='/date-month' component = {DateMonth}/>
    <Route exact path='/anchor' component = {Anchor}/>
    <Route exact path='/imagemap' component = {ImageMap}/>
    <Route exact path='/color' component = {Color}/>
    <Route exact path='/online-profile' component = {OnlineProfile}/>
    <Route exact path='/school-status' component = {SchoolStatus}/>
    </Switch>
    </>
  );
export default App;




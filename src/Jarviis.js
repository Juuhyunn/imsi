import React from 'react';
// import logo from './images/first.jpg';
// import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import JarviisHome from './jarviis/JarviisHome'
import JarviisNavigation from './jarviis/JarviisNavigation';
import Login from './components/Login';
import Join from './components/Join';



const Jarviis = () => (
    <>
    <JarviisNavigation/>
    <hr/>
    <Switch>
    <Route exact path='/' component = {Login}/>
    <Redirect from='/login' to = {'/'}/>
    <Route exact path='/home' component = {JarviisHome}/>
    <Route exact path='/join' component = {Join}/>
    </Switch>
    </>
  );
export default Jarviis;




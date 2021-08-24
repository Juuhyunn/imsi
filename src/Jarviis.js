import React from 'react';
// import logo from './images/first.jpg';
// import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import JarviisHome from './components/JarviisHome'
import JarviisNavigation from './components/JarviisNavigation';
import Login from './components/Login';
import Join from './components/Join';



const Jarviis = () => (
    <>
    <JarviisNavigation/>
    <hr/>
    <Switch>
    <Route exact path='/' component = {JarviisHome}/>
    <Redirect from='/home' to = {'/'}/>
    <Route exact path='/login' component = {Login}/>
    <Route exact path='/join' component = {Join}/>
    </Switch>
    </>
  );
export default Jarviis;




import React from 'react';
// import logo from './images/first.jpg';
// import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import JarviisNavigation from './jarviis/JarviisNavigation';
import Login from './components/Login';
import Join from './components/Join';
import ToDoList from './jarviis/ToDoList';



const Jarviis = () => (
    <>
    <JarviisNavigation/>
    <hr/>
    <Switch>
    <Route exact path='/todolist' component = {ToDoList}/>
    <Route exact path='/' component = {Login}/>
    <Route exact path='/join' component = {Join}/>
    </Switch>
    </>
  );
export default Jarviis;




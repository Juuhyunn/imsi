import React from 'react';
// import logo from './images/first.jpg';
// import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import {Admin, Dairy, JarviisNavigation, MyPage, ToDoList} from 'jarviis/index';



const Jarviis = () => (
    <>
    <JarviisNavigation/>
    <MyPage/>
    <Switch>
    <Route exact path='/' component = {ToDoList}/>
    <Redirect from='/home' to = {'/'}/>
    <Route exact path='/todolist' component = {ToDoList}/>
    <Route exact path='/dairy' component = {Dairy}/>
    <Route exact path='/admin' component = {Admin}/>
    </Switch>
    </>
  );
export default Jarviis;





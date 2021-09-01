import React from 'react';
// import logo from './images/first.jpg';
// import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import {SchoolStatus, OnlineProfile, Login, Join, CourseResister, NumberRange, DateMonth, Anchor, ImageMap, Color, Navigation } from 'common/components/index';
import {HomePage} from 'common/pages/index'

import NavigationForJavaScript from './common/components/NavigationForJavaScript'
import Basic from './modern-javascript/chap-01-var-let-const/Basic'
import ArrowFuction from './modern-javascript/chap-02-arrow-function/ArrowFunction'
import Arguments from './modern-javascript/chap-03-arguments/Arguments'
import TemplateLiteral from './modern-javascript/chap-04-template-literal/TemplateLiteral'
import LiteralMethod from './modern-javascript/chap-05-literal-method/LiteralMethod'
import Distructuring from './modern-javascript/chap-06-distructuring/Distructuring'
import Loop from './modern-javascript/chap-07-loop/Loop'
import ArrayMethod from './modern-javascript/chap-08-array-method/ArrayMethod'
import SpreadOperatorRestParameter from './modern-javascript/chap-09-spread-operator-rest-parameter/SpreadOperatorRestParameter'
import ObjectLiteral from './modern-javascript/chap-10-object-literal/ObjectLiteral'
import Symbol from './modern-javascript/chap-11-symbol/Symbol'
import Class from './modern-javascript/chap-12-class/Class'
import Promise from './modern-javascript/chap-13-promise/Promise'
import Gernerator from './modern-javascript/chap-14-generator/Generator'
import Proxy from './modern-javascript/chap-15-proxy/Proxy'
import SetMap from './modern-javascript/chap-16-set-map/SetMap'
import Array from './modern-javascript/chap-17-array/Array'
import Es2017 from './modern-javascript/chap-18-es2017/Es2017'
import AsyncAwait from './modern-javascript/chap-19-async-await/AsyncAwait'
import Es2018 from './modern-javascript/chap-20-es2018/Es2018'
import Es2019 from './modern-javascript/chap-21-es2019/Es2019'
import Es2020 from './modern-javascript/chap-22-es2020/Es2020'
import TypeScript from './modern-javascript/chap-23-typescript/TypeScript'
// import HomePage from './pages/HomePage';


const App = () => (
    <>
    <Navigation/>
    <NavigationForJavaScript/>
    <hr/>
    <Switch>
    <Route exact path='/' component = {HomePage}/>
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

    <Route exact path="/01" component={Basic}></Route>
    <Route exact path="/02" component={ArrowFuction}></Route>
    <Route exact path="/03" component={Arguments}></Route>
    <Route exact path="/04" component={TemplateLiteral}></Route>
    <Route exact path="/05" component={LiteralMethod}></Route>
    <Route exact path="/06" component={Distructuring}></Route>
    <Route exact path="/07" component={Loop}></Route>
    <Route exact path="/08" component={ArrayMethod}></Route>
    <Route exact path="/09" component={SpreadOperatorRestParameter}></Route>
    <Route exact path="/10" component={ObjectLiteral}></Route>
    <Route exact path="/11" component={Symbol}></Route>
    <Route exact path="/12" component={Class}></Route>
    <Route exact path="/13" component={Promise}></Route>
    <Route exact path="/14" component={Gernerator}></Route>
    <Route exact path="/15" component={Proxy}></Route>
    <Route exact path="/16" component={SetMap}></Route>
    <Route exact path="/17" component={Array}></Route>
    <Route exact path="/18" component={Es2017}></Route>
    <Route exact path="/19" component={AsyncAwait}></Route>
    <Route exact path="/20" component={Es2018}></Route>
    <Route exact path="/21" component={Es2019}></Route>
    <Route exact path="/22" component={Es2020}></Route>
    <Route exact path="/23" component={TypeScript}></Route>

    </Switch>
    </>
  );
export default App;




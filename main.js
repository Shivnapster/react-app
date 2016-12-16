import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import App from './App.jsx';

import FooterComponent from './footer.react.jsx';
import LifeCycleComponent from './lifecycleExample.react.jsx';
import FormComponent from './forms.react.jsx';
import HeaderComponent from './header.react.jsx';
import MainComponent from './MainContent.react.jsx';

ReactDOM.render( <Router history = {browserHistory}>
                    <Route path = "/" component = {App}>
                       <IndexRoute  component = {HeaderComponent} ></IndexRoute>
                     
                       <Route path = "maincomponent" component = {MainComponent}></Route>
                       <Route path = "/formcomponent" component = {FormComponent} ></Route>
                       
                       <Route path = "/lifecyclecomponent" component = {LifeCycleComponent}></Route>
                       <Route path = "/FooterComponent" component = {FooterComponent}></Route>
                    </Route>
                 </Router>, document.getElementById('app'));


{
/*
//ReactDOM.render(<LifeCycleComponent />, document.getElementById('lifecycle_exp'));

//ReactDOM.render(<FormComponent />, document.getElementById('FormView'));

//ReactDOM.render(<HeaderCoponent />, document.getElementById('SetData'));

//ReactDOM.render(<MainComponent />, document.getElementById('SetData'));
*/
}
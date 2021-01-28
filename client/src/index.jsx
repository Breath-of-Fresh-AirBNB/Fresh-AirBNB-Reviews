/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter, Route, Router, Switch,
} from 'react-router-dom';
import App from './app.jsx';

ReactDom.render(

  <HashRouter>
    <Switch>
      <Route path="/homes/:id" component={App} />
    </Switch>
  </HashRouter>,

  document.getElementById('Randal'),
);

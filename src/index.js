import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Board from 'pages/Board';
import App from './App';
import NotFound from 'pages/NotFound';
import Header from 'pages/Header';
import LeftSide from 'pages/LeftSide';


ReactDOM.render(
  <div className={{flexGrow: 1}}>
    <Grid container spacing={3}>
      <Header/>
      <LeftSide/>
      <Router>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/boards" component={Board}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </Grid>
  </div>,
document.getElementById('root')
);

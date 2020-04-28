import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from './RootStore';
import Grid from '@material-ui/core/Grid';
import App from './App';
import NotFound from 'pages/NotFound';
import Header from 'pages/Header';
import User from 'pages/User';
import Board from 'pages/Board';

const root = new RootStore(); // *** 루트 스토어 생성

ReactDOM.render(
  <Provider {...root}>
    <div className={{flexGrow: 1}}>
      <Grid container>
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/users" component={User}/>
            <Route path="/boards" component={Board}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </Grid>
    </div>
  </Provider>,
document.getElementById('root')
);

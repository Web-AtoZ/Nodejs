import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from './RootStore';
import Grid from '@material-ui/core/Grid';
import Board from 'pages/Board';
import App from './App';
import NotFound from 'pages/NotFound';
import Header from 'pages/Header';
import LeftSide from 'pages/LeftSide';

const root = new RootStore(); // *** 루트 스토어 생성

ReactDOM.render(
  <Provider {...root}>
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
    </div>
  </Provider>,
document.getElementById('root')
);

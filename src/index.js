import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from './RootStore';
import App from './App';
import NotFound from 'pages/NotFound';
import User from 'pages/User';
import Board from 'pages/Board';
import Restaurant from 'pages/Restaurant/Index';
import LeftSide from 'pages/LeftSide';
import ListContainer from 'pages/List/ListContainer';
const root = new RootStore(); // *** 루트 스토어 생성

ReactDOM.render(
	<Provider {...root}>
		<div className={{ flexGrow: 1 }}>
			<Router>
				<Switch>
					<Route path='/users' component={User} />
					<Route exact path='/list' component={ListContainer} />
					<Route path='/boards' component={Board} />
					<Route path='/restaurant' component={Restaurant} />
					<Route path='/practice' component={LeftSide} />
					<Route path='/' component={App} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	</Provider>,
	document.getElementById('root')
);

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import Main from 'pages/Main';
import Header from 'pages/Header';
import SearchContainer from 'pages/Search/SearchContainer';
import ListContainer from 'pages/List/ListContainer';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Main} />
				<Route exact path='/search' component={SearchContainer} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}

export default App;

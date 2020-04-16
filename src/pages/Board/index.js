import React from 'react';
import {Route,Switch} from 'react-router-dom';
import BoardContainer from './BoardContainer';
import BoardDetailContainer from './BoardDetailContainer';
import BoardFormTemplate from './templates/BoardFormTemplate';

const Board = ({match}) => {
  return(
    <>
      <Route exact path={match.path} component={BoardContainer}/>
      <Switch>
        <Route path={`${match.path}/form`} component={BoardFormTemplate}/>
        <Route path={`${match.path}/:id`} component={BoardDetailContainer}/>
      </Switch>
    </>
  );
}

export default Board;
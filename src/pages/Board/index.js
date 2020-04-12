import React from 'react';
import {Route} from 'react-router-dom';
import BoardContainer from './BoardContainer';
import BoardDetailTemplate from './templates/BoardDetailTemplate';

const Board = ({match}) => {
  return(
    <>
      <Route exact path={match.path} component={BoardContainer}/>
      <Route exact path={`${match.path}/:id`} component={BoardDetailTemplate}/>
    </>
  );
}

export default Board;
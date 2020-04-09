import React from 'react';
import {Route} from 'react-router-dom';
import BoardTemplate from './templates/BoardTemplate';
import BoardDetailTemplate from './templates/BoardDetailTemplate';

const Board = ({match}) => {
  return(
    <>
      <Route exact path={match.path} component={BoardTemplate}/>
      <Route exact path={`${match.path}/:id`} component={BoardDetailTemplate}/>
    </>
  );
}

export default Board;
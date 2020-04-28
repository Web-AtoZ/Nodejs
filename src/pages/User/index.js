import React from 'react';
import {Route,Switch} from 'react-router-dom';
import UserLoginTemplate from './templates/UserLoginTemplate';
import UserJoinTemplate from './templates/UserJoinTemplate';

const User = ({match}) => {
  return(
    <>
      <Switch>
        <Route path={`${match.path}/login`} component={UserLoginTemplate}/>
        <Route path={`${match.path}/join`} component={UserJoinTemplate}/>
        {/* <Route path={`${match.path}/:id`} component={BoardDetailContainer}/> */}
      </Switch>
    </>
  );
}

export default User;
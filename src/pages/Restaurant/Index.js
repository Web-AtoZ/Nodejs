import React from 'react';
import {Route,Switch} from 'react-router-dom';
import RestaurantListTemplate from './templates/RestaurantListTemplate';
import RestaurantContainer from './RestaurantContainer';
import LeftSide from "../LeftSide";


const Restaurant = ({match}) => {
    return(
        <>
          <LeftSide/>
            <Route path={`${match.path}`} component={RestaurantContainer}/>
            {/*<Switch>*/}

                {/* <Route path={`${match.path}/:id`} component={BoardDetailContainer}/> */}
            {/*</Switch>*/}
        </>
    );
}

export default Restaurant;
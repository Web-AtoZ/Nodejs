import React from 'react'
import Grid from '@material-ui/core/Grid';
import {observer} from 'mobx-react';
import RestaurantList from '../../../common/components/organisms/Restaurant/RestaurantList'

export default observer(function RestaurantListTemplate({restaurantList}) {
    console.log("아아")
    console.log(restaurantList);
    return (
        <Grid
            item={true}
            xs={10}>
            <h1>Restaurant</h1>
            <RestaurantList data={restaurantList} />
        </Grid>
    )
});
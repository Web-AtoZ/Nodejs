import React from 'react'
import Grid from '@material-ui/core/Grid';
import RestaurantList from '../../../common/components/organisms/Restaurant/RestaurantList'
import restaurant from '../restaurant.json'


const Flats = () => (
    <Grid xs={10}>
        <h1>Restaurant</h1>
        <RestaurantList data={restaurant} />
    </Grid>
)

export default Flats
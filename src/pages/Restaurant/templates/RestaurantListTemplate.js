import React from 'react'
import Grid from '@material-ui/core/Grid';
import FlatsList from '../../../common/components/organisms/Restaurant/FlatList'
import restaurant from '../restaurant.json'

const Flats = () => (
    <Grid xs={10}>
        <h1>Flats</h1>
        <FlatsList data={restaurant} />
    </Grid>
)

export default Flats
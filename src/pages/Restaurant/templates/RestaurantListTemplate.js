import React from 'react'
import Grid from '@material-ui/core/Grid';
import {observer} from 'mobx-react';
import RestaurantList from '../../../common/components/organisms/Restaurant/RestaurantList'
import Button from "../../../common/components/atoms/Button/Button";

export default observer(function RestaurantListTemplate({restaurantList, loadMore}) {
    return (
        <>
            <Grid
                item={true}
                xs={10}>
                <h1>Restaurant</h1>
                <RestaurantList data={restaurantList} />
                <div>
                    <Button loadMore={loadMore}>더보기</Button>
                </div>
            </Grid>
            {/*<Grid item xs={5}>*/}
            {/*    <div className={"map"}>지도넣을거임</div>*/}
            {/*</Grid>*/}
        </>
    )
});
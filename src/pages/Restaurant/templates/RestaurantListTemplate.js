import React from 'react'
import Grid from '@material-ui/core/Grid';
import {observer} from 'mobx-react';
import RestaurantList
  from '../../../common/components/organisms/Restaurant/RestaurantList';
import Button from "../../../common/components/atoms/Button";
import MapView from "../../../common/components/organisms/Maps/MapView";

export default observer(
    function RestaurantListTemplate({restaurantList, loadMore}) {

      return (
          <>
            <Grid item xs={5}>
              <MapView></MapView>
            </Grid>
            <Grid
                item={true}
                xs={5}>
              <h1>Restaurant</h1>
              <RestaurantList data={restaurantList}/>
              <div>
                <Button onClick={loadMore}>더보기</Button>
              </div>
            </Grid>
          </>
      )
    });
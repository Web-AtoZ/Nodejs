import React from 'react'
import Grid from '@material-ui/core/Grid';
import {observer} from 'mobx-react';
import RestaurantList
  from '../../../common/components/organisms/Restaurant/RestaurantList';
import Button from "../../../common/components/atoms/Button";
import MapView from "../../../common/components/organisms/Maps/MapView";
import CLIENT_ID from "../../../Config/NaverMapsClientId";
import {RenderAfterNavermapsLoaded} from "react-naver-maps";


export default observer(
    function RestaurantListTemplate({restaurantList, loadMore}) {

      return (
          <>
            <Grid item xs={5}>
              <RenderAfterNavermapsLoaded
                  ncpClientId={CLIENT_ID.NAVER_MAPS_CLIENT_ID}
                  error={<p>Maps Load Error</p>}
                  loading={<p>Maps Loading...</p>}
                  submodules={["geocoder"]}
              >
              <MapView data={restaurantList}/>
              </RenderAfterNavermapsLoaded>
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
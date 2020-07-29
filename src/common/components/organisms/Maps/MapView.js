import React from "react";

import {
  NaverMap,
  Marker, RenderAfterNavermapsLoaded,
} from 'react-naver-maps'
import {withNavermaps} from "react-naver-maps/dist/hocs.esm";
import CLIENT_ID from "../../../../Config/NaverMapsClientId";


const MapView = ({data}) => {
  const map = withNavermaps('maps-getting-started-uncontrolled');
  const navermap =  window.naver.maps;

  return (
      <>
        <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
              width: '100%',
              height: '400px',
            }}
            defaultCenter={navermap.TransCoord.fromTM128ToLatLng(navermap.Point(data[0].mapx,data[0].mapy))}
            defaultZoom={15}
        >
          {data.map(restaurant => (
              <Marker key={restaurant.restaurant_id}
                      position={navermap.TransCoord.fromTM128ToLatLng(navermap.Point(restaurant.mapx, restaurant.mapy))}
                      animation={2}
                      onClick={() => {
                        alert(restaurant.name);
                      }}
                      moustUp={() => {
                        console.log(restaurant.name)
                      }}
              />))}
        </NaverMap>
      </>
  );
}

export default MapView;
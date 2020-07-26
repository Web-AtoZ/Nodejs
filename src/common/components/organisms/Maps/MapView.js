import {useHistory} from "react-router-dom";
import MaterialButton from "../../atoms/Button/MaterialButton";
import React from "react";

import {RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps'
import CLIENT_ID from "../../../../Config/NaverMapsClientId";

const MapView = ({latLngObjList}) => {

  return (
      <>
        <RenderAfterNavermapsLoaded
            ncpClientId={CLIENT_ID.NAVER_MAPS_CLIENT_ID}
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
        >
          <NaverMap
              mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
              style={{
                width: '100%',
                height: '400px',
              }}
              defaultCenter={{lat: 37.3595704, lng: 127.105399}}
              defaultZoom={10}
          >
            <Marker
                key={1}
                position={{lat: 37.3595704, lng: 127.105399}}
                animation={2}
                onClick={() => {alert('여기는 N서울타워입니다.');}}
            />
          </NaverMap>
        </RenderAfterNavermapsLoaded>
      </>
  );
}

export default MapView;
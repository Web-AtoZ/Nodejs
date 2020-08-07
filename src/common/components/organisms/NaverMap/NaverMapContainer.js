import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
import { NAVER_MAPS_CLIENT_ID, SPRING_BACKEND_API } from 'Config/URL';

const NaverMapContainer = ({ style, defaultCenter, defaultZoom }) => {
	console.log(SPRING_BACKEND_API, NAVER_MAPS_CLIENT_ID);
	return (
		<RenderAfterNavermapsLoaded
			ncpClientId={NAVER_MAPS_CLIENT_ID} // 자신의 네이버 계정에서 발급받은 Client ID
			error={<p>Maps Load Error</p>}
			loading={<p>Maps Loading...</p>}>
			<NaverMap
				mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
				style={{
					width: '100%', // 네이버지도 가로 길이
					height: '85vh', // 네이버지도 세로 길이
				}}
				defaultCenter={{ lat: 37.4931456, lng: 126.9202944 }} // 지도 초기 위치
				defaultZoom={13} // 지도 초기 확대 배율
			/>
		</RenderAfterNavermapsLoaded>
	);
};

export default NaverMapContainer;

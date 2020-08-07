import React from 'react';
import { Button } from 'antd';
import useStores from 'useStores';
import { observer } from 'mobx-react';

const MyPlaceButton = observer(() => {
	const {
		naverApiStore: { getMyPlace },
	} = useStores();
	const { navigator } = window;

	const getLocation = () => {
		if (navigator.geolocation) {
			// GPS를 지원하면
			navigator.geolocation.getCurrentPosition(
				function (position) {
					const queryParam = { query: `${position.coords.latitude},${position.coords.longitude}` };
					getMyPlace(queryParam);
				},
				function (error) {
					console.error(error);
				},
				{
					enableHighAccuracy: false,
					maximumAge: 0,
					timeout: Infinity,
				}
			);
		} else {
			alert('GPS를 지원하지 않습니다');
		}
	};

	return (
		<Button style={{ background: 'black', color: 'white', fontWeight: 800, fontSize: '0.75rem', height: 40 }} onClick={getLocation}>
			현재 위치정보 켜기
		</Button>
	);
});

export default MyPlaceButton;

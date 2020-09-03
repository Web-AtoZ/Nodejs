import React from 'react';
import { Button } from 'antd';
import useStores from 'useStores';
import { observer } from 'mobx-react';

const MyPlaceButton = observer(({ size, icon, children }) => {
	const {
		naverApiStore: { getMyPlace },
	} = useStores();
	const { navigator } = window;

	const getLocation = () => {
		if (navigator.geolocation) {
			// GPS를 지원하면
			navigator.geolocation.getCurrentPosition(
				function (position) {
					const queryParam = { coords: `${position.coords.longitude},${position.coords.latitude}` };
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

	return size === 'min' ? (
		<Button style={{ background: 'gray', color: 'white', fontSize: '0.6rem', height: 20, padding: '0 3px' }} onClick={getLocation}>
			<span>{icon}</span>
			<span style={{ padding: 0, marginLeft: '3px' }}>{children}</span>
		</Button>
	) : (
		<Button style={{ background: 'black', color: 'white', fontWeight: 800, fontSize: '0.75rem', height: 40 }} onClick={getLocation}>
			{icon}
			{children}
		</Button>
	);
});

export default MyPlaceButton;

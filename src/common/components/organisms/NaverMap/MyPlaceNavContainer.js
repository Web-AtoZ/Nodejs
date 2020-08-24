import React from 'react';
import MyPlaceButton from './MyPlaceButton';
import { observer } from 'mobx-react';
import useStores from 'useStores';
import { EnvironmentOutlined, SyncOutlined } from '@ant-design/icons';

const MyPlaceNavContainer = observer(() => {
	const {
		naverApiStore: { myPlace },
	} = useStores();
	const region = myPlace['region'];
	return (
		<div>
			{region ? (
				<>
					<span>현위치 : </span>
					<span style={{ padding: '0 5px' }}>
						{region['area2'].name} {region['area3'].name}
					</span>
					<MyPlaceButton size='min' icon={<SyncOutlined />}>
						업데이트
					</MyPlaceButton>
				</>
			) : (
				<>
					<span style={{ padding: '0 5px' }}>위치정보 꺼짐</span>
					<MyPlaceButton size='min' icon={<EnvironmentOutlined />}>
						켜기
					</MyPlaceButton>
				</>
			)}
		</div>
	);
});

export default MyPlaceNavContainer;

import React from 'react';
import { Card } from 'antd';
import MyPlaceButton from './MyPlaceButton';
import { observer } from 'mobx-react';
import useStores from 'useStores';
import RecommendContainer from '../Recommend/RecommendContainer';

const MyPlaceCardContainer = observer(() => {
	const {
		naverApiStore: { myPlace },
	} = useStores();

	console.log(myPlace['region']);
	return myPlace['region'] ? (
		<RecommendContainer />
	) : (
		<Card style={styleMyPlaceCard}>
			<div>
				<div>
					<span>사용자의 위치정보를 찾을 수 없습니다.</span>
				</div>
				<div>
					<span> 위치정보를 설정하시면 내주변의 맛집을 검색할 수 있습니다.</span>
				</div>
				<MyPlaceButton>현재 위치정보 켜기</MyPlaceButton>
			</div>
		</Card>
	);
});

export default MyPlaceCardContainer;

const styleMyPlaceCard = {
	width: 850,
	margin: 0,
	padding: 0,
	textAlign: 'center',
};

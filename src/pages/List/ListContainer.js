import React from 'react';
import { Layout, List, Card, Button } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { DownCircleFilled, HeartOutlined, EditOutlined, RightCircleFilled } from '@ant-design/icons';
import Header from 'pages/Header';
import NaverMapContainer from 'common/components/organisms/NaverMap/NaverMapContainer';

const { Content, Sider } = Layout;

const data = [
	{
		title: '삼촌네',
		category: '백순대, 순대',
		address: '서울특별시 관악구 신림동 1640-31 민속순대타운306호',
		location: '신림',
		like: 128,
		review: 17,
		score: 65,
	},
	{
		title: '온정돈까스',
		category: '매운돈까스, 돈까스',
		address: '서울특별시 관악구 신림동 546-1',
		location: '신대방',
		like: 34,
		review: 13,
		score: 59,
	},
	{
		title: '아리차이',
		category: '딤섬, 중국집',
		address: '서울특별시 관악구 신림동 1430-11',
		location: '신림',
		like: 85,
		review: 8,
		score: 58,
	},
	{
		title: '신림집',
		category: '냉동삼겹살, 삼겹살',
		address: '서울특별시 관악구 신림동 1639-30',
		location: '신림동',
		like: 0,
		review: 0,
		score: 12,
	},
];

const ListContainer = () => {
	const { search } = useLocation();
	const history = useHistory();

	const searchParam = queryString.parse(search);

	const searchResult = searchParam['query'];

	const onMoveMore = () => {
		history.push(`/list${search}`);
	};

	const handleClick = (value) => {
		console.log(value);
	};

	return (
		<Layout>
			<Header />
			<Card style={{ width: 450, margin: 0, padding: 0 }}>
				<div style={{ fontWeight: 600, fontSize: '1.5rem' }}>
					<span style={{ color: '#2483ff' }}>{`'${searchResult}'`}</span>
					<span>추천 카테고리</span>
				</div>
			</Card>
			<div style={styleDiv}>
				<Card
					title={
						<div>
							<div style={{ fontWeight: 600, fontSize: '1.3rem' }}>
								<span style={{ color: '#2483ff' }}>{`'${searchResult}'`}</span>
								<span>상위 랭킹 맛집</span>
							</div>
							<div>
								<span style={{ color: 'gray', fontSize: '0.8rem' }}>1198곳의 맛집</span>
							</div>
						</div>
					}
					style={{ width: 450 }}
					actions={[
						<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<div style={{ paddingRight: 20, fontSize: '0.8rem', fontWeight: 600 }} onClick={onMoveMore}>
								<span>더보기</span> <RightCircleFilled />
							</div>
						</div>,
					]}>
					<List
						dataSource={data}
						renderItem={(item, index) => (
							<List.Item key={item.id}>
								<div style={{ display: 'flex' }}>
									<div style={{ width: 90, height: 90, background: 'yellow' }}>그림</div>
									<div style={{ paddingLeft: 15, width: 300 }}>
										<div style={{ display: 'flex', justifyContent: 'space-between' }}>
											<div style={{ fontWeight: 600, fontSize: '1.1rem' }}>
												{index + 1}. {item.title}
											</div>
											<div>{item.location}</div>
										</div>
										<div style={{ fontSize: '0.8rem', paddingBottom: 5 }}>{item.category}</div>
										<div>{item.address}</div>
										<div style={{ display: 'flex', justifyContent: 'space-between' }}>
											<div style={{ display: 'flex' }}>
												<div style={{ paddingLeft: 5 }}>
													<HeartOutlined />
													<span style={{ padding: '0 5px 0 3px' }}>{item.like}</span>
												</div>
												<div style={{ paddingLeft: 10 }}>
													<EditOutlined />
													<span style={{ padding: '0 5px 0 3px' }}>{item.review}</span>
												</div>
											</div>
											<div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{item.score}점</div>
										</div>
									</div>
								</div>
							</List.Item>
						)}></List>
				</Card>
				<Content style={{ margin: '0 0 0 15px' }}>
					<NaverMapContainer />
				</Content>
			</div>
		</Layout>
	);
};

export default ListContainer;

const styleDiv = {
	display: 'flex',
};

const styleMenuOption = {
	padding: '8px 0 8px 0',
	fontSize: '0.7rem',
};

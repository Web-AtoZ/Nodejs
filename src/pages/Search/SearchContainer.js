import React from 'react';
import { Layout, List, Card, Button } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { DownCircleFilled, HeartOutlined, EditOutlined, RightCircleFilled } from '@ant-design/icons';
const { Content, Sider } = Layout;

const data = [
	{
		title: '삼촌네',
		link: 'https://placeimg.com/90/90/tech',
		category: '백순대, 순대',
		address: '서울특별시 관악구 신림동 1640-31 민속순대타운306호',
		location: '신림',
		like: 128,
		review: 17,
		score: 65,
	},
	{
		title: '온정돈까스',
		link: 'https://placeimg.com/90/90/nature',
		category: '매운돈까스, 돈까스',
		address: '서울특별시 관악구 신림동 546-1',
		location: '신대방',
		like: 34,
		review: 13,
		score: 59,
	},
	{
		title: '아리차이',
		link: 'https://placeimg.com/90/90/arch',
		category: '딤섬, 중국집',
		address: '서울특별시 관악구 신림동 1430-11',
		location: '신림',
		like: 85,
		review: 8,
		score: 58,
	},
	{
		title: '신림집',
		link: 'https://placeimg.com/90/90/animals',
		category: '냉동삼겹살, 삼겹살',
		address: '서울특별시 관악구 신림동 1639-30',
		location: '신림동',
		like: 0,
		review: 0,
		score: 12,
	},
];

const SearchContainer = () => {
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
		<Layout style={styleLayout}>
			<div style={styleDiv}>
				<Card
					title={
						<div>
							<div>{`'${searchResult}'`}</div>
							<div>추천 카테고리</div>
						</div>
					}
					style={{ width: 200, height: 540 }}
					actions={[
						<div>
							<span>더보기</span> <DownCircleFilled />
						</div>,
					]}>
					<div style={styleMenuOption}>전체보기</div>
					<div style={styleMenuOption}>배달</div>
					<div style={styleMenuOption}>백종원의3대천왕</div>
					<div style={styleMenuOption}>TV맛집</div>
					<div style={styleMenuOption}>한식</div>
					<div style={styleMenuOption}>중식</div>
					<div style={styleMenuOption}>일식</div>
					<div style={styleMenuOption}>카페</div>
					<div style={styleMenuOption}>술집</div>
					<div style={styleMenuOption}>고기집</div>
				</Card>
				<Content style={{ margin: '0 0 0 15px' }}>
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
						style={{ width: 640 }}
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
										<div style={{ width: 90, height: 90 }}>
											<img src={item.link} />
										</div>
										<div style={{ paddingLeft: 15, width: 500 }}>
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
					<Card
						title={
							<div>
								<div style={{ fontWeight: 600, fontSize: '1.3rem' }}>
									<span style={{ color: '#2483ff' }}>{`'${searchResult}'`}</span>
									<span>(와)과 유사한 가게이름</span>
								</div>
								<div>
									<span style={{ color: 'gray', fontSize: '0.8rem' }}>15곳의 맛집</span>
								</div>
							</div>
						}
						style={{ width: 640, marginTop: 15 }}
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
										<div style={{ width: 90, height: 90 }}>
											<img src={item.link} />
										</div>
										<div style={{ paddingLeft: 15, width: 500 }}>
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
					<Card style={{ width: 640, margin: '15px 0 50px 0' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div>
								<div style={{ fontWeight: 800, fontSize: '0.75rem' }}>찾는 식당이 없다면 등록을 요청하세요.</div>
								<div style={{ fontSize: '0.75rem' }}>통상 당일 등록이 이뤄지며, 등록 즉시 푸시 알림을 드립니다.</div>
							</div>
							<div>
								<Button style={{ background: 'black', color: 'white', fontWeight: 800, fontSize: '0.75rem', height: 40 }}>맛집 등록 요청하기</Button>
							</div>
						</div>
					</Card>
				</Content>
			</div>
		</Layout>
	);
};

export default SearchContainer;

const styleLayout = {
	padding: '0 25%',
};

const styleDiv = {
	display: 'flex',
	margin: '40px 0 0 0',
};

const styleMenuOption = {
	padding: '8px 0 8px 0',
	fontSize: '0.7rem',
};

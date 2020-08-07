import React from 'react';
import { Layout, Card } from 'antd';
import Footer from './Footer';
import Header from './Header';
import MenuBar from './MenuBar';
import MyPlaceButton from 'common/components/organisms/NaverMap/MyPlaceButton';

const { Content } = Layout;

const Main = () => {
	return (
		<Layout className='layout'>
			<MenuBar style={styleMenuBar} />
			<Content style={styleMenuBar}>
				<Card style={{ width: 850, margin: 0, padding: 0, textAlign: 'center' }}>
					<div>
						<div>
							<span>사용자의 위치정보를 찾을 수 없습니다.</span>
						</div>
						<div>
							<span> 위치정보를 설정하시면 내주변의 맛집을 검색할 수 있습니다.</span>
						</div>
						<MyPlaceButton />
					</div>
				</Card>
			</Content>
			<Footer />
		</Layout>
	);
};

export default Main;

const styleMenuBar = {
	padding: '0 25%',
};

import React from 'react';
import { Layout } from 'antd';
import Footer from './Footer';
import MenuBar from './MenuBar';
import MyPlaceCardContainer from 'common/components/organisms/NaverMap/MyPlaceCardContainer';

const { Content } = Layout;

const Main = () => {
	return (
		<Layout className='layout' style={styleMain}>
			<MenuBar style={styleMenuBar} />
			<Content>
				<MyPlaceCardContainer />
			</Content>
			<Footer />
		</Layout>
	);
};

export default Main;

const styleMain = {
	padding: '0 25%',
};

const styleMenuBar = {
	display: 'flex',
	justifyContent: 'space-between',
	height: '45px',
};

import React from 'react';
import { Layout } from 'antd';
import Footer from './Footer';
import Header from './Header';
import MenuBar from './MenuBar';

const { Content } = Layout;

const Main = () => {
	return (
		<Layout className='layout'>
			<MenuBar style={styleMenuBar} />
			<Content style={{ padding: '0 50px' }}>
				<div className='site-layout-content'>Content</div>
			</Content>
			<Footer />
		</Layout>
	);
};

export default Main;

const styleMenuBar = {
	padding: '0 25%',
};

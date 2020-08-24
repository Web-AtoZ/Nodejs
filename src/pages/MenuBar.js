import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import MyPlaceNavContainer from 'common/components/organisms/NaverMap/MyPlaceNavContainer';

const { SubMenu } = Menu;

const MenuBar = ({ style }) => {
	const [current, setCurrent] = useState('mail');
	const handleClick = (e) => {
		console.log('click ', e);
		setCurrent(e.key);
	};

	return (
		<div style={style}>
			<div>게시판</div>
			<MyPlaceNavContainer />
		</div>
	);
};

export default MenuBar;

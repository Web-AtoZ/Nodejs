import React from 'react';
import { Layout } from 'antd';

import SearchBox from 'common/components/organisms/Search/SearchBox';
const { Header: AntdHeader } = Layout;

const Header = () => {
	return (
		<AntdHeader style={styleHeader}>
			<div className='logo' style={{ width: 200 }}>
				로고
			</div>
			<div style={{ width: 570 }}>
				<SearchBox style={styleSearchBox} placeholder='음식명으로 주변 맛집을 찾아보세요' />
			</div>
			<div style={{ width: 90, fontSize: '8pt' }}>
				<span>로그인 | 회원가입</span>
			</div>
		</AntdHeader>
	);
};

export default Header;

const styleHeader = {
	background: 'white',
	padding: '0 25%',
	display: 'flex',
};

const styleSearchBox = {
	margin: '10px 15px 0 15px',
	width: 480,
	height: 45,
	lineHeight: 20,
};

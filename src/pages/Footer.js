import React from 'react';
import { Layout } from 'antd';

const { Footer: AntdFooter } = Layout;

const Footer = () => {
	return <AntdFooter style={styleFooter}>Cafe24 Study ©2020 Created by Web A to Z</AntdFooter>;
};

export default Footer;

const styleFooter = {
	textAlign: 'center',
};

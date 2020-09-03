import React from 'react';
import { Card } from 'antd';
import { RightCircleFilled } from '@ant-design/icons';

const RecommendContainer = () => {
	return (
		<Card
			title={
				<div>
					<div style={{ fontWeight: 600, fontSize: '1.3rem' }}>
						<span>내주변 테라스 추천</span>
					</div>
				</div>
			}
			style={{ width: 450 }}
			actions={[
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<div style={{ paddingRight: 20, fontSize: '0.8rem', fontWeight: 600 }}>
						<span>더보기</span> <RightCircleFilled />
					</div>
				</div>,
			]}
		/>
	);
};

export default RecommendContainer;

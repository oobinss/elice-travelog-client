import React from 'react';
import styled from 'styled-components';

import WritingSidebar from './WritingSidebar';

const WritingSection = styled.section`
	width: 100%;
	height: 95vh;
	display: flex;
`;
const WritingContainer = styled.div`
  width 70rem;
  height:100%;
  display:flex;
`;

const WritingHeader = styled.h1`
	font-size: 1.6rem;
`;

const Writing = () => {
	return (
		<WritingSection>
			<WritingSidebar />
			<WritingContainer>
				<WritingHeader></WritingHeader>
			</WritingContainer>
		</WritingSection>
	);
};

export default Writing;

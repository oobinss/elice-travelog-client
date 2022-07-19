import React, { useRef } from 'react';
import styled from 'styled-components';
import WritingSidebar from './WritingSidebar';
// Toast 에디터
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
//Toast ColorSyntax 플러그인
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

const WritingSection = styled.section`
	width: 100vw;
	height: 95vh;
	gap: 2rem;
`;
const WritingContainer = styled.div`
	width: 70vw;
	margin-left: 35rem;
	padding-top: 3rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.toastui-editor-defaultUI {
		height: 60rem !important;
		border: 1px solid #f1f1f1 !important;
		padding: 5px !important;
		border-radius: 2px !important;
	}
	.toastui-editor-defaultUI-toolbar {
		background-color: #edf7fa;
	}
`;

const WritingHeader = styled.h1`
	font-size: 2rem;
`;
const BtnBox = styled.div`
	display: flex;
	gap: 1rem;
`;
const WritingHeaderBox = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Button = styled.button`
	display: block;
	width: 6rem;
	height: 3.2rem;
	font-size: 1rem;
	text-align: center;
	line-height: 3.2rem;
	background-color: #5f6caf;
	color: #fff;
	border: none;
	border-radius: 22px;
	cursor: pointer;
`;

function Writing() {
	// Editor DOM 선택용
	const editorRef = useRef();

	// 등록 버튼 핸들러
	const handleButton = () => {
		// 입력창에 입력한 내용을 HTML 태그 형태로 취득
		console.log(editorRef.current?.getInstance().getHTML());
		// 입력창에 입력한 내용을 MarkDown 형태로 취득
		console.log(editorRef.current?.getInstance().getMarkdown());
	};
	return (
		<WritingSection>
			<WritingSidebar />
			<WritingContainer>
				<WritingHeaderBox>
					<WritingHeader>부산여행</WritingHeader>
					<BtnBox>
						<Button onClick={handleButton}>임시저장</Button>
						<Button onClick={handleButton}>발행</Button>
					</BtnBox>
				</WritingHeaderBox>
				<Editor
					ref={editorRef}
					initialValue="여기에 글을 추가하세요!"
					previewStyle="vertical"
					initialEditType="wysiwyg"
					plugins={[colorSyntax]}
				/>
			</WritingContainer>
		</WritingSection>
	);
}

export default Writing;

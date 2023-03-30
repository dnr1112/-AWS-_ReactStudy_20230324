/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style';
import ProjectListButton from './ProjectListButton/ProjectListButton.js';
import { BiPen } from 'react-icons/bi';
import { TiTrash } from 'react-icons/ti';

// const convertDay = (day) => {
//     return day == 0 ? "일" 
//         : day == 1 ? "월"
//         : day == 2 ? "화"
//         : day == 3 ? "수"
//         : day == 4 ? "목"
//         : day == 5 ? "금" : "토";
// }

// const todoObj = {
//     todoDate: `${nowDate.getFullYear()}.${nowDate.getMonth() + 1}.${nowDate.getDate()}(${convertDay(nowDate.getDay())})`,
//     todoDateTime: `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`,
//     todoContent: todoInput.value
// }


const ProjectList = ({ project, openModal, onRemove }) => {
    return (
            <ul>
                <li css={S.ProjectList} key={project.id}>
                    <header css={S.ProjectHeader}>날짜</header>
                    <main css={S.ProjectMain}>{project.content}</main>
                    <footer css={S.ProjectFooter}>
                        <ProjectListButton onClick={() => openModal(project.id)}><BiPen /></ProjectListButton>
                        <ProjectListButton onClick={() => onRemove(project.id)}><TiTrash /></ProjectListButton>
                    </footer>
                </li>
            </ul>
    );
};

export default ProjectList;
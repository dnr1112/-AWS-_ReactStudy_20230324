/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from 'react';
import { useState } from "react";
import { useRef } from "react";
import PromptModal from "../../components/Project/Modal/PromptModal/PromptModal";
import ProjectList from "../../components/Project/ProjectList/ProjectList";
import AddProject from "../../components/Project/AddProject/AddProject";

const ProjectContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 550px;
    margin: 100px auto;
`;

export const ProjectPage = css`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0px 20px 20px;
    margin: 0px 0px 20px 0px;
    width: 95%;
    height: 88%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        color: rgb(255, 80, 60);
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(255, 80, 60, 0.3);
        border-radius: 5px;
    }
`;


const Project = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [modifyProject, setModifyProject] = useState({
        id: 0,
        content: ''
    });

    const [input, setInput] = useState({
        id: 0,
        content: ''
    });
    const [projectList, setProjectList] = useState([]);
    const projectId = useRef(1);

    const onChange = (e) => {
        setInput({
            ...input,
            content: e.target.value
        });
    }

    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
            onAdd();
        }
    }

    const onAdd = () => {
        const project = {
            ...input,
            id: projectId.current++
        }
        setProjectList([...projectList, project]);
        setInput({
            ...input, 
            content: ''
        });
    }

    const onRemove = (id) => {
        setProjectList(projectList.filter(
            project => {
                return project.id !== id;
            }
        ))
    }

    const updateProject = (modifyProject) => {
        setProjectList(
            projectList.map(
                project => {
                    if(project.id === modifyProject.id) {
                        project.content = modifyProject.content;
                    }
                    return project;
                }
            )
        )
    }

    const openModal = (id) => {
        setModifyProject(projectList.filter(
            project => project.id === id
        )[0]);

        setIsOpen(true);
    }

    return (
        <>
            <div css={ProjectContainer}>
                <AddProject onChange={onChange} onKeyUp={onKeyUp} value={input.content} onAdd={onAdd}/>
                <div css={ProjectPage}>
                    {projectList.map(
                        project => {
                            return (
                                <ProjectList project={project} openModal={openModal} onRemove={onRemove}/>
                            );
                        }
                    )}
                </div>
            </div>
            {isOpen ? (<PromptModal title={'Edit Project'} project={modifyProject} setIsOpen={setIsOpen} updateProject={updateProject} />) : ''}
            
        </>
    );
};

export default Project;
import { css } from "@emotion/react";

export const ProjectList = css`
    margin: 10px ;
    width: 230px;
    height: 230px;
    box-shadow: 0px 0px 5px 1px #dbdbdb;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover{
        box-shadow: 0px 0px 10px 1px #121212;
    }
`;

export const ProjectHeader = css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px;
    padding-bottom: 5px;
    height: 15%;
`;

export const ProjectMain = css`
    padding: 10px;
    height: 50%;
    word-break: keep-all;
    line-height: 25px;
`;

export const ProjectFooter = css`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    padding-top: 0;
    height: 20%;
`;


export const ProjectContent = css`
    width: 85%;
    height: 40px;
`;

export const ItemGroup = css`
    display: flex;
    align-items: center;
    height: 40px;
`;

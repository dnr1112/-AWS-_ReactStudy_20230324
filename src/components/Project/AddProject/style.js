import { css } from "@emotion/react";

export const MainHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = css`
    align-items: baseline;
`;

export const Title = css`
    margin: 0px 20px 0px 10px;
`;

export const Header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 30px 0px 0px;
    font-size: 36px;
    font-weight: 600;
`;

export const ProjectAddition = css`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-bottom: 3px;
    
    padding-right: 50px;
    width: 70%;
    height: 40px;
`;

export const Icon2 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
`;

export const AdditionInput = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    padding: 0px 50px 0px 10px;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    background-color: white;
`;

export const ProjectAddButton = css`
    position: absolute;
    
    
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
    background-color: #ffffff00;
    transition: all 1s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.5);
    }
`;
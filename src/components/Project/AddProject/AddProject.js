/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style';
import { BiListUl } from 'react-icons/bi';

const AddProject = ({ onChange, onKeyUp, value, onAdd }) => {
    return (
        <>
            <div css={S.MainHeader}>
                <div css={S.Header}>
                    <i css={S.Icon}><BiListUl /></i>
                    <div css={S.Title}>Project</div>
                </div>
                <div css={S.ProjectAddition}>
                    {/* <i css={S.Icon2}><BiPencil /></i> */}
                    <input css={S.AdditionInput} type="text" placeholder="🖋 Add your new Project" onChange={onChange} onKeyUp={onKeyUp} value={value} />
                    <button css={S.ProjectAddButton} onClick={onAdd}>+</button>
                </div>
            </div>
        </>
    );
};

export default AddProject;
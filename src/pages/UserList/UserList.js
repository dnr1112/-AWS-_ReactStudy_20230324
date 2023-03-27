/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';

const UserList = () => {
    useEffect(() => {
        console.log("컵포넌트 랜더링");
    }, []);

    const user ={
        id: 0,
        username: '',
        password: '',
        name: '',
        email: ''
    }

    const userIndex = useRef(1);
    const [users, setUsers] = useState([]);
    const [inputs, setInputs] = useState(user);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const addButtonRef = useRef();

    
    const inputHandler = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const keyupHandler = (e) => {
        if(e.keyCode === 13) {
            let index = 0;
            switch(e.target.name) {
                case 'username': index = 1; break;
                case 'password': index = 2; break;
                case 'name': index = 3; break;
                default: addButtonRef.current.click();
            }
            if(index !== 0){
                inputRefs[index].current.focus();
            }
        }
    }
    
    const addHandler = (e) => {
        const user = {
            ...inputs
        };

        user.id = userIndex.current++;
        setUsers([...users, user]);
    }

    const onRemove = (index) => {
        // users.splice(index - 1, 1);
        // setUsers([...users]);

        setUsers(users.filter(user => user.id !== index));
    }


    // const users = [
    //     {
    //         id: 1,
    //         username: 'aaa',
    //         password: '1234',
    //         name: '가가가',
    //         email: 'aaa@naver.com'
    //     },
    //     {
    //         id: 2,
    //         username: 'bbb',
    //         password: '1234',
    //         name: '나나나',
    //         email: 'bbb@naver.com'
    //     },
    //     {
    //         id: 3,
    //         username: 'ccc',
    //         password: '1234',
    //         name: '다다다',
    //         email: 'ccc@naver.com'
    //     }
    // ]

    // const userIndex = useRef(4);

    return (
        <div css={S.Container}>
            <div>
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' value={inputs.username} ref={inputRefs[0]}/>
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' value={inputs.password} ref={inputRefs[1]}/>
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' value={inputs.name} ref={inputRefs[2]}/>
                <input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' value={inputs.email} ref={inputRefs[3]}/>

                <button type='button' onClick={addHandler} ref={addButtonRef}>추가</button>
            </div>
            <table css={S.Table}>
                <thead>
                    <tr>
                        <th css={S.ThAndTh}>index</th>
                        <th css={S.ThAndTh}>username</th>
                        <th css={S.ThAndTh}>password</th>
                        <th css={S.ThAndTh}>name</th>
                        <th css={S.ThAndTh}>email</th>
                        <th css={S.ThAndTh}>delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return(
                            <tr key={user.id}>
                                <td css={S.ThAndTh}>{user.id}</td>
                                <td css={S.ThAndTh}>{user.username}</td>
                                <td css={S.ThAndTh}>{user.password}</td>
                                <td css={S.ThAndTh}>{user.name}</td>
                                <td css={S.ThAndTh}>{user.email}</td>
                                <td css={S.ThAndTh}>
                                    <button onClick={() => onRemove(user.id)}>삭제</button>
                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default UserList;
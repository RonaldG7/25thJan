import React, {useContext, useRef} from 'react';
import fbContext from "../context/KindOfFBContext";
import {useNavigate} from "react-router-dom";

const FbRegistrationForm = () => {

    const {setPage, getUsers, setUsers} = useContext(fbContext)
    const userNameRef = useRef()
    const passwordRef = useRef()
    const passwordTwoRef = useRef()

    const submit = useNavigate()

    function createUser () {
        if (userNameRef.current.value.length < 1) return
        if (passwordRef.current.value !== passwordTwoRef.current.value) return
        const user = {
            userName: userNameRef.current.value,
            password: passwordRef.current.value
        }
        setUsers([...getUsers, user])
        submit("/login")
        console.log(getUsers)
    }

    return (
        <div className="d-flex column a-center">
            <input ref={userNameRef} className="input" type="text" placeholder="Name..."/>
            <input ref={passwordRef} className="input" type="text" placeholder="Password..."/>
            <input ref={passwordTwoRef} className="input" type="text" placeholder="Repeat password..."/>
            <button onClick={createUser}>Submit</button>
        </div>
    );
};

export default FbRegistrationForm;
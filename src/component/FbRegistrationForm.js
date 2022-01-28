import React, {useContext, useRef} from 'react';
import fbContext from "../context/KindOfFBContext";
import {useNavigate} from "react-router-dom";

const FbRegistrationForm = () => {

    const {getUsers, setUsers} = useContext(fbContext)
    const usernameRef = useRef()
    const passwordRef = useRef()
    const passwordTwoRef = useRef()

    const submit = useNavigate()

    function createUser () {
        if (usernameRef.current.value.length < 1) return
        if (passwordRef.current.value !== passwordTwoRef.current.value) return
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        setUsers([...getUsers, user])
        submit("/login")
    }

    return (
        <div className="d-flex column a-center">
            <input ref={usernameRef} className="input" type="text" placeholder="Name..."/>
            <input ref={passwordRef} className="input" type="text" placeholder="Password..."/>
            <input ref={passwordTwoRef} className="input" type="text" placeholder="Repeat password..."/>
            <button className="btn" onClick={createUser}>Submit</button>
        </div>
    );
};

export default FbRegistrationForm;
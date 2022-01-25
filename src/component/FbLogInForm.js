import React, {useContext, useRef} from 'react';
import fbContext from "../context/KindOfFBContext";
import {useNavigate} from "react-router-dom";

const FbLogInForm = () => {

    const {getUsers, setUser} = useContext(fbContext)
    const userNameRef = useRef()
    const passwordRef = useRef()

    const submit = useNavigate()

    function loginUser () {
        getUsers.map(x => {
            if (x.userName === userNameRef.current.value && x.password === passwordRef.current.value) {
                setUser(x.userName)
                submit("/main")
            }
        })
    }

    return (
        <div className="d-flex column a-center">
            <input ref={userNameRef} className="input" type="text" placeholder="Name..."/>
            <input ref={passwordRef} className="input" type="text" placeholder="Password..."/>
            <button onClick={loginUser}>Submit</button>
        </div>
    );
};

export default FbLogInForm;
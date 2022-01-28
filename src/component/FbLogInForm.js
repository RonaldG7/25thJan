import React, {useContext, useRef} from 'react';
import fbContext from "../context/KindOfFBContext";
import {useNavigate} from "react-router-dom";

const FbLogInForm = () => {

    const {getUsers, setUser, getWrongLogin, setWrongLogin} = useContext(fbContext)
    const userNameRef = useRef()
    const passwordRef = useRef()

    const submit = useNavigate()

    function loginUser () {
        getUsers.map(x => {
            if (x.username === userNameRef.current.value && x.password === passwordRef.current.value) {
                setUser(x.username)
                setWrongLogin(false)
                console.log(getWrongLogin)
                submit("/profile")
            } else {
                setWrongLogin(true)
            }
        })
    }

    return (
        <div className="d-flex column a-center">
            {getWrongLogin && <p style={{color: "red"}}>Username or Password doesn't match!</p>}
            <input ref={userNameRef} className="input" type="text" placeholder="Name..."/>
            <input ref={passwordRef} className="input" type="text" placeholder="Password..."/>
            <button className="btn" onClick={loginUser}>Submit</button>
        </div>
    );
};

export default FbLogInForm;
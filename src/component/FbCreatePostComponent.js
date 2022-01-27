import React, {useContext, useRef} from 'react';
import fbContext from "../context/KindOfFBContext";
import {v4 as uuid} from "uuid";
import {useNavigate} from "react-router-dom";

const FbCreatePostComponent = () => {

    const {setPosts, getPosts, getUser} = useContext(fbContext)

    const titleRef = useRef()
    const articleRef = useRef()

    const submit = useNavigate()

    function createPost () {
        const post = {
            id: uuid(),
            title: titleRef.current.value,
            article: articleRef.current.value,
            username: getUser,
            likes: [],
            comments: []
        }
        setPosts([...getPosts, post])
        submit("/profile")
    }

    return (
        <div className="d-flex column a-center">
            <input ref={titleRef} className="input" type="text" placeholder="Title..."/>
            <input ref={articleRef} className="input" type="text" placeholder="Article..."/>
            <button onClick={createPost}>Submit</button>
        </div>
    );
};

export default FbCreatePostComponent;
import React, {useContext} from 'react';
import fbContext from "../context/KindOfFBContext";
import {Link} from "react-router-dom";

const FbToolbar = () => {

    const {getPage} = useContext(fbContext)

    return (
        <div className="d-flex border s-btw">
            <div className="d-flex">
                {(getPage === "/" || getPage === "/register") &&
                    <Link to={"/login"} className="navButton">Log In</Link>}
                {(getPage === "/" || getPage === "/login") &&
                    <Link to={"/register"} className="navButton">Register</Link>}
                {getPage === "/profile" && <Link to={"/createPost"} className="navButton">Create Post</Link>}
                {getPage === "/createPost" && <Link to={"/profile"} className="navButton">Profile Page</Link>}
            </div>
            {(getPage === "/profile" || getPage === "/createPost") && <Link to={"/"} className="navButton">Log Off</Link>}
        </div>
    );
};

export default FbToolbar;
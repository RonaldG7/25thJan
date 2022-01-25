import React, {useContext} from 'react';
import fbContext from "../context/KindOfFBContext";
import {Link} from "react-router-dom";

const FbToolbar = () => {

    const {getPage} = useContext(fbContext)

    return (
        <div className="d-flex border">
            {(getPage === "/" || getPage === "/register") && <Link to={"/login"} className="navButton">Log In</Link>}
            {(getPage === "/" || getPage === "/login") && <Link to={"/register"} className="navButton">Register</Link>}
            {getPage === "/main" && <Link to={"/createPost"} className="navButton">Create Post</Link>}
            {getPage === "/createPost" && <Link to={"/main"} className="navButton">Main Page</Link>}
            <Link to={"/"} className="navButton">Sign Out</Link>
        </div>
    );
};

export default FbToolbar;
import React, {useContext, useEffect} from 'react';
import fbContext from "../context/KindOfFBContext";
import FbMainPagePosts from "../component/FbMainPagePosts";

const FbMainPage = () => {

    const {setPage} = useContext(fbContext)

    useEffect(() => {
        setPage("/main")
    })

    return (
        <div>
            <FbMainPagePosts/>
        </div>
    );
};

export default FbMainPage;
import React, {useContext, useEffect} from 'react';
import fbContext from "../context/KindOfFBContext";
import FbProfilePagePosts from "../component/FbProfilePagePosts";

const FbProfilePage = () => {

    const {setPage} = useContext(fbContext)

    useEffect(() => {
        setPage("/profile")
    })

    return (
        <div>
            <FbProfilePagePosts/>
        </div>
    );
};

export default FbProfilePage;
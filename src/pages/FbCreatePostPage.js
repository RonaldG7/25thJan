import React, {useContext, useEffect} from 'react';
import fbContext from "../context/KindOfFBContext";
import FbCreatePostComponent from "../component/FbCreatePostComponent";

const FbCreatePostPage = () => {

    const {setPage} = useContext(fbContext)

    useEffect(() => {
        setPage("/createPost")
    })

    return (
        <div>
            <FbCreatePostComponent/>
        </div>
    );
};

export default FbCreatePostPage;
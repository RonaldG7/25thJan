import React, {useContext, useEffect} from 'react';
import fbContext from "../context/KindOfFBContext";

const FbFirstPage = () => {

    const {setPage} = useContext(fbContext)

    useEffect(() => {
        setPage("/")
    })

    return (
        <div>
            
        </div>
    );
};

export default FbFirstPage;
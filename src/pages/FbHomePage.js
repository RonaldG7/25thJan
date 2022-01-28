import React, {useContext, useEffect} from 'react';
import fbContext from "../context/KindOfFBContext";

const FbHomePage = () => {

    const {setPage, setUser} = useContext(fbContext)

    useEffect(() => {
        setPage("/")
    })

    useEffect(() => {
        setUser("")
    })

    return (
        <div>
            
        </div>
    );
};

export default FbHomePage;
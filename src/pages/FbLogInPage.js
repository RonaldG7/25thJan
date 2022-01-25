import React, {useContext, useEffect} from 'react';
import fbContext from "../context/KindOfFBContext";
import FbLogInForm from "../component/FbLogInForm";

const FbLogInPage = () => {

    const {setPage} = useContext(fbContext)

    useEffect(() => {
        setPage("/login")
    })

    return (
        <div>
            <FbLogInForm/>
        </div>
    );
};

export default FbLogInPage;
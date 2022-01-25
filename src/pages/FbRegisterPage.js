import React, {useContext, useEffect} from 'react';
import fbContext from "../context/KindOfFBContext";
import FbRegistrationForm from "../component/FbRegistrationForm";

const FbRegisterPage = () => {

    const {setPage} = useContext(fbContext)

    useEffect(() => {
        setPage("/register")
    })

    return (
        <div>
            <FbRegistrationForm/>
        </div>
    );
};

export default FbRegisterPage;
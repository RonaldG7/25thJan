import React, {useContext} from 'react';
import fbContext from "../context/KindOfFBContext";

const FbMainPagePosts = () => {

    const {getPosts} = useContext(fbContext)

    return (
        <div className="d-flex wrap">
            {getPosts && getPosts.map((x,i) => <div className="card border" key={i}>
                <h2>{x.title}</h2>
                <h2>{x.article}</h2>
                <h2 style={{color: "red"}}>{x.userName}</h2>
            </div>)}
        </div>
    );
};

export default FbMainPagePosts;
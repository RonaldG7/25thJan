import React, {useContext} from 'react';
import fbContext from "../context/KindOfFBContext";

const FbProfilePagePosts = () => {

    const {getPosts, setPosts, getUser} = useContext(fbContext)

    function deletePost (index) {
        setPosts(getPosts.filter((x,i) => i !== index))
    }

    return (
        <div className="d-flex wrap">
            {getPosts && getPosts.map((x,i) => <div className="card border" key={i}>
                <h2>{x.title}</h2>
                <h2>{x.article}</h2>
                <h2 style={{color: "red"}}>{x.username}</h2>
                {getUser === x.username && <button onClick={()=> deletePost(i)}>Delete Post</button>}
            </div>)}
        </div>
    );
};

export default FbProfilePagePosts;
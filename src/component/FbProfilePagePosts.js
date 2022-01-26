import React, {useContext} from 'react';
import fbContext from "../context/KindOfFBContext";

const FbProfilePagePosts = () => {

    const {getPosts, setPosts, getUser} = useContext(fbContext)

    function deletePost(index) {
        setPosts(getPosts.filter((x, i) => i !== index))
    }

    function like(index) {
        const allPosts = getPosts
        if (!getPosts[index].likes.includes(getUser)){
            allPosts[index].likes.push(getUser)
            setPosts([...allPosts])
        } else {
            allPosts[index].likes.splice(allPosts[index].likes.indexOf(getUser),1)
            setPosts([...allPosts])
        }
    }

    return (
        <div className="d-flex wrap">
            {getPosts && getPosts.map((x, i) => <div className="card border" key={i}>
                <h2>{x.title}</h2>
                <h2>{x.article}</h2>
                <h2 style={{color: "red"}}>{x.username}</h2>
                {getUser === x.username && <button onClick={() => deletePost(i)}>Delete Post</button>}
                <div className="d-flex a-center">
                    <h3>{x.likes.length} Likes</h3>
                    {getUser !== x.username && <button onClick={() => like(i)}>{x.likes.includes(getUser) ? "Dislike" : "Like"}</button>}
                </div>
            </div>)}
        </div>
    );
};

export default FbProfilePagePosts;
import React, {useContext, useState} from 'react';
import fbContext from "../context/KindOfFBContext";
import FbAddCommentModal from "./FbAddCommentModal";
import FbShowCommentsModal from "./FbShowCommentsModal";

const FbProfilePagePosts = () => {

    const {getPosts, setPosts, getUser, setIndex} = useContext(fbContext)
    const [openAddCommentModal, setOpenAddCommentModal] = useState(false)
    const [openCommentsModal, setOpenCommentsModal] = useState(false)

    function deletePost(index) {
        setPosts(getPosts.filter((x, i) => i !== index))
    }

    function like(index) {
        const allPosts = getPosts
        if (!getPosts[index].likes.includes(getUser)) {
            allPosts[index].likes.push(getUser)
            setPosts([...allPosts])
        } else {
            allPosts[index].likes.splice(allPosts[index].likes.indexOf(getUser), 1)
            setPosts([...allPosts])
        }
    }

    return (
        <div className="d-flex j-center wrap">
            {getPosts && getPosts.map((x, i) => <div className="card relative" key={i}>
                {getUser === x.username && <button className="deleteBtn" onClick={() => deletePost(i)}>Delete Post</button>}
                <h3 style={{color: "red"}}>Post created by: {x.username}</h3>
                <h4>Title: {x.title}</h4>
                <p>Article: {x.article}</p>
                <div className="d-flex a-center">
                    <h4>{x.likes.length} Likes</h4>
                    {getUser !== x.username &&
                        <button className="btn" onClick={() => like(i)}>{x.likes.includes(getUser) ? "Dislike" : "Like"}</button>}
                </div>
                <button className="btn" onClick={()=> {setOpenAddCommentModal(true); setIndex(i)}}>Add Comment</button>
                {openAddCommentModal && <FbAddCommentModal closeModal={setOpenAddCommentModal}/>}
                <button className="btn" onClick={()=> {setOpenCommentsModal(true); setIndex(i)}}>Show Comments</button>
                {openCommentsModal && <FbShowCommentsModal closeModal={setOpenCommentsModal}/>}
            </div>)}
        </div>
    );
};

export default FbProfilePagePosts;
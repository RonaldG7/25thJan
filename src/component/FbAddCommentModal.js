import {useContext, useRef} from 'react';
import "./Modal.css"
import fbContext from "../context/KindOfFBContext";

const FbAddCommentModal = ({closeModal}) => {

    const {getPosts, setPosts, getUser, getIndex} = useContext(fbContext)
    const commentRef = useRef()

    function addComment() {
        const allPosts = getPosts
        if (commentRef.current.value.length > 0) {
            const comment = {
                username: getUser,
                comment: commentRef.current.value
            }
            allPosts[getIndex].comments.push(comment)
            setPosts([...allPosts])
            closeModal(false)
        }
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="title">
                    <h1>Enter your comment bellow</h1>
                </div>
                <div className="body">
                    <textarea ref={commentRef} placeholder="Please type here..." cols="50" rows="20">
                    </textarea>
                </div>
                <div className="footer">
                    <button onClick={addComment}>Add Comment</button>
                </div>
            </div>
        </div>
    );
};

export default FbAddCommentModal;
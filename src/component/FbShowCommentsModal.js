import {useContext} from 'react';
import "./Modal.css"
import fbContext from "../context/KindOfFBContext";

const FbAddCommentModal = ({closeModal, index}) => {

    const {getPosts} = useContext(fbContext)

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="title">
                    <h1>Comments</h1>
                </div>
                <div className="comments">
                    {getPosts[index].comments && getPosts[index].comments.map((x,i) => <div className="comment" key={i}>
                        <h4>{x.username}</h4>
                        <p>{x.comment}</p>
                    </div>)}
                </div>

            </div>
        </div>
    );
};

export default FbAddCommentModal;
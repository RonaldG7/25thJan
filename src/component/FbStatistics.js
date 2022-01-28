import React, {useContext} from 'react';
import fbContext from "../context/KindOfFBContext";

const FbStatistics = () => {

    const {getUser, getPosts} = useContext(fbContext)

    const countPosts = getPosts.filter(x => x.username === getUser).length
    // const countLikes = []
    // getPosts.filter(x => x.username === getUser).map(x => countLikes.push(...x.likes))
    const countLikes = getPosts.filter(x => x.username === getUser).map(x => x.likes.length).reduce((a, b) => a + b, 0)
    // const countComments = []
    // getPosts.filter(x => x.username === getUser).map(x => countComments.push(...x.comments))
    const countComments = getPosts.filter(x => x.username === getUser).map(x => x.comments.length).reduce((a, b) => a + b, 0)

    return (
        <div className="d-flex a-center j-center">
            <h4 className="m10">User: {getUser}</h4>
            <h4 className="m10">Posts: {countPosts}</h4>
            <h4 className="m10">Likes: {countLikes}</h4>
            <h4 className="m10">Comments: {countComments}</h4>
        </div>
    );
};

export default FbStatistics;
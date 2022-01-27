import React, {useContext} from 'react';
import fbContext from "../context/KindOfFBContext";

const FbStatistics = () => {

    const {getUser, getPosts} = useContext(fbContext)

    const countPosts = getPosts.filter(x => x.username === getUser).length
    const countLikes = []
    getPosts.filter(x => x.username === getUser).map(x => countLikes.push(...x.likes))
    const countComments = []
    getPosts.filter(x => x.username === getUser).map(x => countComments.push(...x.comments))

    return (
        <div className="d-flex a-center j-center">
            <h4 className="m5">User: {getUser}</h4>
            <h4 className="m5">Posts: {countPosts}</h4>
            <h4 className="m5">Likes: {countLikes.length}</h4>
            <h4 className="m5">Comments: {countComments.length}</h4>
        </div>
    );
};

export default FbStatistics;
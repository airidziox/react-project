import React, {useEffect, useState} from 'react';
import Post from "../components/Post";

const IndexPage = ({posts, secretKey, loggedUser}) => {

    return (
        <div className="App d-flex flex-wrap gap-3">
            {posts.map((post, index) =>
                <Post post={post} key={index} secretKey={secretKey} loggedUser={loggedUser}/>
            )}
        </div>
    );
};

export default IndexPage;
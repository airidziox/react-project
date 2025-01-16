import React, {useEffect, useState} from 'react';
import Post from "../components/Post";

const IndexPage = ({posts, setUser}) => {

    return (
        <div className="App d-flex flex-wrap gap-3">
            {posts.map((post, index) =>
                <Post post={post} key={index} set={setUser}/>
            )}
        </div>
    );
};

export default IndexPage;
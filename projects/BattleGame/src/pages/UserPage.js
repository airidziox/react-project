import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Post from "../components/Post";


const UserPage = () => {

    const params = useParams();

    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        fetch(`http://167.99.138.67:1111/getUserPosts/${params.username}`)
            .then(res => res.json())
            .then(data => {
                setUserPosts(data.data)
            })
    },[])

    return (
        <div className="d-flex flex-wrap gap-3">
            {userPosts.map((post, index) =>
                <Post post={post} key={index}/>
            )}
        </div>
    );
};

export default UserPage;
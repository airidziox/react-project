import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Post from "../components/Post";


const SinglePostPage = ({secretKey}) => {

    const params = useParams()

    const [userPost, setUserPost] = useState([])

    useEffect(() => {
        fetch(`http://167.99.138.67:1111/getsinglepost/${params.username}/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setUserPost(data.data)
            })
    },[])

    return (
        <div>
            <Post post={userPost} secretKey={secretKey}/>
        </div>
    );
};

export default SinglePostPage;
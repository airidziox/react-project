import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post, secretKey, loggedUser}) => {

    function deletePost() {
        const requestOptions = {
            secretKey: secretKey,
            id: post.id
        };

        fetch('http://167.99.138.67:1111/deletepost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestOptions),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <div className="card p-2 gap-2">
                <img src={post.image} alt=""/>
                <Link className="title" to={ `/singlepost/${post.username}/${post.id}` } ><h4>{post.title}</h4></Link>
                <Link to={`/userpost/${ post.username}`} className="username fw-medium">{post.username}</Link>
                <div>{post.description}</div>
                {secretKey && loggedUser === post.username && <button className="btn btn-dark" onClick={deletePost}>Delete</button>}
                {secretKey && loggedUser === post.username && <Link to={`/updatepost/${post.id}`} className="btn btn-light">Update</Link>}
            </div>
        </div>
    );
};

export default Post;
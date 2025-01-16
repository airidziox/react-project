import React, {useRef} from 'react';
import {useParams} from "react-router-dom";

const UpdatePostPage = ({secretKey}) => {

    const titleRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const params = useParams();

    function submitUpdate() {
        const requestOptions = {
            secretKey: secretKey,
            title: titleRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value,
            id: params.id
        };

        fetch('http://167.99.138.67:1111/updatepost', {
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
            <div className="update d-flex flex-column align-items-center justify-content-center gap-3">
                <h1 className="text-center">Update Post</h1>
                <input className="p-2 rounded-4" type="text" ref={titleRef} placeholder="Title"/>
                <input className="p-2 rounded-4" type="text" ref={imageRef} placeholder="Image URL"/>
                <input className="p-2 rounded-4" type="text" ref={descriptionRef} placeholder="Description"/>
                <button className="btn btn-secondary" onClick={submitUpdate}>Update</button>
            </div>
        </div>
    );
};

export default UpdatePostPage;
import React, {useRef} from 'react';

const UploadPage = ({secretKey}) => {

    const titleRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();

    function submitUpload() {
        const requestOptions = {
            secretKey: secretKey,
            title: titleRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value
        };

        fetch('http://167.99.138.67:1111/createpost', {
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
            <div className="upload d-flex flex-column align-items-center justify-content-center gap-3">
                <h1 className="text-center">Upload Post</h1>
                <input className="p-2 rounded-4" type="text" ref={titleRef} placeholder="Title"/>
                <input className="p-2 rounded-4" type="text" ref={imageRef} placeholder="Image URL"/>
                <input className="p-2 rounded-4" type="text" ref={descriptionRef} placeholder="Description"/>
                <button className="btn btn-secondary" onClick={submitUpload}>Create</button>
            </div>
        </div>
    );
};

export default UploadPage;
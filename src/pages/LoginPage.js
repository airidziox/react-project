import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";

const LoginPage = ({settingSecretKey}) => {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const nav = useNavigate()

    function submitLogin() {
        const requestOptions = {
            name: usernameRef.current.value,
            password: passwordRef.current.value
        };

        fetch('http://167.99.138.67:1111/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestOptions),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if(data.success){
                    settingSecretKey(data.secretKey,requestOptions.name);
                    nav('/')
                }
            })
    }

    return (
        <div className="login d-flex flex-column align-items-center justify-content-center gap-3">
            <h1 className="text-center">Login</h1>
            <input className="p-2 rounded-4" type="text" ref={usernameRef} placeholder="Username"/>
            <input className="p-2 rounded-4" type="text" ref={passwordRef} placeholder="Password"/>
            <button className="btn btn-secondary" onClick={submitLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
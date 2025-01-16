import React, {useRef} from 'react';

const RegisterPage = () => {

    const usernameRef = useRef();
    const passwordOneRef = useRef();
    const passwordTwoRef = useRef();

    function submitRegister() {
        const requestOptions = {
            name: usernameRef.current.value,
            passwordOne: passwordOneRef.current.value,
            passwordTwo: passwordTwoRef.current.value
        };

        fetch('http://167.99.138.67:1111/createaccount', {
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
        <div className="login d-flex flex-column align-items-center justify-content-center gap-3">
            <h1 className="text-center">Register</h1>
            <input className="p-2 rounded-4" type="text" ref={usernameRef} placeholder="Username"/>
            <input className="p-2 rounded-4" type="text" ref={passwordOneRef} placeholder="Password"/>
            <input className="p-2 rounded-4" type="text" ref={passwordTwoRef} placeholder="Repeat Password"/>
            <button className="btn btn-secondary" onClick={submitRegister}>Register</button>
        </div>
    );
};

export default RegisterPage;
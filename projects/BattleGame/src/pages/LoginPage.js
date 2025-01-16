import React, {useState} from 'react';

const LoginPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    let requestOptions = {
        name: name,
        password: password,
    };

    function submitLogin() {
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
                console.log(requestOptions);
            })
    }

    return (
        <div className="login d-flex flex-column align-items-center justify-content-center gap-3">
            <input className="p-2 rounded-4" type="text" placeholder="Username" onChange={e => setName(e.target.value)}/>
            <input className="p-2 rounded-4" type="text" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button className="btn btn-secondary" onClick={submitLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
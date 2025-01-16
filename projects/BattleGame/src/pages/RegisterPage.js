import React, {useState} from 'react';

const RegisterPage = () => {

    const [name, setName] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    let requestOptions = {
            name: name,
            passwordOne: passwordOne,
            passwordTwo: passwordTwo
    };

    function submitRegister() {
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
                console.log(requestOptions);
            })
    }

    return (
        <div className="login d-flex flex-column align-items-center justify-content-center gap-3">
            <input className="p-2 rounded-4" type="text" placeholder="Username" onChange={e => setName(e.target.value)} />
            <input className="p-2 rounded-4" type="text" placeholder="Password" onChange={e => setPasswordOne(e.target.value)}/>
            <input className="p-2 rounded-4" type="text" placeholder="Repeat Password" onChange={e => setPasswordTwo(e.target.value)}/>
            <button className="btn btn-secondary" onClick={submitRegister}>Register</button>
        </div>
    );
};

export default RegisterPage;
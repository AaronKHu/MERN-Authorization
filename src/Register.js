import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(e) {
        e.preventDefault(); //the form won't be sent to action with this method 

        const data = {email, password};
        axios.post('http://localhost:4000/register', data, {withCredentials:true}) //Allows us to send cookie from React app to API, local host 4000 is where our express app is running
            .then(()=>{});
    }

    return (
        <form action="" onSubmit={(e => registerUser(e))}>
            <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value) }/><br />
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value) } /><br />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register
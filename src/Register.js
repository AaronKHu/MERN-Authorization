import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(e) {
        e.preventDefault(); //the form won't be sent to action with this method 

        const data = {email, password}
        axios.post('','data')
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
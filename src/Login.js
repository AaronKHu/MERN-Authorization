import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios';
import UserContext from "./UserContext";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useContext(UserContext);

    function loginUser(e) {
        e.preventDefault(); //the form won't be sent to action with this method 

        const data = {email, password};
        axios.post('http://localhost:4000/login', data, {withCredentials:true}) //Allows us to send cookie from React app to API, local host 4000 is where our express app is running
            .then(response =>{
                user.setEmail(response.data.email);
            });
    }

    return (
        <form action="" onSubmit={(e => loginUser(e))}>
            <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value) }/><br />
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value) } /><br />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login
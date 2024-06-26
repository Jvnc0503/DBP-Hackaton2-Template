import React, { useState } from 'react';
import { fetchLogin } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await fetchLogin({username, password});
            console.log(res);
            alert('Login successful');
            navigate('/');
        }
        catch(error){
            console.log('Login failed', error);
            alert('Login failed');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>Login</div>
            <label htmlFor="username">Username
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor="password">Password:
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
import React, { useState } from "react";
import { fetchRegister } from "../api";
import { useNavigate } from "react-router-dom";

const Register = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await fetchRegister({username, password, role});
            console.log(res);
            alert('Register successful');
            navigate('/');
        }
        catch(error){
            console.log('Register failed', error);
            alert('Register failed');
        }
    }

    const handleRole = (e) => {
        setRole(e.target.checked ? 'ROLE_ADMIN' : 'ROLE_USER');
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>Register</div>
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
            <label htmlFor="isAdmin">Is Admin:
                <input
                    type="checkbox"
                    id="isAdmin"
                    checked={role}
                    onChange={handleRole}
                />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Register;
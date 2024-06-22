import React, { useState } from "react";
import { fetchRegister } from "../api";
import { useNavigate } from "react-router-dom";

const Register = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await fetchRegister({firstName, lastName, email, password});
            console.log(res);
            alert('Register successful');
            navigate('/');
        }
        catch(error){
            console.log('Register failed', error);
            alert('Register failed');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>Register</div>
            <label htmlFor="firstName">First Name:
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor="lastName">Last Name:
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor="email">Email:
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit">Submit</button>
        </form>
    );
}

export default Register;
import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchLogout } from "../api";

const Logout = () =>{
    const navigate = useNavigate();

    const handleLogout = () =>{
        fetchLogout();
        navigate('/login');
    }

    return(
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
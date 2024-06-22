import axios from "axios";

const URL="/api";

function saveToken(token){
    console.log(token);
    localStorage.setItem('token', token);
}

function getToken(){
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
}

function getDecodedToken(){
    return jwt_decode(getToken());
}

export function getRole(){
    return getDecodedToken().role;
}

export const fetchLogin = async (body) =>{
    const response = await axios.post(`${URL}/auth/login`, body);
    saveToken(response.data.token);
    return response.data;
}

export const fetchRegister = async (body) =>{
    const response = await axios.post(`${URL}/auth/register`, body);
    saveToken(response.data.token);
    return response.data;
}

export const fetchLogout = () =>{
    localStorage.removeItem('token');
}
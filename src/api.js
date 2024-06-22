import axios from "axios";

const URL="https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com";

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

export function isLoggedIn(){
    return getToken() !== null;
}

export function isAdmin(){
    return getRole() === 'ROLE_ADMIN';
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

export const fetchCreateItem = async (body) =>{
    const response = await axios.post(`${URL}/item`, body, {
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    });
    console.log(response.data);
    return response.data.itemId;
}

export const fetchPutItem = async (body) =>{
    const response = await axios.put(`${URL}/item`, body, {
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
}

export const fetchDeleteItem = async (id) =>{
    const response = await axios.delete(`${URL}/item/${id}`, {
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
}

export const fetchGetItem = async (id) =>{
    const response = await axios.get(`${URL}/item/${id}`, {
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
}

export const fetchGetItems = async (limit, lastKey) =>{
    const response = await axios.get(`${URL}/items?limit=${limit}&lastKey=${lastKey}`);
    console.log(response.data);
    return response.data.lastKey;
}

export const fetchBuy = async (body) =>{
    const response = await axios.post(`${URL}/buy`, body, {
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
}

export const fetchAddCart = async (body) =>{
    const response = await axios.post(`${URL}/cart`, body, {
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
}

export const fetchDeleteCartItem = async (body) =>{
    const response = await axios.delete(`${URL}/cart`, body, {
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    });
}

export const fetchGetCart = async (id) =>{
    const response = await axios.get(`${URL}/cart/${id}`, {
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    });
}
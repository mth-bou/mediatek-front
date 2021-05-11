import config from '../../config';
import axios from 'axios';
import { authHeader, handleResponse } from '@/Helpers';

export const userService = {
    getAll,
    getAllUsers,
    getAllUsers2,
    getById,
    post,
    edit,
    deleteById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function getAllUsers2() {
    const requestOptions = { method: 'GET', headers: authHeader() };
     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse)
}

function getAllUsers() {
    try {
        let response = axios.get(`${config.apiUrl}/users`)
            .then(resp => {
               return resp.data
            })
    } catch (error) {
        console.log(error)
    }
}

function post(user) {
    try {
        axios.post(`${config.apiUrl}/user`, user)
            .then(resp => {
                console.log(resp)
            })
    } catch (error) {
        console.log(error)
    }
}

function edit(id, user) {

    axios.put(`${config.apiUrl}/users/${id}`, user)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

function deleteById(id) {

    axios.delete(`${config.apiUrl}/users/${id}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

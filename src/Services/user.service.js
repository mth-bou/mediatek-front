import config from '../../config';
import axios from 'axios';
import {authHeader, handleResponse} from '@/Helpers';

const header = {
    'Content-Type': 'multipart/form-data'
}

export const userService = {
    getAll,
    getById,
    post,
    edit,
    deleteById
};

function getAll() {
    const requestOptions = {method: 'GET', headers: authHeader()};
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {method: 'GET', headers: authHeader()};
    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
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

    axios.put(`${config.apiUrl}/users/${id}`, user, {
        headers:header
    } )
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

function deleteById(id) {
    try {
        axios.delete(`${config.apiUrl}/users/id?id=${id}`)
            .then(res => {
            console.log(res)
        })
    } catch (error) {
        console.log(error)
    }
}

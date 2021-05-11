import config from '../../config';
import axios from 'axios';
import { authHeader, handleResponse } from '@/Helpers';

export const userService = {
    getAll,
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

function post(user) {

    axios.post(`${config.apiUrl}/user`, user)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })

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

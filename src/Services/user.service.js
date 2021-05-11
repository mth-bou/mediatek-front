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

    const options = {
        headers: { 'Access-Control-Allow-Origin': '*'}
    }

    axios.get(`${config.apiUrl}/users`, options)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        });
}

function getById(id) {

    axios.get(`${config.apiUrl}/users/${id}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

function post(user) {

    axios.post(`${config.apiUrl}/users/`, user)
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

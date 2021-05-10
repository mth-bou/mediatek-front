import config from 'config';
import { authHeader, handleResponse } from '@/Helpers';

export const userService = {
    getAll,
    getById,
    /*post,
    edit,*/
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
/*
function post(user) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: { user.lastname, user.firstname, user.login, user.password, user.role }
    }

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function edit(user) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: { user.lastname, user.firstname, user.login, user.password, user.role }
    }

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}*/

function deleteById(user) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
    }

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

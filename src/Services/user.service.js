import config from 'config';
import { authHeader, handleResponse } from '@/Helpers';

export const userService = {
    getAll,
    getById,
    post
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function post(nom, prenom, login, password, role) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            nom: nom,
            prenom: prenom,
            login: login,
            password: password,
            role: role
        })
    };
    return fetch(`${config.apiUrl}/images/`, requestOptions).then(handleResponse);
}

import config from 'config';
import { authHeader, handleResponse } from "@/Helpers";

export const imageService = {
    getAll,
    getById,
    post,
    edit,
    deleteById,
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/images`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/images/${id}`, requestOptions).then(handleResponse);
}

function post(category, nom, url, description, keywords, copyright) {
    if (typeof(copyright) === 'undefined') copyright = null;
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            category: category,
            nom: nom,
            url: url,
            description: description,
            keywords: keywords,
            copyright: copyright
        })
    };
    return fetch(`${config.apiUrl}/images/`, requestOptions).then(handleResponse);
}

function edit(id, category, nom, url, description, keywords, copyright) {
    if (typeof(copyright) === 'undefined') copyright = null;
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            category: category,
            nom: nom,
            url: url,
            description: description,
            keywords: keywords,
            copyright: copyright
        })
    };
    return fetch(`${config.apiUrl}/images/${id}`, requestOptions).then(handleResponse);
}

function deleteById(id) {
    const requestOptions = { method: 'DELETE', headers: authHeader() };
    return fetch(`${config.apiUrl}/images/${id}`, requestOptions).then(handleResponse);
}

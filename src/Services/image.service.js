import config from '../../config';
import {authHeader, handleResponse} from "@/Helpers";
import axios from "axios";

function getAll() {
    try {
        axios.get(`${config.apiUrl}/images`)
            .then(resp => {
                return resp.data
            })
    } catch (error) {
        console.log(error)
    }
}

function postImage(data) {
    try {
        axios.post(`${config.apiUrl}/images`, data)
            .then(resp => {
                console.log(resp)
            })
    } catch (error) {
        console.log(error)
    }
}

function edit(id, category, nom, url, description, keywords, copyright) {
    if (typeof (copyright) === 'undefined') copyright = null;
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
    const requestOptions = {method: 'DELETE', headers: authHeader()};
    return fetch(`${config.apiUrl}/images/${id}`, requestOptions).then(handleResponse);
}

export const imageService = {
    getAll,
    postImage,
    edit,
    deleteById,
};

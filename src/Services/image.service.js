import config from '../../config';
import {authHeader, handleResponse} from "@/Helpers";
import axios from "axios";

const header = {
    'Content-Type': 'multipart/form-data'
}

function getAll() {
    try {
        let response = axios.get(`${config.apiUrl}/images`)
            .then(resp => {
                return resp.data
            })
    } catch (error) {
        console.log(error)
    }
}

function postImage(data) {
    try {
        axios.post(`${config.apiUrl}/images`, data,{
            headers:header
        } )
            .then(resp => {
                console.log(resp)
            })
    } catch (error) {
        console.log(error)
    }
}

function edit(id, image) {
    const requestOptions = {
        // To allow CORS Policy
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: { host: 'localhost', port: 8081 }
    };

    axios.post(`${config.apiUrl}/images/${id}`, image, requestOptions)
        .then(res => {
            res.data.forEach(image => {
                return image
            })
        })
        .catch(err => {
            return err
        })
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

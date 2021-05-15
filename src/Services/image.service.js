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

function editImage(data) {
    try {
        axios.put(`${config.apiUrl}/images/edit`, data)
            .then(resp => {
                console.log(resp)
            })
    } catch (error) {
        console.log(error)
    }
}

function deleteById(id) {
    try {
        axios.delete(`${config.apiUrl}/images/?id=${id}`)
            .then(res => {
                console.log(res)
            })
    } catch (error) {
        console.log(error)
    }
}

export const imageService = {
    getAll,
    postImage,
    editImage,
    deleteById,
};

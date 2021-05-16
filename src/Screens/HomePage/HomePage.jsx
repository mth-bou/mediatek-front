import React, {useState, useEffect} from 'react';
import {Role} from '../../Helpers'
import {userService, authenticationService} from '@/Services';
import CardImage from "@/Components/cardImage";
import axios from "axios";
import config from "../../../config";
import Button from "react-bootstrap/Button";

function HomePage() {

    const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue)
    const [userFromApi, setUserFromApi] = useState(null)
    const [imageListSorted, setImageListSorted] = useState([])

    useEffect(() => {
        userService.getById(currentUser.id).then(userFromApi => setUserFromApi(userFromApi));
        try {
            let response = axios.get(`${config.apiUrl}/images`)
                .then(resp => {
                    resp.data.map(item => {
                        item.datePublished = Date.parse(item.datePublished)
                        imageListSorted.push(item)
                        imageListSorted.sort(function (a, b) {
                            return new Date(b.datePublished) - new Date(a.datePublished)
                        })
                    })
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div>
            <div style={{background: '#E9ECEF', textAlign: 'center'}}>
                <Button onClick={() => console.log(imageListSorted)}></Button>
                <h1 className="text-center">Bienvenue sur Mediatek</h1>
                <p>Une application qui vous permet de gérer une banque d'images comme vous le souhaitez</p>
                <div>
                    {userFromApi &&
                    <p>Bonjour {userFromApi.firstname} {userFromApi.name}, votre rôle actuel est
                        : <strong>{currentUser.role}</strong>.</p>
                    }
                </div>
            </div>

            <div className="d-inline-flex flex-wrap mt-4">
                {imageListSorted && currentUser.role === Role.User &&
                imageListSorted.map(image =>
                    image.visibility &&
                    <div className="col-4" key={image.id}>
                        <CardImage image={image}/>
                    </div>
                )
                }

                {
                    imageListSorted && currentUser.role === Role.Admin &&
                    imageListSorted.map(image =>
                        <div className="col-4" key={image.id}>
                            <CardImage image={image}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export {HomePage};

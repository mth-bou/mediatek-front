import React, {useState, useEffect} from 'react';
import {Role} from '../../Helpers'
import {userService, authenticationService, imageService} from '@/Services';
import CardImage from "@/Components/cardImage";
import imageMock from "@/Helpers/imageMock";
import Button from "react-bootstrap/Button";
import axios from "axios";
import config from "../../../config";

function HomePage() {

    const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue)
    const [userFromApi, setUserFromApi] = useState(null)
    const [imageList, setImageList] = useState(null)

    useEffect(() => {
        userService.getById(currentUser.id).then(userFromApi => setUserFromApi(userFromApi));
        try {
            let response = axios.get(`${config.apiUrl}/images`)
                .then(resp => {
                    setImageList(resp.data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div>
            <div style={{background: '#E9ECEF', textAlign: 'center'}}>
                <Button onClick={() => console.log(imageList)}/>
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
                {imageList && currentUser.role === Role.User &&
                imageList.slice(0, 10).map(image =>
                    !image.visibility &&
                    <div className="col-4" key={image.id}>
                        <CardImage image={image}/>
                    </div>
                )
                }

                {
                    imageList && currentUser.role === Role.Admin &&
                    imageList.map(image =>
                                <div className="col-4" key={image.id}>
                                    <CardImage image={image}/>
                                </div>
                    )
                }
            </div>
        </div>
    );
}

const imageListStyle = {}

export {HomePage};

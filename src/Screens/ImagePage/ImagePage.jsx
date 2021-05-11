import React, {useState, useEffect} from 'react';
import { userService, authenticationService, imageService } from '@/Services';
import Button from "react-bootstrap/Button";
import {Role} from "@/Helpers";

function ImagePage(props) {
    const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue)
    const [userFromApi, setUserFromApi] = useState(null)
    const [image, setImage] = useState(props.location.aboutProps.image)
    //const [image, setImage] = useState(props.location.aboutProps.name)

    useEffect(()=> {
        userService.getById(currentUser.id).then(userFromApi => setUserFromApi(userFromApi));
        //imageService.getAll().then(res => setImageList(res));
    }, [])

    const deactivateImage = () => {
        if (image.visible) image.visible = false;
        imageService.edit(image.id, image.visible);
    }

    const activateImage = () => {
        if (image.visible === false) image.visible = true;
        imageService.edit(image.id, image.visible);
    }

        return (
            <div>
                <div style={{background:'#E9ECEF'}}>
                    <div style={{textAlign: 'center'}}>
                        <h1 className="mb-4 text-uppercase">{image.name}</h1>
                        <img className="img-fluid" src={image.url}  alt={image.description} />
                    </div>

                    <div className="mt-3 mb-3" style={{fontSize: '22px'}}>
                        <p className="text-left"><strong>Informations sur l'image :</strong></p>
                        <p>{image.description}</p>
                    </div>

                    {currentUser && currentUser.role === Role.Admin &&
                    <div className="row justify-content-center mt-2">
                        <Button className="btn btn-alert mr-2">Modifier</Button>
                        {image.visible &&
                            <Button className="btn btn-info mr-2 ml-2" onClick={deactivateImage}>Retirer sa publication</Button>
                        }
                        {image.visible === false &&
                        <Button className="btn btn-info mr-2 ml-2" onClick={activateImage}>Retirer sa publication</Button>
                        }
                        <Button className="btn btn-danger ml-2">Supprimer</Button>
                    </div>
                    }

                    <div className="mt-3 mb-3" style={{fontSize: '22px'}}>
                        <p className="text-left"><strong>Téléchargements :</strong></p>
                    </div>

                    <div>
                        <Button className="btn btn-success mr-2">Télécharger l'image</Button>
                        <Button className="btn btn-info mr-2">Télécharger toutes les images</Button>
                    </div>
                </div>
            </div>
        );
}

export { ImagePage };

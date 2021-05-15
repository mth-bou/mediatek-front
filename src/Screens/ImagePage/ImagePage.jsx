import React, {useState, useEffect} from 'react';
import {userService, authenticationService, imageService} from '@/Services';
import Button from "react-bootstrap/Button";
import {Role} from "@/Helpers";
import ImageCollapse from "@/Components/image_collapse";

function ImagePage(props) {
    const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue)
    const [userFromApi, setUserFromApi] = useState(null)
    const [image, setImage] = useState(props.location.aboutProps.image)
    const [open, setOpen] = useState(false)
    const [analysis, setAnalysis] = useState(JSON.parse(props.location.aboutProps.image.analysis))

    useEffect(() => {
        userService.getById(currentUser.id).then(userFromApi => setUserFromApi(userFromApi));
    }, [])

    const deleteImage = () => {
        try {
            imageService.deleteById(image.id)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div style={{background: '#E9ECEF'}}>
                <div style={{textAlign: 'center'}}>
                    <h1 className="mb-4 text-uppercase">{image.name}</h1>
                    <img className="img-fluid" src={`data:image/jpeg;base64,${image.image}`} alt={image.description}/>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="mt-3 mb-3" style={{fontSize: '22px'}}>
                            <p className="text-left"><strong>Informations sur l'image :</strong></p>
                            <p>Nom : {image.name}</p>
                            <p>Description : {image.description}</p>
                            <p>Catégorie : {image.category}</p>
                            <p>Mots-clé : {image.keywords}</p>
                            <p>Copyright : {image.copyright}</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="mt-3 mb-3" style={{fontSize: '22px'}}>
                            <p className="text-left"><strong>Analyse :</strong></p>
                            {
                                analysis.Labels.map((data, i) => {
                                    return (
                                        <div key={i} className="row">
                                            <p>{data.Name}&nbsp;</p>
                                            <p>({Math.round(data.Confidence)}%)</p>
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                </div>
                {currentUser && currentUser.role === Role.Admin &&
                <div className="row justify-content-center mt-2">
                    <Button className="btn btn-alert mr-2" onClick={() => setOpen(!open)}>Modifier</Button>
                    <Button className="btn btn-danger ml-2" onClick={deleteImage}>Supprimer</Button>
                </div>
                }
                {
                    currentUser && currentUser.role === Role.Admin &&
                    <ImageCollapse image={image} opened={open}/>
                }

{/*                <div className="mt-3 mb-3" style={{fontSize: '22px'}}>
                    <p className="text-left"><strong>Téléchargements :</strong></p>
                </div>

                <div>
                    <Button className="btn btn-success mr-2" onClick={()=>image.file}>Télécharger
                        l'image</Button>
                </div>*/}
            </div>
        </div>
    );
}

export {ImagePage};

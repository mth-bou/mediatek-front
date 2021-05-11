import React, {useState, useEffect} from 'react';

import { userService, authenticationService, imageService } from '@/Services';
import CardImage from "@/Components/cardImage";
import imageMock from "@/Helpers/imageMock";

function HomePage() {

    const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue)
    const [userFromApi, setUserFromApi] = useState(null)
    const [imageList, setImageList] = useState(imageMock)

    useEffect(()=> {
        userService.getById(currentUser.id).then(userFromApi => setUserFromApi(userFromApi));
        //imageService.getAll().then(res => setImageList(res));
    }, [])

        return (
            <div>
                <div style={{background:'#E9ECEF', textAlign: 'center'}}>
                    <h1 className="text-center">Bienvenue sur Mediatek</h1>
                    <p>Une application qui vous permet de gérer une banque d'images comme vous le souhaitez</p>
                    <div>
                        {userFromApi &&
                            <p>Bonjour {userFromApi.firstName} {userFromApi.lastName}, votre rôle actuel est : <strong>{currentUser.role}</strong>.</p>
                        }
                    </div>
                </div>

                <div className="d-inline-flex flex-wrap mt-4">
                    {imageList && currentUser.role === 'User' &&
                        imageList.slice(0, 10).map(image =>
                            <div className="col-4" key={image.id}>
                                <CardImage image={image} />
                            </div>
                        )
                    }

                    {
                        imageList && currentUser.role === 'Admin' &&
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

const imageListStyle = {

}

export { HomePage };

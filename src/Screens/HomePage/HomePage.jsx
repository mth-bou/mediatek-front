import React, {useState, useEffect} from 'react';
import { Role } from '../../Helpers'
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

    console.log(userFromApi)

        return (
            <div>
                <div style={{background:'#E9ECEF', textAlign: 'center'}}>
                    <h1 className="text-center">Bienvenue sur Mediatek</h1>
                    <p>Une application qui vous permet de gérer une banque d'images comme vous le souhaitez</p>
                    <div>
                        {userFromApi &&
                            <p>Bonjour {userFromApi.firstname} {userFromApi.name}, votre rôle actuel est : <strong>{currentUser.role}</strong>.</p>
                        }
                    </div>
                </div>

                <div className="d-inline-flex flex-wrap mt-4">
                    {imageList && currentUser.role === Role.User &&
                        imageList.slice(0, 10).map(image =>
                            <CardImage image={image} />
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

const imageListStyle = {

}

export { HomePage };

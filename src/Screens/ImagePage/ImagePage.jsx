import React, {useState, useEffect} from 'react';
import { userService, authenticationService, imageService } from '@/Services';

function ImagePage(props) {
    const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue)
    const [userFromApi, setUserFromApi] = useState(null)
    //const [image, setImage] = useState(props.location.aboutProps.name)

    useEffect(()=> {
        userService.getById(currentUser.id).then(userFromApi => setUserFromApi(userFromApi));
        //imageService.getAll().then(res => setImageList(res));
    }, [])

        return (
            <div>
                <div style={{background:'#E9ECEF', textAlign: 'center'}}>
                    <h1 className="text-center">yo</h1>

                </div>
            </div>
        );
}

export { ImagePage };

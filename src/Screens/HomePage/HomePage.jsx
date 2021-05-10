import React, {useState, useEffect} from 'react';

import { userService, authenticationService } from '@/Services';

function HomePage() {

    const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue)
    const [userFromApi, setUserFromApi] = useState(null)

    useEffect(()=> {
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    })

        return (
            <div>
                <h1>Home</h1>
                <p>You're logged in with React & JWT!!</p>
                <p>Your role is: <strong>{currentUser.role}</strong>.</p>
                <p>This page can be accessed by all authenticated users.</p>
                <div>
                    Current user from secure api end point:
                    {userFromApi &&
                        <ul>
                            <li>{userFromApi.firstName} {userFromApi.lastName}</li>
                        </ul>
                    }
                </div>
            </div>
        );
}

export { HomePage };
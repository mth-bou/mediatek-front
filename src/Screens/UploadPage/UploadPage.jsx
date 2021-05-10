import React, {useState, useEffect} from 'react';
import { userService } from '@/Services';
import {Button, Form}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function UploadPage (props){
    const [users, setUsers] = useState(null)

    useEffect(() => {
        userService.getAll().then(users => setUsers( users ));
    }, [])

        return (
            <div>
                <h1>Upload d'image</h1>
                <p>This page can only be accessed by administrators.</p>
                <Form>
                    
                </Form>
            </div>
        );
}

export { UploadPage };
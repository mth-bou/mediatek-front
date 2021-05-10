import React, {useState, useEffect} from 'react';
import { userService } from '@/Services';

function UploadPage (props){
    const [users, setUsers] = useState(null)

    useEffect(() => {
        userService.getAll().then(users => setUsers( users ));
    }, [])

        return (
            <div>
                <h1>Upload d'image</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="inputName">Nom</label>
                        <input type="text" className="form-control" id="inputName"
                               placeholder="Nom de l'image"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDescription">Description</label>
                        <input type="text" className="form-control" id="inputDescription"
                               placeholder="Description de l'image"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="imageFile">Fichier image</label>
                        <input type="file" className="form-control" id="imageFile"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCopyright">Copyright</label>
                        <input type="text" className="form-control" id="inputCopyright"
                               placeholder="Copyright de l'image"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="isPublished"/>
                            <label className="form-check-label" htmlFor="isPublished">Publier l'image</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
            </div>
        );
}

export { UploadPage };
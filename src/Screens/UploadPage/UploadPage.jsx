import React, {useState, useEffect} from 'react';
import {userService, imageService} from '@/Services';
import Button from 'react-bootstrap/Button'

function UploadPage(props) {
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [copyright, setCopyright] = useState(null)
    const [category, setCategory] = useState(null)
    const [keywords, setKeywords] = useState("")
    const [file, setFile] = useState(null)
    const [visible, setVisible] = useState(true)
    const [archived, setArchived] = useState(false)

    const uploadImage = () => {
        let keywordsArray = keywords.replace(/ /g,"").split(",")
        let imageData = {
            file: file,
            name: name,
            description: description,
            copyright: copyright,
            keywords: keywordsArray,
            datePublished: new Date,
            category: category,
            visibility: visible,
            archived: archived
        }
        try {
            imageService.postImage(imageData)
                .then(resp => {
                    console.log(resp)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Upload d'image</h1>
            <form onSubmit={uploadImage}>
                <div className="form-group">
                    <label htmlFor="inputName">Nom</label>
                    <input type="text" className="form-control" id="inputName"
                           placeholder="Soleil couchant derrière une montagne..." onChange={event => setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputDescription">Description</label>
                    <input type="text" className="form-control" id="inputDescription"
                           placeholder="Description de l'image" onChange={event => setDescription(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="imageFile">Fichier image</label>
                    <input type="file" className="form-control" id="imageFile"
                           onChange={event => setFile(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputCategory">Catégorie</label>
                    <input type="text" className="form-control" id="inputCategory"
                           placeholder="Catégorie de l'image" onChange={event => setCategory(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputKeywords">Mots-clé</label>
                    <input type="text" className="form-control" id="inputKeywords"
                           placeholder="ville, paysage,..." onChange={event => setKeywords(event.target.value)}/>
                    <small id="emailHelp" className="form-text text-muted">Ecrivez les mots-clés à la suite séparés par une virgule</small>
                </div>
                <div className="form-group">
                    <label htmlFor="inputCopyright">Copyright</label>
                    <input type="text" className="form-control" id="inputCopyright"
                           placeholder="Copyright de l'image" onChange={event => setCopyright(event.target.value)}/>
                </div>
                <div style={{marginBottom: 10}} className="form-check">
                    <input type="checkbox" className="form-check-input" id="isVisible" defaultChecked={visible}
                           onChange={() => setVisible(!visible)}/>
                    <label className="form-check-label" htmlFor="isVisible">Publier l'image</label>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        </div>
    );
}

export {UploadPage};
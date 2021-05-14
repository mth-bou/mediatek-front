import React, {useState, useEffect} from 'react';
import {imageService} from '@/Services';
import FormData from 'form-data'

function UploadPage(props) {
    const [name, setName] = useState("null")
    const [description, setDescription] = useState("null")
    const [copyright, setCopyright] = useState("null")
    const [category, setCategory] = useState("null")
    const [keywords, setKeywords] = useState("")
    const [file, setFile] = useState(null)
    const [visible, setVisible] = useState(true)
    const [archived, setArchived] = useState(false)

    const uploadImage = e => {
        let keywordsString = keywords.replace(/ /g, "")
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', name)
        formData.append('keywords', keywordsString)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('visibility', visible)
        formData.append('archived', archived)
        try {
            imageService.postImage(formData)
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
                    <input required type="text" className="form-control" id="inputName" maxLength={25}
                           placeholder="Soleil couchant..." onChange={event => setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputDescription">Description</label>
                    <input type="text" className="form-control" id="inputDescription" maxLength={30}
                           placeholder="Soleil se couchant dérrière une montagne..."
                           onChange={event => setDescription(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="imageFile">Fichier image</label>
                    <input required type="file" className="form-control" id="imageFile"
                           onChange={event => setFile(event.target.files[0])}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputCategory">Catégorie</label>
                    <input required type="text" className="form-control" id="inputCategory" maxLength={15}
                           placeholder="Paysage..." onChange={event => setCategory(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputKeywords">Mots-clé</label>
                    <input type="text" className="form-control" id="inputKeywords" maxLength={80}
                           placeholder="soleil, paysage,..." onChange={event => setKeywords(event.target.value)}/>
                    <small id="emailHelp" className="form-text text-muted">Ecrivez les mots-clés à la suite séparés par
                        une virgule</small>
                </div>
                <div className="form-group">
                    <label htmlFor="inputCopyright">Copyright</label>
                    <input type="text" className="form-control" id="inputCopyright" maxLength={25}
                           placeholder="Rémi Dupont, 2019" onChange={event => setCopyright(event.target.value)}/>
                    <small id="emailHelp" className="form-text text-muted">Laisser vide si aucun</small>
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
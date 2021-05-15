import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import {imageService} from "@/Services";
import FormData from "form-data";

export default function ImageCollapse(props) {
    const [id, setId] = useState(props.image.id)
    const [name, setName] = useState(props.image.name)
    const [description, setDescription] = useState(props.image.description)
    const [category, setCategory] = useState(props.image.category)
    const [keywords, setKeywords] = useState(props.image.keywords)
    const [copyright, setCopyright] = useState(props.image.copyright)
    const [visible, setVisible] = useState(props.image.visibility)
    const [archived, setArchived] = useState(props.image.archived)

    const editImage = e => {
        e.preventDefault()
        let keywordsString = keywords.replace(/ /g, "")
        const formData = new FormData()
        formData.append('id', id)
        formData.append('name', name)
        formData.append('keywords', keywordsString)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('copyright', copyright)
        formData.append('visibility', visible)
        try {
            imageService.editImage(formData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Collapse in={props.opened}>
                <div id="example-collapse-text">
                    <form onSubmit={editImage}>
                        <div className="form-group">
                            <label htmlFor="inputName">Nom</label>
                            <input required type="text" className="form-control" id="inputName" maxLength={25}
                                   value={name}
                                   onChange={event => setName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Description</label>
                            <input required type="text" className="form-control" id="inputDescription" maxLength={30}
                                   value={description}
                                   onChange={event => setDescription(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputCategory">Catégorie</label>
                            <input required type="text" className="form-control" id="inputCategory" maxLength={15}
                                   value={category}
                                   placeholder="Paysage..." onChange={event => setCategory(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputKeywords">Mots-clé</label>
                            <input required type="text" className="form-control" id="inputKeywords" maxLength={80}
                                   value={keywords}
                                   onChange={event => setKeywords(event.target.value)}/>
                            <small id="emailHelp" className="form-text text-muted">Ecrivez les mots-clés à la suite séparés par une virgule</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputCopyright">Copyright</label>
                            <input required type="text" className="form-control" id="inputCopyright" maxLength={25}
                                   value={copyright}
                                   onChange={event => setCopyright(event.target.value)}/>
                        </div>
                        <div style={{marginBottom: 10}} className="form-check">
                            <input type="checkbox" className="form-check-input" id="isVisible" defaultChecked={visible}
                                   onChange={() => setVisible(!visible)}/>
                            <label className="form-check-label" htmlFor="isVisible">Publier l'image</label>
                        </div>
                        <button style={{marginBottom: 7}} type="submit" className="btn btn-primary">Valider</button>
                    </form>
                </div>
            </Collapse>
        </div>
    )
}

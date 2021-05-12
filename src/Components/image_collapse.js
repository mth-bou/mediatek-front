import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import {imageService} from "@/Services";


export default function ImageCollapse(props) {
    const [id, setId] = useState(props.image.id)
    const [name, setName] = useState(props.image.name)
    const [description, setDescription] = useState(props.image.description)
    const [keywords, setKeywords] = useState(props.image.keywords)
    const [copyright, setCopyright] = useState(props.image.copyright)

    const upload = () => {
        let image = {
            name: name,
            description: description,
            keywords: keywords,
            copyright: copyright
        }

        imageService.edit(id, image).then(res => console.log(res))
    }

    return (
        <div>
            <Collapse in={props.opened}>
                <div id="example-collapse-text">
                    <form onSubmit={upload}>
                        <div className="form-group">
                            <label htmlFor="inputName">Nom</label>
                            <input type="text" className="form-control" id="inputName" maxLength={25}
                                   value={name}
                                   onChange={event => setName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Description</label>
                            <input type="text" className="form-control" id="inputDescription" maxLength={30}
                                   value={description}
                                   onChange={event => setDescription(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputKeywords">Mots-clé</label>
                            <input type="text" className="form-control" id="inputKeywords" maxLength={80}
                                   value={keywords}
                                   onChange={event => setKeywords(event.target.value)}/>
                            <small id="emailHelp" className="form-text text-muted">Ecrivez les mots-clés à la suite séparés par une virgule</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputCopyright">Copyright</label>
                            <input type="text" className="form-control" id="inputCopyright" maxLength={25}
                                   value={copyright}
                                   onChange={event => setCopyright(event.target.value)}/>
                            <small id="emailHelp" className="form-text text-muted">Laisser vide si aucun</small>
                        </div>
                        <button style={{marginBottom: 7}} type="submit" className="btn btn-primary">Valider</button>
                    </form>
                </div>
            </Collapse>
        </div>
    )
}

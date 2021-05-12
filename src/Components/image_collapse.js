import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";


export default function ImageCollapse() {
    const [name, setName] = useState(props.user.username)
    const [password, setPassword] = useState(props.user.password)
    const [firstName, setFirstName] = useState(props.user.firstName)
    const [lastName, setLastName] = useState(props.user.lastName)
    const [isAdmin, setAdmin] = useState(null)

    const [open, setOpen] = useState(false);

    return (
        <Collapse>
            <div id="example-collapse-text">
                <form>
                    <div className="form-group">
                        <label htmlFor="inputName">Nom</label>
                        <input type="text" className="form-control" id="inputName"
                               value={lastName}
                               onChange={event => setLastName(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDescription">Description</label>
                        <input type="text" className="form-control" id="inputDescription"
                               value={firstName}
                               onChange={event => setFirstName(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputKeywords">Mots-clé</label>
                        <input type="text" className="form-control" id="inputKeywords"
                               value={username}
                               onChange={event => setUsername(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCopyright">Mot de passe</label>
                        <input type="text" className="form-control" id="inputCopyright"
                               value={password}
                               onChange={event => setPassword(event.target.value)}/>
                    </div>
                    <div style={{marginBottom: 10}} className="form-check">
                        <input type="checkbox" className="form-check-input" id="isAdmin"
                               onChange={() => setAdmin(!isAdmin)} defaultChecked={isAdmin}/>
                        <label className="form-check-label" htmlFor="isAdmin">Gestionnaire</label>
                    </div>
                    <button style={{marginBottom: 7}} type="submit" className="btn btn-primary">Modifier</button>
                </form>
            </div>
        </Collapse>
    )
}

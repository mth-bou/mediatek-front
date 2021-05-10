import React, {useEffect, useState} from 'react';
import Collapse from 'react-bootstrap/Collapse'
import Button from "react-bootstrap/Button";

export default function UserCollapse(props) {

    const [username, setUsername] = useState(props.user.username)
    const [password, setPassword] = useState(props.user.password)
    const [firstName, setFirstName] = useState(props.user.firstName)
    const [lastName, setLastName] = useState(props.user.lastName)
    const [isAdmin, setAdmin] = useState(null)

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (props.user.role === "Admin") {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
    }, [])

    return (
        <div>
            <Button style={{marginBottom: 10, backgroundColor: '#FFF', color: 'black'}}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
            >
                {props.user.lastName}&nbsp;{props.user.firstName}&nbsp;[{props.user.role}]
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputLastName">Nom</label>
                            <input type="text" className="form-control" id="inputLastName"
                                   value={lastName}
                                   onChange={event => setLastName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputFirstName">Prénom</label>
                            <input type="text" className="form-control" id="inputFirstName"
                                   value={firstName}
                                   onChange={event => setFirstName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputUsername">Login</label>
                            <input type="text" className="form-control" id="inputUsername"
                                   value={username}
                                   onChange={event => setUsername(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Mot de passe</label>
                            <input type="text" className="form-control" id="inputPassword"
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
                    <button style={{backgroundColor: 'red', borderColor: 'red', marginBottom: 15}}
                            className="btn btn-secondary">Supprimer
                    </button>
                </div>
            </Collapse>
        </div>
    )
}
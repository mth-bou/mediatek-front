import React, {useEffect, useState} from 'react';
import Collapse from 'react-bootstrap/Collapse'
import Button from "react-bootstrap/Button";
import {Role} from '../Helpers/role'
import {userService} from "@/Services";

export default function UserCollapse(props) {

    const [id, setId] = useState(props.user.id)
    const [username, setUsername] = useState(props.user.username)
    const [password, setPassword] = useState(props.user.password)
    const [firstName, setFirstName] = useState(props.user.firstname)
    const [lastName, setLastName] = useState(props.user.name)
    const [isAdmin, setAdmin] = useState(null)

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (props.user.roles[0] === Role.Admin) {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
    }, [])

    const deleteUser = () => {
        try {
            userService.deleteById(id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Button style={{marginBottom: 10, backgroundColor: '#FFF', color: 'black'}}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
            >
                {props.user.name}&nbsp;{props.user.firstname}&nbsp;[{props.user.roles[0]}]
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputLastName">Nom</label>
                            <input type="text" className="form-control" id="inputLastName" maxLength={15}
                                   value={lastName}
                                   onChange={event => setLastName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputFirstName">Prénom</label>
                            <input type="text" className="form-control" id="inputFirstName" maxLength={15}
                                   value={firstName}
                                   onChange={event => setFirstName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputUsername">Login</label>
                            <input type="text" className="form-control" id="inputUsername" maxLength={20}
                                   value={username}
                                   onChange={event => setUsername(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Mot de passe</label>
                            <input type="text" className="form-control" id="inputPassword" maxLength={25}
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
                    <button onClick={deleteUser} style={{backgroundColor: 'red', borderColor: 'red', marginBottom: 15}}
                            className="btn btn-secondary">Supprimer
                    </button>
                </div>
            </Collapse>
        </div>
    )
}
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button'
import {userService} from '../../Services/user.service';
import UserCollapse from '../../Components/user_collapse'

function ManageUsersPage() {

    const [users, setUsers] = useState(null)
    const [addUser, setAddUser] = useState(false)

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [isAdmin, setAdmin] = useState(false)

    const [open, setOpen] = useState(false);

    useEffect(() => {
        let usersApi = userService.getAll();
        setUsers(usersApi)
    }, [])

    const upload = () => {
        let dataUser = {
            username: username,
            password: password,
            firstname: firstName,
            name: lastName,
            roles: isAdmin ? ["GESTIONNAIRE"] : ["UTILISATEUR"],
            enabled: true
        }
        userService.post(dataUser).then(res => console.log(res))
    }

    return (
        <div>
            <Button onClick={()=> console.log(users)}></Button>
            <h1>Gestion des utilisateurs</h1>
            <p>Visualisation / Ajout / Supression</p>
            <Button style={{margin:10}} onClick={() => setAddUser(!addUser)}>Ajouter un utilisateur</Button>

            {addUser &&
            <form onSubmit={upload}>
                <div className="form-group">
                    <label htmlFor="inputLastName">Nom</label>
                    <input type="text" className="form-control" id="inputLastName"
                           placeholder="Nom de l'utilisateur" onChange={event => setLastName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputFirstName">Prénom</label>
                    <input type="text" className="form-control" id="inputFirstName"
                           placeholder="Prénom de l'utilisateur" onChange={event => setFirstName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputUsername">Login</label>
                    <input type="text" className="form-control" id="inputUsername"
                           placeholder="Login de l'utilisateur" onChange={event => setUsername(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Mot de passe</label>
                    <input type="text" className="form-control" id="inputPassword"
                           placeholder="Mot de passe de l'utilisateur" onChange={event => setPassword(event.target.value)}/>
                </div>
                <div style={{marginBottom:10}} className="form-check">
                    <input type="checkbox" className="form-check-input" id="isAdmin"
                           onChange={() => setAdmin(!isAdmin)}/>
                    <label className="form-check-label" htmlFor="isAdmin">Gestionnaire</label>
                </div>
                <button style={{textAlign:'center'}} type="submit" className="btn btn-primary">Envoyer</button>
            </form>
            }
            <div>
                <div style={{padding: 20, textAlign: 'center', fontSize: 20}}>
                    Liste des utilisateurs
                </div>
                {users &&
                <div>/*
                    {/*{users.map(user =>*/}
                    {/*    <div style={{margin:10}} key={user.id}>*/}
                    {/*        <UserCollapse user={user}/>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
                }
            </div>
        </div>
    );
}

export {ManageUsersPage};

import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history, Role } from '../Helpers';
import { authenticationService } from '../Services';
import { PrivateRoute } from '../Components';
import { HomePage } from '../Screens/HomePage';
import { LoginPage } from '../Screens/LoginPage';
import { UploadPage } from '../Screens/UploadPage';
import { ManageUsersPage } from '../Screens/ManageUsersPage'
import {ImagePage} from "../Screens/ImagePage";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            isAdmin: false
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin
        }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser, isAdmin } = this.state;
        return (
            <Router history={history}>
                <div>
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Accueil</Link>
                                {isAdmin &&
                                <Link to="/upload" className="nav-item nav-link">Uploader une image</Link>
                                }
                                {isAdmin &&
                                <Link to="/manage_users" className="nav-item nav-link">Gestion des utilisateurs</Link>
                                }
                                <a onClick={this.logout} className="nav-item nav-link">Se déconnecter</a>
                            </div>
                        </nav>
                    }
                    <div className="jumbotron">
                        <div className="container">
                                <div className="d-flex justify-content-center">
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <PrivateRoute path="/upload" roles={[Role.Admin]} component={UploadPage} />
                                    <PrivateRoute path="/manage_users" roles={[Role.Admin]} component={ManageUsersPage} />
                                    <PrivateRoute path="/image/:slug" roles={[Role.Admin, Role.User]} component={ImagePage}/>
                                    <Route path="/login" component={LoginPage} />
                                </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export { App }; 

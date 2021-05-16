import {Role} from './'
import {userService} from '../Services/';

export function configureFakeBackend() {

    let users = []

    let usersGet = userService.getAll().then(user => {
        user.map(user2 => {
            users.push(user2)
        })
    })

    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const authHeader = opts.headers['Authorization'];
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        const roleString = isLoggedIn && authHeader.split('.')[1];
        const role = roleString ? Role[roleString] : null;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    const params = JSON.parse(opts.body);
                    const user = users.find(x => x.username === params.username && x.password === params.password);
                    if (!user) return error('Login ou mot de passe incorrect');
                    return ok({
                        id: user.id,
                        username: user.username,
                        firstName: user.firstname,
                        lastName: user.name,
                        role: user.roles[0],
                        token: `fake-jwt-token.${user.roles[0]}`
                    });
                }

                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    if (!isLoggedIn) return unauthorised();

                    let urlParts = url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);

                    const currentUser = users.find(x => x.roles === role);
                    //if (id !== currentUser.id && role !== Role.Admin) return unauthorised();

                    const user = users.find(x => x.id === id);
                    return ok(user);
                }
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (role !== Role.Admin) return unauthorised();
                    return ok(users);
                }
                realFetch(url, opts).then(response => resolve(response));

                function ok(body) {
                    resolve({ok: true, text: () => Promise.resolve(JSON.stringify(body))})
                }

                function unauthorised() {
                    resolve({status: 401, text: () => Promise.resolve(JSON.stringify({message: 'Unauthorised'}))})
                }

                function error(message) {
                    resolve({status: 400, text: () => Promise.resolve(JSON.stringify({message}))})
                }
            }, 500);
        });
    }
}
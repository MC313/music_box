const express = require('express');
const next = require('next');
const session = require('express-session');
const api = require('./controllers/api.controller');
const auth = require('./controllers/auth.controller');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.SERVER_PORT || 9000;
const app = next({ dev });
const handle = app.getRequestHandler();
const session_options = {
    secret: process.env.SESSION_ID_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}

app.prepare().then(() => {
    const server = express();

    server.use(session(session_options));

    server.get('/api/albums/:pageNumber?', api.albums);
    server.get('/api/songs/:pageNumber?', api.songs);

    server.get('/login', auth.login);
    server.get('/auth', auth.getToken);

    server.get('/music_player', 
        auth.isAuthorized,
        (req, res) => {
            api.getMusic();
            return app.render(req, res, '/')
        }
    );

    server.get('/', (req, res) => res.redirect(301, '/music_player'));

    server.get('/*', (req, res) => handle(req, res));

    server.listen(port, err => {
        if(err) throw err;
        console.log(`Server listening on port ${port}`);
    })
}).catch((err) => 'Error on app.prepare');
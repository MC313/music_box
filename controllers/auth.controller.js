require('dotenv').config();

const crypto = require('crypto');
const NodeCache = require('node-cache');

const dbxConfig = require('./dropbox.config');
const { dbx } = dbxConfig;

const redirectUrl = process.env.OAUTH_REDIRECT_URL;
const sessionSecret = process.env.SESSION_ID_SECRET;

const cache = new NodeCache();

exports.login = (req, res) => {
    const state = crypto.randomBytes(16).toString('hex');

    cache.set(state, sessionSecret, 600);

    authUrl = dbx.getAuthenticationUrl(redirectUrl, state, 'code');
    res.redirect(authUrl);
}

exports.isAuthenticated = (req, res, next) => {
    const token = cache.get('tempTokenKey');
    return token ? next() : res.redirect('/login');
}

exports.getToken = async (req, res, next) => {
    if(req.query.error_description) {
        return next(new Error('Request error.', req.query.error_description));
    }
        
    const state = req.query.state;

    if(!state || !cache.get(state)) {
        return next(new Error("session expired or invalid state."));
    }
    if(req.query.code) {
        try {
            const token = await dbx.getAccessTokenFromCode(redirectUrl, req.query.code);
            cache.set('tempTokenKey', token);
            dbx.setAccessToken(token);
            cache.del(state);
            res.redirect('/music_player');
        } catch (error) {
            next(`Error getting access token. ${error}`);
        }
    }
}
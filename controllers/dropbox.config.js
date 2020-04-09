const Dropbox = require('dropbox').Dropbox;
const fetch = require('isomorphic-fetch');
require('dotenv').config();

const config = {
    fetch,
    clientId: process.env.DROPBOX_APP_KEY,
    clientSecret: process.env.DROPBOX_APP_SECRET
};

const dbx = new Dropbox(config);
exports.dbx = dbx;

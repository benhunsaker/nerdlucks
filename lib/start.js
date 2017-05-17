'use strict';

import Hoek from 'hoek';

import Server from './server';


const internals = {};

internals.server = { port: 8000 };


Server.init(internals.server.port, (err, server) => {

    Hoek.assert(!err, err);
    server.log(['info'], '==> ✅ Server is listening');
    server.log(['info'], `==> 🌎 Go to ${server.info.uri.toLowerCase()}`);
});

'use strict';

import { All } from '../handlers/api';


const internals = {};

const register = function (server, options, next) {
    server.dependency(['inert'], internals.after);

    return next();
};

register.attributes = { name: 'API Routing' };

internals.after = (server, next) => {

    server.route({ method: 'GET', path: `/api/tournaments`, config: All });

    return next();
};

export default { register };

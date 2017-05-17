'use strict';

import Boom from 'boom';


const internals = {};


const All = {
    description: 'List of all routes',
    handler: (request, reply) => {

        return reply(["test"]);
    }
};

export default { All };

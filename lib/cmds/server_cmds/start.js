const server = require('../../server');

exports.command = 'start';

exports.desc = 'Start a server';

exports.builder = yargs => yargs;

exports.handler = argv => server.init().then(server.start);

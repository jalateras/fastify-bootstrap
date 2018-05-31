const convict = require('convict');
const schema = require('./schema');

const config = convict(schema);
config.validate({ allowed: 'strict' });

module.exports = config;

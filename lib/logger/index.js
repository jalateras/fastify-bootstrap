const pino = require('pino');
const config = require('../config');

module.exports = pino({
  level: config.get('logger.level'),
  prettyPrint: config.get('env') !== 'production'
});

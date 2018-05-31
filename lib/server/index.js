const config = require('../config');
const logger = require('../logger');
const fastify = require('fastify')({ logger });
const helmet = require('fastify-helmet');
const moment = require('moment');
const prometheus = require('../plugins/prometheus');
const api = require('../api');

exports.init = async () => {
  logger.debug('Initializing server');
  fastify.decorate('config', config);
  fastify.decorate('startTime', moment());

  logger.debug('Registering helmet');
  fastify.register(helmet);

  logger.debug('Register prometheus');
  fastify.register(prometheus);

  logger.debug('Setting up routes');
  fastify.register(api);
};

exports.start = async() => {
  try {
    await fastify.listen(config.get('port'), config.get('host'));
    logger.debug(`Server started on ${config.get('host')}:${config.get('port')}`);
  } catch (err) {
    logger.error(`Failed to start the server ${err.stack}`);
    process.exit(1);
  }
};

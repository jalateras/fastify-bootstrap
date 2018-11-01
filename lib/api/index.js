const pkg = require('../../package');
const metrics = require('./metrics');
const swagger = require('fastify-swagger');
const version = require('./v1/version');

const swaggerOption = {
  swagger: {
    info: {
      title: pkg.name,
      description: pkg.description,
      version: pkg.version
    },
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: true,
  routePrefix: '/v1/swagger'
};

module.exports = async (fastify, opts) => {
  fastify
    .register(metrics, { prefix: '/metrics' })
    .register(swagger, swaggerOption)
    .register(version, { prefix: '/v1/version' })
    .register(version, { prefix: '/v1/relay' });
};

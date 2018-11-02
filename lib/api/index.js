const path = require('path');
const metrics = require('./metrics');
const swagger = require('fastify-swagger');
const version = require('./v1/version');
const relay = require('./v1/relay');

const swaggerOption = {
  mode: 'static',
  specification: {
    path: path.join(__dirname, 'v1', 'bootstrap-spec-v1.yaml')
  },
  exposeRoute: true,
  routePrefix: '/swagger'
};

module.exports = async (fastify, opts) => {
  fastify
    .register(metrics, { prefix: '/metrics' })
    .register(swagger, swaggerOption)
    .register(version, { prefix: '/v1/version' })
    .register(relay, { prefix: '/v1/relay' });
};

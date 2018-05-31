const Prometheus = require('prom-client');

module.exports = async (fastify, opts) => {
  fastify.get('/', async (req, reply, next) => {
    reply.header('Content-Type', Prometheus.register.contentType);
    return Prometheus.register.metrics();
  });
};

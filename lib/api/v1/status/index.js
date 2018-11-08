const moment = require('moment');
const pkg = require('../../../../package');

module.exports = async (fastify, opts) => {
  fastify.get('/', async (req, reply) => {
    const info = {
      name: pkg.name,
      version: pkg.version,
      startTime: fastify.startTime.format(),
      upTime: moment.duration(moment() - fastify.startTime).humanize()
    };

    return info;
  });
};

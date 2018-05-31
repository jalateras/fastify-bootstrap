const moment = require('moment');
const Schema = require('./schema');
const pkg = require('../../../../package');

module.exports = async (fastify, opts) => {
  fastify.get('/', Schema.versionInfo, async (req, reply) => {
    const info = {
      name: pkg.name,
      version: pkg.version,
      startTime: fastify.startTime.format(),
      upTime: moment.duration(moment() - fastify.startTime).humanize()
    };

    return info;
  });
};

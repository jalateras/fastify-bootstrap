module.exports = async (fastify, opts) => {
  fastify.post('/', async (req, reply) => {
    reply.code(201);
    reply.send({});
  });
};

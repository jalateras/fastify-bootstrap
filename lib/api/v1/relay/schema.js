const versionInfo = {
  schema: {
    description: 'Get version information',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          version: {
            type: 'string'
          },
          startTime: {
            type: 'string'
          },
          upTime: {
            type: 'string'
          }
        },
        required: [
          'name',
          'version',
          'startTime',
          'upTime'
        ],
        additionalProperties: false
      }
    }
  }
};

module.exports = {
  versionInfo
};

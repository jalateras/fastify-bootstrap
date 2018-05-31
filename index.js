/* eslint no-unused-expressions: "off" */
const yargs = require('yargs');
const conf = require('./lib/config');

yargs
  .config({ $conf: conf })
  .commandDir('./lib/cmds')
  .demand(1)
  .argv;

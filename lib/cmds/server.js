exports.command = 'server <command>';

exports.desc = 'Server management';

exports.builder = yargs => yargs.commandDir('server_cmds');

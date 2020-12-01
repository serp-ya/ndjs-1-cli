#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { commands } = require('./commands');

const binFreeArgv = hideBin(process.argv);

yargs(binFreeArgv)
    .command(commands.current)
    .command(commands.add)
    .command(commands.sub)
    .alias('d', 'date')
    .describe('d', 'Get/set days to the current Date')
    .alias('m', 'month')
    .describe('m', 'Get/set months to the current Date')
    .alias('y', 'year')
    .describe('y', 'Get/set years to the current Date')
    .help('h')
    .alias('h', 'help')
    .argv;

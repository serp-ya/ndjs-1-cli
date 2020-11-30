const { COMMANDS_NAMES } = require('../date-getter-constants');
const { add } = require('./add');
const { current } = require('./current');
const { sub } = require('./sub');

const commands = {
    [COMMANDS_NAMES.ADD]: add,
    [COMMANDS_NAMES.CURRENT]: current,
    [COMMANDS_NAMES.SUB]: sub,
};

module.exports = {
    commands,
};
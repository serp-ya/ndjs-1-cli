const { COMMANDS_NAMES } = require('../date-getter-constants');
const { changeDate, formatOutputDate } = require('../date-getter-utils');

const command = COMMANDS_NAMES.ADD;
const describe = 'Add some time to the current date';
const handler = (argv) => {
    const currentDate = changeDate(new Date(), argv, true);
    process.stdout.write(formatOutputDate(currentDate));
};

module.exports = {
    add: {
        command,
        describe,
        handler,
    },
};
const { COMMANDS_NAMES } = require('../date-getter-constants');
const { changeDate, formatOutputDate } = require('../date-getter-utils');

const command = COMMANDS_NAMES.SUB;
const describe = 'Sub some time from the current date';
const handler = (argv) => {
    const currentDate = changeDate(new Date(), argv);
    process.stdout.write(formatOutputDate(currentDate));
};

module.exports = {
    sub: {
        command,
        describe,
        handler,
    },
};
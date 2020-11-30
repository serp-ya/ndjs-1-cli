const { COMMANDS_NAMES, DIFF_BETWEEN_MONTH_INDEX_AND_REAL } = require('../date-getter-constants');
const { formatOutputDate } = require('../date-getter-utils');

const getCurrentDate = (argv) => {
    const currentDate = new Date();
    if (argv.y || argv.year) {
        return currentDate.getFullYear();
    }
    if (argv.m || argv.month) {
        return currentDate.getMonth() + DIFF_BETWEEN_MONTH_INDEX_AND_REAL;
    }
    if (argv.d || argv.date) {
        return currentDate.getDate();
    }
    
    return formatOutputDate(currentDate);
};

const command = COMMANDS_NAMES.CURRENT;
const describe = 'Get current date';
const handler = (argv) => {
    const currentDate = getCurrentDate(argv);

    if (currentDate) {
        process.stdout.write(String(currentDate));
    }
    process.exit(1);
};

module.exports = {
    current: {
        command,
        describe,
        handler,
    },
};
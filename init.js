const fs = require('fs');
const path = require('path');

fs.chmodSync(
    path.resolve(__dirname, './src/date-getter/index.js'),
    '0775',
);
fs.chmodSync(
    path.resolve(__dirname, './src/vang-ui/index.js'),
    '0775',
);
const { red, blue, green } = require('chalk');

module.exports = async(client) => {
    require('filget-extra').get(client)
    require('../functions/readyFunction').get(client, red, blue);
};

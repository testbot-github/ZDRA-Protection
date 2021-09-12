const db = require('quick.db');

module.exports = async(client, guild) => {
    require('../functions/guildCreateFunction').get(guild, db);
};
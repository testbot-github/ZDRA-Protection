const db = require('quick.db');

module.exports = async(client, oldMessage, newMessage) => {
    require('../functions/messageUpdateFunction').get(oldMessage, newMessage, db);
};
async function guildCreateFunction(guild, db) {
    db.set(`Settings_${guild.id}`, {
        prefix: require('../../config/bot.json').mainPrefix,
        lang: require('../../config/bot.json').mainLang,
        admins: [`${require('../../config/bot.json').mainAdmin}`]
    });
};

module.exports.get = guildCreateFunction;
const { activity } = require('../../config/bot.json');
const { status } = require('../../config/bot.json');

async function ReadyFunction(client, red, blue) {
    console.log(blue('Connected in to: ') + red(client.user.username));
    await client.user.setActivity(activity.name, {
        type: activity.type
    });
    await client.user.setStatus(status);
};

module.exports.get = ReadyFunction;
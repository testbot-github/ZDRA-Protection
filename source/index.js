require('dotenv').config();
require('./server/server');
const { red, blue, green, gray } = require('chalk');
const { Client, Collection, Intents } = require('discord.js');
const commands = new Collection();
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true
    }
});

client.slashCommands = new Collection();
client.commands = commands;
client.on("message", async function(message) {
    require('./functions/messagesSpamFunction').get(message, require('quick.db'))
    require('./functions/messageFunction').get(message, require('quick.db'))
});

require('./models/events/loader').run(blue, red, client, __dirname);
require('./models/commands/loader').run(blue, red, commands, __dirname);
require('./models/slashCommands/loader').run(client);

client.login(process.env.TOKEN).then(async function(token) {
    console.log(gray(require('figlet').textSync(require('./server/server'), { font: "Blocks" })));
    console.log(red.bold('Discord.JS Is Connect On: ') + green(token.split('.')[0] + '************************************'));
    console.log(blue.bold('https://discord.gg/developer-support') + red(' If You Need Support!!.'));
}).catch(async function(error) {
    console.log(red.bold(error));
});
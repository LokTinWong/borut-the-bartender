require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

var DRINKS = ['Beer', 'Vodka', 'Rum', 'Whisky', 'Wine'];

// Not currently in use
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('clientReady', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    // Ignore messages from other bots
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('Pong!');
    }

    if (message.content === '!orderrandom') {
        randomDrink = DRINKS[Math.floor(Math.random() * DRINKS.length)];

        message.reply(`You have ordered a glass of ${randomDrink}.`);
    }
});

client.login(process.env.DISCORD_TOKEN);
